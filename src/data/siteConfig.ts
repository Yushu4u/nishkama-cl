export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "Nishkama CodeLab",
  shortName: "NCL",
  tagline: "Quality Advocates for Your Product",
  description:
    "Nishkama CodeLab provides independent QA testing, product quality audits, exploratory testing, regression testing, usability validation, and Quality Advocacy for technology teams.",
  email: "hello@nishkamacodelab.com",
  canonicalUrl: "https://nishkamacodelab.com",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Quality Advocacy", href: "/quality-advocacy" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  footerLinks: {
    services: [
      { label: "Functional Testing", href: "/services#functional-testing" },
      { label: "Exploratory Testing", href: "/services#exploratory-testing" },
      { label: "Regression Testing", href: "/services#regression-testing" },
      { label: "Compatibility Testing", href: "/services#compatibility-testing" },
      { label: "Usability & UX Testing", href: "/services#usability-testing" },
      { label: "End-to-End Testing", href: "/services#e2e-testing" },
      { label: "Release Validation", href: "/services#release-validation" },
      { label: "Quality Audit", href: "/services#quality-audit" },
    ],
    company: [
      { label: "About NCL", href: "/about" },
      { label: "Quality Advocacy", href: "/quality-advocacy" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
