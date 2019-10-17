const excel = require('exceljs');
var workbook = new excel.Workbook();
workbook.created = new Date(2019, 10, 15);
workbook.modified = new Date();

workbook.views = [
  {
    x:0, y:0, width:1000, height:1000, firstSheet: 0, activeTab: 1, visibility: visible
  }
]

var sheet = workbook.addWorksheet('Attendance Sheet');
sheet.columns = [
  { header: 'Date'}
]