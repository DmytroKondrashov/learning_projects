/*
There is an array of functions (length is unknown), each returns a promise, write a function runSync that runs promises synchronously (one by one) without using async/await
*/
// TODO: solve this using async/await!!!

const fn1 = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log(1);
    resolve(1);
  }, 1000);
});

const fn2 = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log(2);
    resolve(2);
  }, 500);
});

const fn3 = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log(3);
    resolve(3);
  }, 200)
});

function runSync(args) {
  args.reduce((acc, fn) => {return acc.then(() => fn()) }, Promise.resolve())
}

runSync([fn1, fn2, fn3]); //output should be 1,2,3