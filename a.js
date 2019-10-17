var spreadSheet = require('spread_sheet');
filepath='C:\Users\IIITK\Desktop\Book1.xlsx';
spreadSheet.getRows(filepath,sheet1,0,1,function(err,result){});
console.log(spreadSheet);