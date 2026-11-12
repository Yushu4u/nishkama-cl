"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import {
  careerApplicationSchema,
  careerRoleOptions,
  careerExperienceOptions,
  noticePeriodOptions,
  type CareerApplicationData,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

interface CareerApplicationFormProps {
  initialRole?: string;
}

const roleSlugMap: Record<string, string> = {
  "qa-engineer": "QA Engineer (1–2 Years Exp.)",
  "senior-qa-engineer": "Senior QA Engineer (3–5 Years Exp.)",
  "lead-qa-engineer": "Lead QA Engineer (9+ Years Exp.)",
  general: "General QA Application",
};

export function CareerApplicationForm({ initialRole }: CareerApplicationFormProps) {
  const defaultRole =
    (initialRole && roleSlugMap[initialRole.toLowerCase()]) || careerRoleOptions[0];

  const [formData, setFormData] = useState<CareerApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: defaultRole,
    experienceYears: careerExperienceOptions[0],
    noticePeriod: noticePeriodOptions[0],
    resumeUrl: "",
    linkedinUrl: "",
    currentCompany: "",
    coverNote: "",
    privacyConsent: false,
    website_hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    receiptId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (typeof value === "string" && value.trim().length > 0) {
      const fieldShape = (
        careerApplicationSchema.shape as Record<
          string,
          | {
              safeParse: (val: unknown) => {
                success: boolean;
                error?: { issues: Array<{ message: string }> };
              };
            }
          | undefined
        >
      )[name];

      if (fieldShape) {
        const result = fieldShape.safeParse(value);
        if (!result.success && result.error?.issues[0]?.message) {
          setFieldErrors((prev) => ({
            ...prev,
            [name]: result.error!.issues[0].message,
          }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    trackEvent({
      name: "career_application_attempt",
      properties: { selectedRole: formData.role },
    });

    const validation = careerApplicationSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      const failedFields: string[] = [];
      for (const issue of validation.error.issues) {
        const field = issue.path[0] ? String(issue.path[0]) : "form";
        if (!errors[field]) {
          errors[field] = issue.message;
          failedFields.push(field);
        }
      }
      setFieldErrors(errors);

      trackEvent({
        name: "career_application_validation_failed",
        properties: { errorCount: failedFields.length, fields: failedFields },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.error || "Application submission failed. Please try again.");
      }

      setSubmitSuccess({
        receiptId: data.receiptId,
        message: data.message || "Your application was submitted successfully.",
      });

      trackEvent({
        name: "career_application_success",
        properties: { role: formData.role },
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email hello@nishkamacodelab.com.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        className="rounded-3xl border border-emerald-200 bg-white p-8 md:p-12 shadow-sm text-center"
        role="region"
        aria-live="polite"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-mono font-bold text-emerald-700 border border-emerald-200 mb-3">
          RECEIPT: {submitSuccess.receiptId}
        </span>

        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Application Received
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-lg mx-auto">
          {submitSuccess.message}
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left text-xs text-slate-600 space-y-3 max-w-lg mx-auto">
          <p className="font-bold text-slate-900 uppercase tracking-wider">
            What Happens Next?
          </p>
          <p>
            <strong>1. Engineering Review:</strong> A senior QA lead reviews your experience, skills, and bug reporting style.
          </p>
          <p>
            <strong>2. Practical Bug Challenge:</strong> Candidates passing initial review receive a 45-minute exploratory bug-hunt exercise.
          </p>
          <p>
            <strong>3. Final Conversation &amp; Offer:</strong> Discussion on team fit, methodology, and compensation.
          </p>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setSubmitSuccess(null);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                role: defaultRole,
                experienceYears: careerExperienceOptions[0],
                noticePeriod: noticePeriodOptions[0],
                resumeUrl: "",
                linkedinUrl: "",
                currentCompany: "",
                coverNote: "",
                privacyConsent: false,
                website_hp: "",
              });
            }}
            className="text-xs font-bold text-[#2F7CEF] underline underline-offset-4 hover:text-[#1E66D8] transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-12 shadow-sm"
      aria-label="Job Application Form"
    >
      {/* Bot honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave this field blank</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_hp}
          onChange={handleChange}
        />
      </div>

      {serverError && (
        <div
          className="mb-8 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-900"
          role="alert"
        >
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <div>
            <p className="font-bold">Submission Alert</p>
            <p className="mt-1">{serverError}</p>
          </div>
        </div>
      )}

      {/* Row 1: Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            First Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ada"
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
              fieldErrors.firstName ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
            }`}
          />
          {fieldErrors.firstName && (
            <p id="firstName-error" className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.firstName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Last Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.lastName)}
            aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Lovelace"
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
              fieldErrors.lastName ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
            }`}
          />
          {fieldErrors.lastName && (
            <p id="lastName-error" className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ada@example.com"
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
              fieldErrors.email ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
            }`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          />
        </div>
      </div>

      {/* Row 3: Role & Experience */}
      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        <div>
          <label
            htmlFor="role"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Role Applying For <span className="text-rose-500">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          >
            {careerRoleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="experienceYears"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Total QA Experience <span className="text-rose-500">*</span>
          </label>
          <select
            id="experienceYears"
            name="experienceYears"
            required
            value={formData.experienceYears}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          >
            {careerExperienceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Resume URL (Google Drive / Dropbox / Notion / Portfolio) */}
      <div className="mt-6">
        <label
          htmlFor="resumeUrl"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Resume / CV Link <span className="text-rose-500">*</span>
        </label>
        <input
          type="url"
          id="resumeUrl"
          name="resumeUrl"
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.resumeUrl)}
          aria-describedby={fieldErrors.resumeUrl ? "resumeUrl-error" : "resumeUrl-hint"}
          value={formData.resumeUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="https://drive.google.com/file/d/... or Dropbox link"
          className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
            fieldErrors.resumeUrl ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
          }`}
        />
        <p id="resumeUrl-hint" className="mt-1.5 text-xs text-slate-500">
          Share a Google Drive, Dropbox, Notion, or personal portfolio link. Please ensure link access is set to &ldquo;Anyone with the link can view&rdquo;.
        </p>
        {fieldErrors.resumeUrl && (
          <p id="resumeUrl-error" className="mt-1 text-xs text-rose-600">
            {fieldErrors.resumeUrl}
          </p>
        )}
      </div>

      {/* Row 5: LinkedIn URL & Notice Period */}
      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        <div>
          <label
            htmlFor="linkedinUrl"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            LinkedIn Profile URL <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          />
        </div>

        <div>
          <label
            htmlFor="noticePeriod"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Notice Period / Availability <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="noticePeriod"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          >
            {noticePeriodOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Current Company */}
      <div className="mt-6">
        <label
          htmlFor="currentCompany"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Current Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="currentCompany"
          name="currentCompany"
          value={formData.currentCompany}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Acme Corp or Independent Consultant"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
        />
      </div>

      {/* Row 7: Cover Note */}
      <div className="mt-6">
        <label
          htmlFor="coverNote"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Why Nishkama CodeLab / Notable Defect Story <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="coverNote"
          name="coverNote"
          rows={3}
          value={formData.coverNote}
          onChange={handleChange}
          placeholder="Tell us briefly about an interesting edge bug you uncovered, or why you want to operate with a Quality Advocate mindset..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="mt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2F7CEF] focus:ring-[#2F7CEF]"
          />
          <span className="text-xs text-slate-600">
            I agree to the processing of my application data in accordance with Nishkama CodeLab&apos;s{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F7CEF] underline underline-offset-2 hover:text-[#1E66D8]"
            >
              Privacy Policy
            </a>
            . <span className="text-rose-500">*</span>
          </span>
        </label>
        {fieldErrors.privacyConsent && (
          <p className="mt-1.5 text-xs text-rose-600">
            {fieldErrors.privacyConsent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0E2539] px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#2F7CEF] hover:shadow-lg hover:shadow-[#2F7CEF]/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        All applications reviewed by senior engineering leads within 2 business days under strict candidate confidentiality.
      </p>
    </form>
  );
}
