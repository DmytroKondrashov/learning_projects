const crypto = require('crypto');

const hashPassword = (password, salt, iterations, keyLength) => {
  return crypto.pbkdf2Sync(password, Buffer.from(salt, 'base64'), iterations, keyLength, 'sha512').toString('base64');
};

const storedHash = "yyWkbpRnwgRKRrLYoiMdj2UXEb8cLeywUd44I+9ABhYMDEI+LPYK7rBu+55voe5CEpxViJJhq0KkDwwvQs15bw==";
const salt = "nulG91Yrr3MszAcbLp6pVVxnIWC/kE0RiuvHv1Gk8r7b0W5e/1Ry/h98sUKUbQybe1ByC+cQyFyvMb0lP2Inzg==";
const iterations = 5801728;
const keyLength = 64;

const inputPassword = "q1w2e3r4";
const hash = hashPassword(inputPassword, salt, iterations, keyLength);

console.log(hash === storedHash ? "Password matches!" : "Password does not match.");