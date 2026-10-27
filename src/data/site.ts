export const contact = {
  email: "info@jphbuilding.co.uk",
  phoneDisplay: "07951 838362",
  phoneHref: "tel:+447951838362",
  contactName: "Jason Heseltine",
};

export const credentials = {
  area: "Cheltenham & Throughout Gloucestershire",
  experience: "Established Local Builder • Over 30 Years Experience",
};

export const companyBlurb =
  "Owned and run by Jason Heseltine with over 30 years' experience in the building industry. Specialising in domestic & commercial extensions, alterations, roofing, carpentry, and fine finishes throughout Cheltenham and Gloucestershire.";

export interface NavItem {
  index: string;
  label: string;
  href: string;
}

/* Single-page site: navigation targets section anchors on the home page. */
/* "Why JPH" and "Gallery" are hidden until their sections exist; renumber the
   indexes when restoring them. */
export const navItems: NavItem[] = [
  { index: "01", label: "About", href: "#about" },
  // { index: "02", label: "Why JPH", href: "#why-jph" },
  { index: "02", label: "Services", href: "#expertise" },
  // { index: "04", label: "Gallery", href: "#gallery" },
  { index: "03", label: "Testimonials", href: "#testimonials" },
];

export const enquireHref = "#consultation";

export const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "About Jason Heseltine", href: "#about" },
  // { label: "Why JPH", href: "#why-jph" },
  { label: "Services", href: "#expertise" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

export const footerServices = [
  "Extensions & Conversions",
  "Roofing & Chimneys",
  "Carpentry & Joinery",
  "Kitchen & Bathroom Fitting",
  "Landscaping & Driveways",
  "Structural Steelwork",
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Insurance & Guarantees", href: "#" },
  { label: "Sitemap", href: "#" },
];
