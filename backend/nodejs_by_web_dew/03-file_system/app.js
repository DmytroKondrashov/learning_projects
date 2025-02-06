const fs = require('fs');

// =============================== READ FILE ===============================

// fs.readFile('./text.txt', (error, data) => {
//   console.log(data.toString());
// });

// This is the same as the above code
// fs.readFile('./text.txt', 'utf-8', (error, data) => {
//   console.log(data);
// })

// ReadFile is async function, so this console log will run first before the data is read
// console.log('test');

// =============================== WRITE FILE ===============================
// fs.readFile('./text.txt', 'utf-8', (error, data) => {
//   fs.writeFile('./text2.txt', `${data} New text!`, () => {})
// })

// =============================== WORK WITH DIRECTORY ===============================
fs.readFile('./text.txt', 'utf-8', (error, data) => {
  fs.mkdir('./files', () => {
    fs.writeFile('./files/text2.txt', `${data} New text!`, (error) => {
      error ? console.log(error) : null;
    })
  });
})

setTimeout(() => {
  if (fs.existsSync('./files/text2.txt')) {
    fs.unlink('./files/text2.txt', () => {
      fs.rmdir('./files', () => {})
    })
  }
}, 5000)
