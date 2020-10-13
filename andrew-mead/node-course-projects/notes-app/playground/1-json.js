const fs = require('fs');

const buffer = fs.readFileSync('1-json.json');
let jsonString = buffer.toString();
let jsonData = JSON.parse(jsonString);

jsonData.name = 'Alberto';
jsonData.age = 33;

jsonString = JSON.stringify(jsonData);
fs.writeFileSync('1-json.json', jsonString);


