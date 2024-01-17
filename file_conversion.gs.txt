// file_conversion.gs

const { markdownToPdf } = require('file-converters');

function convertFile(file, format) {
  
  switch(format) {
    case 'pdf':
      return markdownToPdf(file); 
    case 'csv':
      return convertToCSV(file);
    // ...
  }

}
