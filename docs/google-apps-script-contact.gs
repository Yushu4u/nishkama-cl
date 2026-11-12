/**
 * Nishkama CodeLab — Contact Form Google Sheets + Email Handler
 *
 * Setup (in your hello@nishkamacodelab.com Google Workspace account):
 * 1. Create a Google Sheet (e.g. "Nishkama CodeLab — Inquiries").
 * 2. Click Extensions -> Apps Script, replace Code.gs with this file.
 * 3. Set WEBHOOK_SECRET below to match GOOGLE_CONTACT_WEBHOOK_SECRET in Vercel.
 * 4. Click Deploy -> New deployment -> Web app:
 *    - Execute as: Me (hello@nishkamacodelab.com)
 *    - Who has access: Anyone
 * 5. Authorize Gmail + Sheets permissions when prompted, then copy the /exec Web App URL
 *    into Vercel Project Settings -> Environment Variables as GOOGLE_CONTACT_WEBHOOK_URL.
 */

const WEBHOOK_SECRET = "REPLACE_WITH_STRONG_SECRET_TOKEN";
const DEFAULT_NOTIFY_EMAIL = "hello@nishkamacodelab.com";
const SHEET_NAME = "Inquiries";

const HEADERS = [
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

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
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

    // 1. Send notification email to hello@nishkamacodelab.com
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

    // 2. Send automatic confirmation email to the prospect
    let confirmationStatus = "Skipped";
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

    // 3. Append row to Google Sheet
    lock.waitLock(5000);
    const sheet = getOrCreateSheet();
    sheet.appendRow([
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

    return jsonResponse({ ok: true, receiptId: data.receiptId });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}
