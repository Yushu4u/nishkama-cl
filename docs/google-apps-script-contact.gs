/**
 * Nishkama CodeLab — Unified Google Sheets & Email Webhook Handler
 * 
 * Routes incoming submissions automatically to:
 * - "Inquiries" tab for client sales & consultation requests
 * - "Applications" tab for job applicant submissions & resumes
 *
 * Setup (in your Google Workspace account hello@nishkamacodelab.com):
 * 1. Open your existing Google Sheet (e.g. "Nishkama CodeLab — Inquiries").
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all code in Code.gs with this file.
 * 4. Ensure WEBHOOK_SECRET matches your GOOGLE_CONTACT_WEBHOOK_SECRET.
 * 5. Click Deploy -> Manage deployments -> Edit (pencil icon) -> Version: New version -> Deploy.
 *    (This updates the live web app using the same URL).
 */

const WEBHOOK_SECRET = "REPLACE_WITH_STRONG_SECRET_TOKEN";
const DEFAULT_NOTIFY_EMAIL = "hello@nishkamacodelab.com";

const INQUIRY_SHEET_NAME = "Inquiries";
const APPLICATION_SHEET_NAME = "Applications";

const INQUIRY_HEADERS = [
  "Submitted At (UTC)",
  "Receipt ID",
  "First Name",
  "Last Name",
  "Work Email",
  "Company",
  "Product / Website",
  "Service Need",
  "Current QA Setup",
  "Expected Timeline",
  "Additional Details",
  "Auto-Confirmation Sent",
];

const APPLICATION_HEADERS = [
  "Submitted At (UTC)",
  "Receipt ID",
  "First Name",
  "Last Name",
  "Email",
  "Phone Number",
  "Role Applied",
  "Experience",
  "Resume / CV URL",
  "LinkedIn URL",
  "Notice Period",
  "Current Company",
  "Candidate Note",
  "Auto-Confirmation Sent",
];

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Neutralizes spreadsheet formula injection (=, +, -, @, tab, CR)
function safeCell(value) {
  const str = String(value || "").trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function getOrCreateSheet(sheetName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setRowHeight(1, 28);
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "Empty request body" });
    }

    const data = JSON.parse(e.postData.contents);

    if (
      WEBHOOK_SECRET &&
      WEBHOOK_SECRET !== "REPLACE_WITH_STRONG_SECRET_TOKEN" &&
      data.secret !== WEBHOOK_SECRET
    ) {
      return jsonResponse({ ok: false, error: "Unauthorized webhook secret" });
    }

    const notifyEmail = data.notifyEmail || DEFAULT_NOTIFY_EMAIL;
    const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
    const isJobApplication = data.submissionType === "job_application";

    let confirmationStatus = "Skipped";

    // ─────────────────────────────────────────────────────────────
    // BRANCH A: JOB APPLICATION (Dedicated "Applications" Tab)
    // ─────────────────────────────────────────────────────────────
    if (isJobApplication) {
      const candidateEmail = data.email || data.workEmail;
      const roleTitle = data.role || data.needHelpWith || "QA Candidate";

      // 1. Notify team at hello@nishkamacodelab.com
      const adminSubject = `[Job Application] ${fullName} — ${roleTitle} (${data.receiptId})`;
      const adminText = [
        `New Job Application received on www.nishkamacodelab.com`,
        ``,
        `Receipt ID: ${data.receiptId}`,
        `Submitted At: ${data.submittedAt}`,
        `Role: ${roleTitle}`,
        `Candidate: ${fullName}`,
        `Email: ${candidateEmail}`,
        `Phone: ${data.phone || "—"}`,
        `Experience: ${data.experienceYears || data.currentQaSetup || "—"}`,
        `Resume URL: ${data.resumeUrl || data.productWebsite || "—"}`,
        `LinkedIn URL: ${data.linkedinUrl || "—"}`,
        `Current Company: ${data.currentCompany || data.company || "—"}`,
        `Notice Period: ${data.noticePeriod || data.expectedTimeline || "—"}`,
        ``,
        `Candidate Note:\n${data.coverNote || data.details || "—"}`,
      ].join("\n");

      const adminHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0E2539; max-width: 640px;">
          <h2 style="margin: 0 0 6px; color: #0E2539;">New Job Application</h2>
          <p style="margin: 0 0 16px; color: #475569; font-size: 13px;">
            Receipt: <strong>${escapeHtml(data.receiptId)}</strong> &bull; ${escapeHtml(data.submittedAt)}
          </p>

          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 14px; margin-bottom: 16px;">
            <p style="margin: 0; font-size: 14px; color: #1E40AF;">
              <strong>Role Applied:</strong> ${escapeHtml(roleTitle)}
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B; width: 140px;">Candidate</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><strong>${escapeHtml(fullName)}</strong></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Email</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><a href="mailto:${escapeHtml(candidateEmail)}">${escapeHtml(candidateEmail)}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.phone || "—")}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Experience</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.experienceYears || data.currentQaSetup || "—")}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Resume Link</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><a href="${escapeHtml(data.resumeUrl || data.productWebsite)}" target="_blank" style="color: #2F7CEF; font-weight: bold;">View Candidate Resume &rarr;</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">LinkedIn</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${data.linkedinUrl ? `<a href="${escapeHtml(data.linkedinUrl)}" target="_blank">${escapeHtml(data.linkedinUrl)}</a>` : "—"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Current Company</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.currentCompany || data.company || "—")}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Notice Period</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.noticePeriod || data.expectedTimeline || "—")}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B; vertical-align: top;">Candidate Note</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; white-space: pre-wrap;">${escapeHtml(data.coverNote || data.details || "—")}</td></tr>
          </table>
        </div>
      `;

      MailApp.sendEmail({
        to: notifyEmail,
        replyTo: candidateEmail || notifyEmail,
        subject: adminSubject,
        body: adminText,
        htmlBody: adminHtml,
        name: "Nishkama CodeLab Careers",
      });

      // 2. Candidate confirmation receipt
      if (data.sendConfirmation !== false && candidateEmail) {
        try {
          const candidateSubject = `We received your application (${data.receiptId}) — Nishkama CodeLab`;
          const candidateText = [
            `Hi ${data.firstName || "there"},`,
            ``,
            `Thank you for applying for the ${roleTitle} role at Nishkama CodeLab.`,
            ``,
            `Our engineering team reviews all candidate submissions. If your background matches what we're looking for, we will reach out directly to schedule a technical conversation.`,
            ``,
            `Application Reference:`,
            `- Receipt ID: ${data.receiptId}`,
            `- Role: ${roleTitle}`,
            `- Experience: ${data.experienceYears || "—"}`,
            ``,
            `Best regards,`,
            `Nishkama CodeLab Recruitment`,
            `https://www.nishkamacodelab.com`,
            `hello@nishkamacodelab.com`,
          ].join("\n");

          const candidateHtml = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0E2539; max-width: 600px; line-height: 1.6;">
              <h2 style="margin: 0 0 12px; color: #0E2539;">Application Received</h2>
              <p style="margin: 0 0 12px;">Hi ${escapeHtml(data.firstName || "there")},</p>
              <p style="margin: 0 0 16px;">
                Thank you for applying for the <strong>${escapeHtml(roleTitle)}</strong> position at <strong>Nishkama CodeLab</strong>.
              </p>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; margin-bottom: 16px; font-size: 14px;">
                <p style="margin: 0 0 6px;"><strong>Receipt ID:</strong> ${escapeHtml(data.receiptId)}</p>
                <p style="margin: 0 0 6px;"><strong>Role:</strong> ${escapeHtml(roleTitle)}</p>
                <p style="margin: 0;"><strong>Submission Date:</strong> ${escapeHtml(data.submittedAt)}</p>
              </div>
              <p style="margin: 0 0 16px; font-size: 13px; color: #475569;">
                Our engineering team reviews candidate submissions carefully. If your testing background aligns with our needs, we will reach out directly via email.
              </p>
              <p style="margin: 0; font-size: 13px; color: #64748B;">
                Best regards,<br />
                <strong style="color: #0E2539;">Nishkama CodeLab</strong><br />
                <a href="https://www.nishkamacodelab.com" style="color: #2F7CEF;">www.nishkamacodelab.com</a>
              </p>
            </div>
          `;

          MailApp.sendEmail({
            to: candidateEmail,
            replyTo: notifyEmail,
            subject: candidateSubject,
            body: candidateText,
            htmlBody: candidateHtml,
            name: "Nishkama CodeLab Recruitment",
          });
          confirmationStatus = "Sent";
        } catch (confirmErr) {
          confirmationStatus = "Failed: " + String(confirmErr);
        }
      }

      // 3. Append row into "Applications" tab
      lock.waitLock(5000);
      const appSheet = getOrCreateSheet(APPLICATION_SHEET_NAME, APPLICATION_HEADERS);
      appSheet.appendRow([
        safeCell(data.submittedAt),
        safeCell(data.receiptId),
        safeCell(data.firstName),
        safeCell(data.lastName),
        safeCell(candidateEmail),
        safeCell(data.phone || ""),
        safeCell(roleTitle),
        safeCell(data.experienceYears || data.currentQaSetup || ""),
        safeCell(data.resumeUrl || data.productWebsite || ""),
        safeCell(data.linkedinUrl || ""),
        safeCell(data.noticePeriod || data.expectedTimeline || ""),
        safeCell(data.currentCompany || data.company || ""),
        safeCell(data.coverNote || data.details || ""),
        safeCell(confirmationStatus),
      ]);

      return jsonResponse({ ok: true, receiptId: data.receiptId, tab: APPLICATION_SHEET_NAME });
    }

    // ─────────────────────────────────────────────────────────────
    // BRANCH B: CLIENT INQUIRY (Dedicated "Inquiries" Tab)
    // ─────────────────────────────────────────────────────────────
    const adminSubject = `[New QA Inquiry] ${data.company || fullName} — ${data.needHelpWith || "Contact"} (${data.receiptId})`;
    const adminText = [
      `New inquiry received from www.nishkamacodelab.com`,
      ``,
      `Receipt ID: ${data.receiptId}`,
      `Submitted At: ${data.submittedAt}`,
      `Name: ${fullName}`,
      `Work Email: ${data.workEmail}`,
      `Company: ${data.company}`,
      `Product / Website: ${data.productWebsite || "—"}`,
      `Service Need: ${data.needHelpWith || "—"}`,
      `Expected Timeline: ${data.expectedTimeline || "—"}`,
      `Current QA Setup: ${data.currentQaSetup || "—"}`,
      `Additional Details:\n${data.details || "—"}`,
    ].join("\n");

    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0E2539; max-width: 640px;">
        <h2 style="margin: 0 0 8px; color: #0E2539;">New Website Inquiry</h2>
        <p style="margin: 0 0 16px; color: #475569; font-size: 13px;">
          Receipt ID: <strong>${escapeHtml(data.receiptId)}</strong> &bull; ${escapeHtml(data.submittedAt)}
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B; width: 160px;">Name</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><strong>${escapeHtml(fullName)}</strong></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Work Email</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><a href="mailto:${escapeHtml(data.workEmail)}">${escapeHtml(data.workEmail)}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Company</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.company)}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Product / URL</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.productWebsite || "—")}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Service Need</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;"><strong>${escapeHtml(data.needHelpWith || "—")}</strong></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Timeline</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.expectedTimeline || "—")}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B;">Current QA Setup</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.currentQaSetup || "—")}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; color: #64748B; vertical-align: top;">Details</td><td style="padding: 8px; border-bottom: 1px solid #E2E8F0; white-space: pre-wrap;">${escapeHtml(data.details || "—")}</td></tr>
        </table>
      </div>
    `;

    MailApp.sendEmail({
      to: notifyEmail,
      replyTo: data.workEmail || notifyEmail,
      subject: adminSubject,
      body: adminText,
      htmlBody: adminHtml,
      name: "Nishkama CodeLab Website",
    });

    if (data.sendConfirmation !== false && data.workEmail) {
      try {
        const userSubject = `We received your inquiry (${data.receiptId}) — Nishkama CodeLab`;
        const userText = [
          `Hi ${data.firstName || "there"},`,
          ``,
          `Thank you for contacting Nishkama CodeLab. We have received your inquiry and a QA specialist will review your details and follow up within 1 business day.`,
          ``,
          `Reference Summary:`,
          `- Receipt ID: ${data.receiptId}`,
          `- Company: ${data.company}`,
          `- Service Need: ${data.needHelpWith || "—"}`,
          `- Expected Timeline: ${data.expectedTimeline || "—"}`,
          ``,
          `If you have additional context or want to share staging notes before our call, simply reply directly to this email.`,
          ``,
          `Best regards,`,
          `Nishkama CodeLab`,
          `https://www.nishkamacodelab.com`,
          `hello@nishkamacodelab.com`,
        ].join("\n");

        const userHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0E2539; max-width: 600px; line-height: 1.6;">
            <h2 style="margin: 0 0 12px; color: #0E2539;">We received your inquiry</h2>
            <p style="margin: 0 0 12px;">Hi ${escapeHtml(data.firstName || "there")},</p>
            <p style="margin: 0 0 16px;">
              Thank you for reaching out to <strong>Nishkama CodeLab</strong>. A QA specialist will review your details and follow up within <strong>1 business day</strong>.
            </p>
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; margin-bottom: 16px; font-size: 14px;">
              <p style="margin: 0 0 6px;"><strong>Receipt ID:</strong> ${escapeHtml(data.receiptId)}</p>
              <p style="margin: 0 0 6px;"><strong>Company:</strong> ${escapeHtml(data.company)}</p>
              <p style="margin: 0 0 6px;"><strong>Service Need:</strong> ${escapeHtml(data.needHelpWith || "—")}</p>
              <p style="margin: 0;"><strong>Expected Timeline:</strong> ${escapeHtml(data.expectedTimeline || "—")}</p>
            </div>
            <p style="margin: 0 0 16px; font-size: 13px; color: #475569;">
              Need to add anything before we connect? Simply reply directly to this email.
            </p>
            <p style="margin: 0; font-size: 13px; color: #64748B;">
              Best regards,<br />
              <strong style="color: #0E2539;">Nishkama CodeLab</strong><br />
              <a href="https://www.nishkamacodelab.com" style="color: #2F7CEF;">www.nishkamacodelab.com</a>
            </p>
          </div>
        `;

        MailApp.sendEmail({
          to: data.workEmail,
          replyTo: notifyEmail,
          subject: userSubject,
          body: userText,
          htmlBody: userHtml,
          name: "Nishkama CodeLab",
        });
        confirmationStatus = "Sent";
      } catch (confirmErr) {
        confirmationStatus = "Failed: " + String(confirmErr);
      }
    }

    lock.waitLock(5000);
    const inqSheet = getOrCreateSheet(INQUIRY_SHEET_NAME, INQUIRY_HEADERS);
    inqSheet.appendRow([
      safeCell(data.submittedAt),
      safeCell(data.receiptId),
      safeCell(data.firstName),
      safeCell(data.lastName),
      safeCell(data.workEmail),
      safeCell(data.company),
      safeCell(data.productWebsite),
      safeCell(data.needHelpWith),
      safeCell(data.currentQaSetup),
      safeCell(data.expectedTimeline),
      safeCell(data.details),
      safeCell(confirmationStatus),
    ]);

    return jsonResponse({ ok: true, receiptId: data.receiptId, tab: INQUIRY_SHEET_NAME });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}
