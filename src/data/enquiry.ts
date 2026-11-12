/*
 * Shared rules for the enquiry form. Used by the form markup, the browser
 * validation script and the server action, so all three stay in step.
 */

export const projectTypes = [
  { value: "extensions", label: "Bespoke House Extension" },
  { value: "roofing", label: "Roofing & Leadwork Repair/New" },
  { value: "carpentry", label: "Carpentry & Structural Joinery" },
  { value: "kitchen-bath", label: "Kitchen or Bathroom Overhaul" },
  { value: "driveway", label: "Driveway & Groundworks" },
  { value: "commercial", label: "Commercial / Full Renovation" },
] as const;

export type ProjectTypeValue = (typeof projectTypes)[number]["value"];

/* Digits, spaces, "+", "(", ")" and "-", 10–20 characters. Written without
   anchors so it also works as an HTML pattern attribute (which is anchored). */
export const phonePattern = "[0-9+()\\s\\-]{10,20}";

export const maxLengths = {
  name: 100,
  email: 254,
  overview: 2000,
} as const;

/* Shown under each field when it's invalid. Keys match the input names. */
export const fieldMessages = {
  name: "Please enter your full name.",
  phone: "Please enter a valid phone number.",
  email: "Please enter a valid email address.",
  projectType: "Please choose a project type.",
  overview: "Please tell us a little about your project and its location.",
} as const;

export type EnquiryField = keyof typeof fieldMessages;

/* Hidden spam trap. Real visitors never see or fill it in. */
export const honeypotField = "company";
