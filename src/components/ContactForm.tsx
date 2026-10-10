"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { contactFormSchema, needOptions, timelineOptions } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialNeedParam = searchParams.get("need");

  let defaultNeed = "";
  if (initialNeedParam === "assessment") {
    defaultNeed = "QA Assessment (1–2 weeks)";
  } else if (initialNeedParam === "project") {
    defaultNeed = "Project QA (Milestone/Release)";
  } else if (initialNeedParam === "partner") {
    defaultNeed = "Ongoing QA Partner (Embedded)";
  } else if (initialNeedParam === "advocacy") {
    defaultNeed = "Quality Advocacy (Comprehensive)";
  } else if (initialNeedParam === "audit" || initialNeedParam === "quality-audit") {
    defaultNeed = "Quality Audit";
  } else if (initialNeedParam === "functional-testing") {
    defaultNeed = "QA Assessment (1–2 weeks)";
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    productWebsite: "",
    needHelpWith: defaultNeed || needOptions[0],
    currentQaSetup: "",
    expectedTimeline: timelineOptions[0],
    details: "",
    privacyConsent: false,
    website_hp: "", // Honeypot
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

    // Clear error for field on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    trackEvent({
      name: "contact_form_attempt",
      properties: { selectedNeed: formData.needHelpWith },
    });

    // Client-side schema check
    const validation = contactFormSchema.safeParse(formData);
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
        name: "contact_form_validation_failed",
        properties: { errorCount: failedFields.length, fields: failedFields },
      });
      return;
    }

    setIsSubmitting(true);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitSuccess({
        receiptId: data.receiptId || "NCL-" + Math.floor(100000 + Math.random() * 900000),
        message:
          data.message ||
          "Thank you for reaching out. We have received your inquiry and will follow up within 1 business day.",
      });

      trackEvent({
        name: "contact_form_success",
        properties: {
          responseTimeMs: Date.now() - startTime,
          selectedNeed: formData.needHelpWith,
        },
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected network error occurred.";
      setServerError(message);
      trackEvent({
        name: "contact_form_error",
        properties: { statusCode: 500, errorMessage: message },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Inquiry Received
            </h2>
            <p className="text-xs font-mono text-slate-500 mt-0.5">
              Reference ID: {submitSuccess.receiptId}
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          {submitSuccess.message}
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-600 space-y-2">
          <p className="font-bold text-slate-900 uppercase tracking-wider">
            What Happens Next?
          </p>
          <p>
            1. An NCL QA specialist reviews your product details and testing goals.
          </p>
          <p>
            2. We reply with initial observations and schedule a 30-minute discovery session.
          </p>
          <p>
            3. All technical and architecture details shared remain strictly confidential.
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
                workEmail: "",
                company: "",
                productWebsite: "",
                needHelpWith: needOptions[0],
                currentQaSetup: "",
                expectedTimeline: timelineOptions[0],
                details: "",
                privacyConsent: false,
                website_hp: "",
              });
            }}
            className="text-xs font-bold text-[#2F7CEF] underline underline-offset-4 hover:text-[#1E66D8] transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm"
      aria-label="QA Consultation Request Form"
    >
      {/* Honeypot field for bot detection */}
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

      <div className="grid gap-6 sm:grid-cols-2">
        {/* First Name */}
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

        {/* Last Name */}
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

      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        {/* Work Email */}
        <div>
          <label
            htmlFor="workEmail"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Work Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.workEmail)}
            aria-describedby={fieldErrors.workEmail ? "workEmail-error" : undefined}
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="ada@company.com"
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
              fieldErrors.workEmail ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
            }`}
          />
          {fieldErrors.workEmail && (
            <p id="workEmail-error" className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.workEmail}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Company <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "company-error" : undefined}
            value={formData.company}
            onChange={handleChange}
            placeholder="Analytical Engine Corp"
            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF] ${
              fieldErrors.company ? "border-rose-400 ring-1 ring-rose-400" : "border-slate-200"
            }`}
          />
          {fieldErrors.company && (
            <p id="company-error" className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        {/* Product / Website */}
        <div>
          <label
            htmlFor="productWebsite"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Product / Website URL <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="productWebsite"
            name="productWebsite"
            value={formData.productWebsite}
            onChange={handleChange}
            placeholder="https://app.yourproduct.com"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          />
        </div>

        {/* What do you need help with? */}
        <div>
          <label
            htmlFor="needHelpWith"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            What do you need help with? <span className="text-rose-500">*</span>
          </label>
          <select
            id="needHelpWith"
            name="needHelpWith"
            required
            value={formData.needHelpWith}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          >
            {needOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        {/* Current QA Setup */}
        <div>
          <label
            htmlFor="currentQaSetup"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Current QA Setup <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="currentQaSetup"
            name="currentQaSetup"
            value={formData.currentQaSetup}
            onChange={handleChange}
            placeholder="e.g. Developers test own code, 1 manual tester"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          />
        </div>

        {/* Expected Timeline */}
        <div>
          <label
            htmlFor="expectedTimeline"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Expected Timeline <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="expectedTimeline"
            name="expectedTimeline"
            value={formData.expectedTimeline}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
          >
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Details / Challenges */}
      <div className="mt-6">
        <label
          htmlFor="details"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Product Details or Specific QA Challenge <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about your upcoming release, critical flows, known regression risks, or where user quality hurts..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]"
        />
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="mt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.privacyConsent)}
            aria-describedby={fieldErrors.privacyConsent ? "privacyConsent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2F7CEF] focus:ring-[#2F7CEF]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I agree to the processing of the provided information in accordance with Nishkama CodeLab&apos;s{" "}
            <a href="/privacy-policy" className="underline text-[#2F7CEF] font-semibold hover:text-[#1E66D8]">
              Privacy Notice
            </a>
            .
          </span>
        </label>
        {fieldErrors.privacyConsent && (
          <p id="privacyConsent-error" className="mt-1 text-xs text-rose-600">
            {fieldErrors.privacyConsent}
          </p>
        )}
      </div>

      {/* Submit Button & Trust Note */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2F7CEF] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1E66D8] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F7CEF]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Submitting Details...</span>
            </>
          ) : (
            <>
              <span>Start a QA Conversation</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <p className="text-xs text-slate-500">
          🔒 Strict confidentiality guaranteed.
        </p>
      </div>
    </form>
  );
}
