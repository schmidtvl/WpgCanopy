let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'trees.csv'; 
let fileOutputName = 'tree_data.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
