/*
 * Client testimonials, from https://www.jphbuilding.co.uk/testimonials/ and
 * /testimonials-2/. Quotes are verbatim excerpts — never reword them; use
 * "…" where sentences are skipped.
 */

export interface Testimonial {
  quote: string;
  name: string;
  /* Location and/or project, shown under the name. */
  detail: string;
  /* Shown in the home page marquee. Keep to 5 at most, ~27 words each. */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our project was completed to a high standard and on price. Errors in the design were quickly picked up by Jason before they became a costly problem …",
    name: "Mr B Patel",
    detail: "Cheltenham · Side & rear extension",
    featured: true,
  },
  {
    quote:
      "This was a difficult job, but Jason was brilliant, really stepped up to the plate … It was a first-class job and I would highly recommend Jason and his team.",
    name: "Mr J Cresswell",
    detail: "Toddington · Barn conversion",
    featured: true,
  },
  {
    quote:
      "His team were such pleasant guys and as my intention was for the building to look like an established coach house, it has been a great success.",
    name: "Valerie du Monceau",
    detail: "Garage · Grade II listed property",
    featured: true,
  },
  {
    quote:
      "You have done an excellent job, completing the build on budget and ahead of schedule, despite the winter weather.",
    name: "Helen and Nigel Woodford",
    detail: "Two extensions",
    featured: true,
  },
  {
    quote:
      "We had complete confidence in Jason’s project management of plumbers, tilers, electricians etc. They turned up and did the job on time.",
    name: "Mrs Ann Handley",
    detail: "Renovation of two terraced houses",
  },
  {
    quote:
      "What really impressed me were Jason’s project management skills – materials and sub-contractors turned up when they were required without fuss or drama.",
    name: "Simon Haden",
    detail: "Two-storey extension",
    featured: true,
  },
  {
    quote:
      "The end result is that we have a house that we are really proud of, thank you for helping us achieve that.",
    name: "Mr & Mrs G Watkins",
    detail: "Loft conversion & structural repairs",
  },
  {
    quote:
      "Communication was excellent and there were no surprises with the final bill. … We would certainly recommend Jason to others.",
    name: "Mr & Mrs S. M. Naylor",
    detail: "Kitchen, bathroom extension & new roof",
  },
  {
    quote:
      "Your tender arrived as we specified (the only one!), your timing for duration of work was excellent and your workmen very efficient, putting in the hours as and when necessary.",
    name: "Sue and Nick Smiles",
    detail: "Extension & renovation",
  },
  {
    quote:
      "… we have been pleased to recommend Jason to our friends both for the standard of his workmanship and for his professionalism.",
    name: "Mr & Mrs R Gould",
    detail: "Kitchen extension",
  },
  {
    quote:
      "… I have used the services of Jason Heseltine (JPH Building) for both large and small building works and have always found his work to be completely satisfactory.",
    name: "Mrs J. E. Jarvis MBE",
    detail: "Large & small building works",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
