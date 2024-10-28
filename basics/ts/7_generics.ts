const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const arrayOfStrings: Array<string> = ["Hello", "Typescript"];

// this function will accept any array and return the reversed array
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
