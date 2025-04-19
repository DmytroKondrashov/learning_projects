const assert = require("assert");
const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const pool = require('../db');
require('dotenv').config();

const records = [];
// Initialize the parser
const parser = parse({
  delimiter: ",",
});

// Read the CSV file and pipe it to the parser
const csvFilePath = path.join(__dirname, "../common_words.csv");
fs.createReadStream(csvFilePath).pipe(parser);

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
  records.forEach(async (record) => {
    await pool.query('INSERT INTO words (english, russian) VALUES ($1, $2)', [record[0], record[1]]);
  });
});