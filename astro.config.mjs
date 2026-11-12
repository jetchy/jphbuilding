// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta",
      weights: [400, 500, 600, 700, 800],
      styles: ["normal", "italic"],
      fallbacks: ["Inter", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      weights: [400, 500, 700],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],

  // Pages stay prerendered; only the enquiry action runs as a Netlify Function.
  // Local dev features of the Netlify adapter:
  // - edgeFunctions off: the site doesn't use Edge Functions, and Netlify's
  //   local Edge Functions server needs Deno (it fails to connect without it).
  // - environmentVariables off: secrets come from a local .env, not a linked
  //   Netlify site (this is the adapter's default).
  // - images on: Netlify Image CDN emulation (the adapter's default).
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
      environmentVariables: false,
      images: true,
    },
  }),

  // No sessions: the site stores nothing about visitors or enquiries. (The
  // Netlify adapter would otherwise enable sessions backed by Netlify Blobs.)
  session: false,

  // Secrets are read at request time from Netlify's environment variables
  // (or a local .env). They are never inlined into the build or sent to the
  // browser. See .env.example for the names.
  // Marked optional so the site still runs locally without them; the enquiry
  // action checks they're set and fails cleanly if not.
  env: {
    schema: {
      BREVO_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      // Comma-separated list of addresses that receive enquiries.
      ENQUIRY_TO_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      // Verified Brevo sender, e.g. noreply@jphbuilding.co.uk.
      ENQUIRY_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
});
