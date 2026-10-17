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
  brand: {
    colors: {
      navy: "#0E2539",
      blue: "#2F7CEF",
      blueHover: "#1E66D8",
      white: "#FFFFFF",
      surfaceSubtle: "#F8FAFC",
      border: "#E2E8F0",
    },
    assets: {
      iconSquare: "/brand/ncl-icon-square.jpg",
      logoLockup: "/brand/ncl-logo-lockup.png",
      logoBanner: "/brand/ncl-logo-banner.jpg",
    },
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Quality Advocacy", href: "/quality-advocacy" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  serviceSubPages: [
    { label: "XR & Spatial QA", href: "/services/xr-testing", desc: "VisionOS, Meta Quest, WebXR & spatial apps" },
    { label: "Functional Testing", href: "/services/functional-testing", desc: "Core feature verification & business rules" },
    { label: "Exploratory Testing", href: "/services/exploratory-testing", desc: "Unscripted edge-case discovery & bug hunting" },
    { label: "Regression Testing", href: "/services/regression-testing", desc: "Protecting critical paths and release safety" },
    { label: "Compatibility Testing", href: "/services/compatibility-testing", desc: "Cross-browser, OS, and physical device QA" },
    { label: "Usability & UX Testing", href: "/services/usability-testing", desc: "Real-user journey friction & microcopy audit" },
    { label: "End-to-End Testing", href: "/services/e2e-testing", desc: "Multi-service workflows, webhooks & data flow" },
    { label: "Release Validation", href: "/services/release-validation", desc: "Pre-deployment smoke gates & go/no-go decisions" },
    { label: "Quality Audit", href: "/services/quality-audit", desc: "1–2 week intensive diagnostic of coverage gaps" },
  ],
  footerLinks: {
    services: [
      { label: "XR & Spatial QA", href: "/services/xr-testing" },
      { label: "Functional Testing", href: "/services/functional-testing" },
      { label: "Exploratory Testing", href: "/services/exploratory-testing" },
      { label: "Regression Testing", href: "/services/regression-testing" },
      { label: "Compatibility Testing", href: "/services/compatibility-testing" },
      { label: "Usability & UX Testing", href: "/services/usability-testing" },
      { label: "End-to-End Testing", href: "/services/e2e-testing" },
      { label: "Release Validation", href: "/services/release-validation" },
      { label: "Quality Audit", href: "/services/quality-audit" },
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
