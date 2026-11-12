import { z } from "zod";

export const needOptions = [
  "QA Assessment (1–2 weeks)",
  "Project QA (Milestone/Release)",
  "Ongoing QA Partner (Embedded)",
  "Quality Advocacy (Comprehensive)",
  "XR & Spatial Software QA",
  "Functional Testing",
  "Exploratory Testing",
  "Regression Testing",
  "Compatibility Testing",
  "Usability & Product Experience",
  "End-to-End Testing",
  "Release Validation",
  "Quality Audit",
  "Other / Custom Inquiry",
] as const;

export const timelineOptions = [
  "Immediate (within 1–2 weeks)",
  "Next month",
  "This quarter (1–3 months)",
  "Flexible / Planning ahead",
] as const;

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required." })
    .max(80, { message: "First name must be under 80 characters." })
    .regex(/^[\p{L}\s'’.-]+$/u, {
      message: "First name cannot contain numbers or special symbols.",
    })
    .refine((val) => /\p{L}/u.test(val), {
      message: "First name must contain at least one letter.",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required." })
    .max(80, { message: "Last name must be under 80 characters." })
    .regex(/^[\p{L}\s'’.-]+$/u, {
      message: "Last name cannot contain numbers or special symbols.",
    })
    .refine((val) => /\p{L}/u.test(val), {
      message: "Last name must contain at least one letter.",
    }),
  workEmail: z
    .string()
    .trim()
    .min(1, { message: "Work email is required." })
    .email({ message: "Please provide a valid email address." })
    .max(120, { message: "Email must be under 120 characters." }),
  company: z
    .string()
    .trim()
    .min(1, { message: "Company name is required." })
    .max(100, { message: "Company name must be under 100 characters." }),
  productWebsite: z
    .string()
    .trim()
    .max(150, { message: "Product / website URL must be under 150 characters." })
    .optional()
    .or(z.literal("")),
  needHelpWith: z
    .string()
    .min(1, { message: "Please select what you need help with." }),
  currentQaSetup: z
    .string()
    .trim()
    .max(500, { message: "Current QA setup must be under 500 characters." })
    .optional()
    .or(z.literal("")),
  expectedTimeline: z
    .string()
    .optional()
    .or(z.literal("")),
  details: z
    .string()
    .trim()
    .max(1000, { message: "Additional details must be under 1,000 characters." })
    .optional()
    .or(z.literal("")),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must consent to our privacy policy to proceed.",
    }),
  // Spam honeypot: Must remain empty
  website_hp: z.string().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const careerRoleOptions = [
  "QA Engineer (1–2 Years Exp.)",
  "Senior QA Engineer (3–5 Years Exp.)",
  "Lead QA Engineer (9+ Years Exp.)",
  "General QA Application",
] as const;

export const careerExperienceOptions = [
  "1–2 years",
  "3–5 years",
  "5–8 years",
  "9+ years",
  "Less than 1 year / Fresher",
] as const;

export const noticePeriodOptions = [
  "Immediate / Available Now",
  "15 Days",
  "30 Days / 1 Month",
  "60 Days / 2 Months",
  "90 Days / 3 Months",
  "Currently exploring",
] as const;

export const careerApplicationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required." })
    .max(80, { message: "First name must be under 80 characters." })
    .regex(/^[\p{L}\s'’.-]+$/u, {
      message: "First name cannot contain numbers or special symbols.",
    })
    .refine((val) => /\p{L}/u.test(val), {
      message: "First name must contain at least one letter.",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required." })
    .max(80, { message: "Last name must be under 80 characters." })
    .regex(/^[\p{L}\s'’.-]+$/u, {
      message: "Last name cannot contain numbers or special symbols.",
    })
    .refine((val) => /\p{L}/u.test(val), {
      message: "Last name must contain at least one letter.",
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." })
    .max(120, { message: "Email must be under 120 characters." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number must be under 30 characters." })
    .optional()
    .or(z.literal("")),
  role: z
    .string()
    .min(1, { message: "Please select the role you are applying for." }),
  experienceYears: z
    .string()
    .min(1, { message: "Please select your years of experience." }),
  noticePeriod: z
    .string()
    .optional()
    .or(z.literal("")),
  resumeUrl: z
    .string()
    .trim()
    .min(1, { message: "Please provide a link to your resume or portfolio." })
    .max(300, { message: "Resume URL must be under 300 characters." })
    .refine(
      (val) => {
        try {
          const url =
            val.startsWith("http://") || val.startsWith("https://")
              ? val
              : `https://${val}`;
          const parsed = new URL(url);
          return parsed.hostname.includes(".");
        } catch {
          return false;
        }
      },
      {
        message:
          "Please enter a valid link (e.g. Google Drive, Dropbox, Notion, or LinkedIn).",
      }
    ),
  linkedinUrl: z
    .string()
    .trim()
    .max(300, { message: "LinkedIn URL must be under 300 characters." })
    .optional()
    .or(z.literal("")),
  currentCompany: z
    .string()
    .trim()
    .max(100, { message: "Current company must be under 100 characters." })
    .optional()
    .or(z.literal("")),
  coverNote: z
    .string()
    .trim()
    .max(1500, { message: "Cover note must be under 1,500 characters." })
    .optional()
    .or(z.literal("")),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must consent to our privacy policy to proceed.",
    }),
  website_hp: z.string().optional().or(z.literal("")),
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;
