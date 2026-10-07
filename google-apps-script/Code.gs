/**
 * Talent Edge Academy - Inquiry form receiver
 * Paste this into Google Sheet > Extensions > Apps Script, then Deploy as Web app.
 */
var SHEET_NAME = "Inquiries";
var HEADERS = [
  "Submitted At", "Form", "Student Name", "Parent/Guardian", "Phone",
  "Email", "Grade/Level", "Program Interested In", "Subjects", "Message"
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function clean_(v, max) {
  return String(v == null ? "" : v).slice(0, max || 1000);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = {};
    if (e && e.postData && e.postData.contents) {
      try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }
    } else if (e && e.parameter) {
      d = e.parameter;
    }
    if (d.website) return json_({ ok: true }); // honeypot (spam)
    if (!clean_(d.studentName).trim() || !clean_(d.phone).trim()) {
      return json_({ ok: false, error: "Name and phone are required" });
    }
    getSheet_().appendRow([
      new Date(),
      clean_(d.form, 50),
      clean_(d.studentName, 200),
      clean_(d.parentName, 200),
      clean_(d.phone, 50),
      clean_(d.email, 200),
      clean_(d.grade, 100),
      clean_(d.program, 200),
      clean_(d.subjects, 500),
      clean_(d.message, 3000)
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, status: "Talent Edge inquiry endpoint running" });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
