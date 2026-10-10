export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  verified: boolean;
}

// In compliance with our integrity standards:
// We do not invent fictional testimonials or fake client claims.
// This collection is CMS-ready and will display genuine partner quotes as they are officially approved and verified.
export const testimonials: Testimonial[] = [];
