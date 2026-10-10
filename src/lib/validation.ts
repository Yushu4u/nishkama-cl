import { z } from "zod";

export const needOptions = [
  "QA Assessment (1–2 weeks)",
  "Project QA (Milestone/Release)",
  "Ongoing QA Partner (Embedded)",
  "Quality Advocacy (Comprehensive)",
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
    .max(80, { message: "First name must be under 80 characters." }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required." })
    .max(80, { message: "Last name must be under 80 characters." }),
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
