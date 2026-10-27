// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
});
