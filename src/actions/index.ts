import { ActionError, defineAction } from "astro:actions";
import {
  BREVO_API_KEY,
  ENQUIRY_FROM_EMAIL,
  ENQUIRY_TO_EMAIL,
} from "astro:env/server";
import { z } from "astro/zod";
import {
  fieldMessages,
  honeypotField,
  maxLengths,
  phonePattern,
  projectTypes,
} from "$data/enquiry";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const projectTypeValues = projectTypes.map((type) => type.value) as [
  string,
  ...string[],
];

const enquirySchema = z.object({
  // `error` on z.string() covers empty fields, which arrive as null.
  name: z
    .string({ error: fieldMessages.name })
    .trim()
    .min(1, fieldMessages.name)
    .max(maxLengths.name, fieldMessages.name),
  phone: z
    .string({ error: fieldMessages.phone })
    .trim()
    .regex(new RegExp(`^${phonePattern}$`), fieldMessages.phone),
  email: z
    .string({ error: fieldMessages.email })
    .trim()
    .max(maxLengths.email, fieldMessages.email)
    .pipe(z.email(fieldMessages.email)),
  projectType: z.enum(projectTypeValues, fieldMessages.projectType),
  overview: z
    .string({ error: fieldMessages.overview })
    .trim()
    .min(1, fieldMessages.overview)
    .max(maxLengths.overview, fieldMessages.overview),
  [honeypotField]: z.string().optional(),
});

type Enquiry = z.infer<typeof enquirySchema>;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const projectTypeLabel = (value: string) =>
  projectTypes.find((type) => type.value === value)?.label ?? value;

function buildEmail(enquiry: Enquiry) {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Project type", projectTypeLabel(enquiry.projectType)],
    ["Project overview / location", enquiry.overview],
  ];

  const textContent = rows
    .map(([label, value]) => `${label}:\n${value}`)
    .join("\n\n");

  const htmlContent = `<h2>New website enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">
${rows
  .map(
    ([label, value]) =>
      `<tr><th align="left" valign="top">${label}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  )
  .join("\n")}
</table>`;

  return { textContent, htmlContent };
}

export const server = {
  sendEnquiry: defineAction({
    accept: "form",
    input: enquirySchema,
    handler: async (enquiry) => {
      // Honeypot filled in: almost certainly a bot. Pretend it worked so the
      // bot gets no signal, but send nothing.
      if (enquiry[honeypotField]) return { sent: true };

      if (!BREVO_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
        console.error(
          "Enquiry email is not configured: set BREVO_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL",
        );
        throw new ActionError({ code: "INTERNAL_SERVER_ERROR" });
      }

      const recipients = ENQUIRY_TO_EMAIL.split(",")
        .map((email) => email.trim())
        .filter(Boolean)
        .map((email) => ({ email }));

      const { textContent, htmlContent } = buildEmail(enquiry);

      let response: Response;
      try {
        response = await fetch(BREVO_ENDPOINT, {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: { email: ENQUIRY_FROM_EMAIL, name: "JPH Building website" },
            to: recipients,
            replyTo: { email: enquiry.email, name: enquiry.name },
            subject: `Website enquiry: ${projectTypeLabel(enquiry.projectType)} (${enquiry.name})`,
            textContent,
            htmlContent,
          }),
          signal: AbortSignal.timeout(10_000),
        });
      } catch (error) {
        // Log the failure, never the enquiry itself.
        console.error("Enquiry email request failed", error);
        throw new ActionError({ code: "INTERNAL_SERVER_ERROR" });
      }

      if (!response.ok) {
        console.error(`Brevo rejected enquiry email: HTTP ${response.status}`);
        throw new ActionError({ code: "INTERNAL_SERVER_ERROR" });
      }

      return { sent: true };
    },
  }),
};
