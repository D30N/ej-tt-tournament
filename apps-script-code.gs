/**
 * EJ Table Tennis — live scores feed.
 * Deploy as a Web App: Execute as: Me, Who has access: Anyone.
 * Reads the Points Sheet live (no Google public-feed delay) and returns
 * every tab as JSON: { "tabs": { "Attendance": [[...]], "Group A": [[...]], ... } }
 */
var SHEET_ID = '1E0e8w_xMazE-wVQALac5DgkdXHWpSw_-asRvAdU0_hQ';
var TABS = ['Attendance', 'Group A', 'Group B', 'Group C', 'Group D', 'Knockout'];

function doGet() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var out = {};
  TABS.forEach(function (name) {
    var sh = ss.getSheetByName(name);
    out[name] = sh ? sh.getDataRange().getDisplayValues() : [];
  });
  return ContentService
    .createTextOutput(JSON.stringify({ tabs: out }))
    .setMimeType(ContentService.MimeType.JSON);
}
