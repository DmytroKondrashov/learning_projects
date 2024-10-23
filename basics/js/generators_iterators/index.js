// A basic generator
// star here notes that the function below is a generator
function* strGenerator() {
  yield 'H';
  yield 'e';
  yield 'l';
  yield 'l';
  yield 'o';
}

const str = strGenerator();










// A generator that yields numbers
function* numberGenerator(n) {
  let i = 0;
  while (i < n) {
    yield i++;
  }
}

const num = numberGenerator(7);










// Create our own generator
// Use it like this:
// const itr = iterator.gen();
// itr.next();
const iterator = {
  gen(n = 10) {
    let i = 0;

    return {
      next() {
        if (i < n) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
    }
    }
  }
}
