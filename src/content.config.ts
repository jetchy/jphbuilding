import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

/*
 * Completed Renovations gallery. To add a photo: drop it in
 * src/images/gallery/ and add an entry to src/data/gallery.json.
 * Image paths are relative to the JSON file. Entries without an image
 * render as placeholder tiles.
 */
const gallery = defineCollection({
  loader: file("src/data/gallery.json"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      category: z.enum(["external", "internal"]),
      image: image().optional(),
      alt: z.string().optional(),
      order: z.number(),
    }),
});

export const collections = { gallery };
