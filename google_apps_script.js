function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    // Exact GENFREX Client Leads Spreadsheet ID
    var SPREADSHEET_ID = "17hOgmtxO1VEhI7YNIom13uQjXcBIfp1tqdePLCMHaFk";
    var doc = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = doc.getSheetByName("Leads") || doc.getSheets()[0];

    // Auto-create headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Company / Brand",
        "Email Address",
        "Phone / WhatsApp",
        "Service Required",
        "Budget",
        "Timeline",
        "Project Brief / Message",
        "Source Platform"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#0052FF").setFontColor("#FFFFFF");
    }

    var rawData;
    if (e.postData && e.postData.contents) {
      rawData = JSON.parse(e.postData.contents);
    } else {
      rawData = e.parameter;
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = rawData.name || rawData["Client Name"] || "N/A";
    var company = rawData.company || rawData["Company / Brand"] || "N/A";
    var email = rawData.email || rawData["Email Address"] || "N/A";
    var phone = rawData.phone || rawData["Phone / WhatsApp"] || "N/A";
    var service = rawData.service || rawData["Service Required"] || "N/A";
    var budget = rawData.budget || rawData["Project Budget"] || "N/A";
    var timeline = rawData.timeline || rawData["Estimated Timeline"] || "N/A";
    var details = rawData.details || rawData.message || rawData["Project Requirements"] || "N/A";
    var source = rawData.source || rawData["Source"] || "GENFREX Website";

    // 1. Append to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      company,
      email,
      phone,
      service,
      budget,
      timeline,
      details,
      source
    ]);

    // 2. Send Executive Email to genfrexofficial@gmail.com
    var targetEmail = "genfrexofficial@gmail.com";
    var emailSubject = "⚡ [GENFREX LEAD] " + service + " — " + name;

    var htmlBody = 
      '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0C0E17; color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,82,255,0.3);">' +
        '<div style="background: linear-gradient(135deg, #0052FF, #00D4FF); padding: 28px 24px; text-align: center;">' +
          '<h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">GENFREX</h1>' +
          '<p style="margin: 6px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9); letter-spacing: 1px; text-transform: uppercase;">New Client Project Inquiry</p>' +
        '</div>' +

        '<div style="padding: 28px 24px;">' +
          '<div style="background-color: #131725; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-bottom: 20px;">' +
            '<h2 style="margin: 0 0 14px 0; font-size: 14px; font-weight: 700; color: #00D4FF; letter-spacing: 1px; text-transform: uppercase;">1. Client & Brand Profile</h2>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A; width: 40%;">Client Name:</td><td style="padding: 6px 0; font-weight: 600; color: #FFFFFF;">' + name + '</td></tr>' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A;">Company / Brand:</td><td style="padding: 6px 0; color: #FFFFFF;">' + company + '</td></tr>' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A;">Official Email:</td><td style="padding: 6px 0;"><a href="mailto:' + email + '" style="color: #00D4FF; text-decoration: none;">' + email + '</a></td></tr>' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A;">Phone / WhatsApp:</td><td style="padding: 6px 0; color: #FFFFFF;">' + phone + '</td></tr>' +
            '</table>' +
          '</div>' +

          '<div style="background-color: #131725; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-bottom: 20px;">' +
            '<h2 style="margin: 0 0 14px 0; font-size: 14px; font-weight: 700; color: #00D4FF; letter-spacing: 1px; text-transform: uppercase;">2. Project Specifications</h2>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A; width: 40%;">Service Required:</td><td style="padding: 6px 0; font-weight: 600; color: #0052FF;">' + service + '</td></tr>' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A;">Budget Range:</td><td style="padding: 6px 0; color: #FFFFFF;">' + budget + '</td></tr>' +
              '<tr><td style="padding: 6px 0; color: #9A9A9A;">Target Timeline:</td><td style="padding: 6px 0; color: #FFFFFF;">' + timeline + '</td></tr>' +
            '</table>' +
          '</div>' +

          '<div style="background-color: #131725; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-bottom: 20px;">' +
            '<h2 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; color: #00D4FF; letter-spacing: 1px; text-transform: uppercase;">3. Project Brief & Scope</h2>' +
            '<p style="margin: 0; font-size: 14px; line-height: 1.6; color: #E0E0E0; white-space: pre-wrap;">' + details + '</p>' +
          '</div>' +

          '<div style="text-align: center; margin-top: 24px;">' +
            '<a href="mailto:' + email + '?subject=Re: GENFREX Project Inquiry - ' + encodeURIComponent(service) + '" style="display: inline-block; background-color: #0052FF; color: #FFFFFF; padding: 12px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.5px;">Reply to Prospective Client →</a>' +
          '</div>' +
        '</div>' +

        '<div style="background-color: #080A10; padding: 16px 24px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid rgba(255,255,255,0.05);">' +
          '<p style="margin: 0;">Captured at ' + timestamp + ' via ' + source + '</p>' +
          '<p style="margin: 4px 0 0 0; color: #444;">GENFREX — Strategic Vision. Creative Execution. Real Growth.</p>' +
        '</div>' +
      '</div>';

    MailApp.sendEmail({
      to: targetEmail,
      replyTo: email,
      subject: emailSubject,
      htmlBody: htmlBody
    });

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
