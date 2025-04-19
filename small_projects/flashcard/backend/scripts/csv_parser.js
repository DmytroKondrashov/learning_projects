const assert = require("assert");
const { parse } = require("csv-parse");

const records = [];
// Initialize the parser
const parser = parse({
  delimiter: ",",
});
// Use the readable stream api to consume records
parser.on("readable", function () {
  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
  }
});
// Catch any error
parser.on("error", function (err) {
  console.error(err.message);
});
// Test that the parsed records matched the expected records
parser.on("end", function () {
  console.log(records);
});
// Close the readable stream
parser.end();