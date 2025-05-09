const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

module.exports = class Product {
  constructor (title) {
    this.title = title;
  }

  save() {
    const p = path.join(rootDir, 'data', 'products.json');
    fs.readFile(p, (error, fileContent) => {
      let products = []
      if (!error) {
        products = JSON.parse(fileContent)
      }
      console.error("products before", products)
      products.push(this);
      console.error("products after", products)

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      })
    })
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}
