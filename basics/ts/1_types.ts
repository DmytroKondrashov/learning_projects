// You can compile this file with tsc 1_types.ts

// Types
const str: string = "Hello";
const num: number = 1;
const float: number = 1.1;
const bool: boolean = true;

console.log(str, num, float, bool);

// The two following types are the same
const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const stringArray: string[] = ["1", "2", "3"];

// This is a tuple
const mixedArray: (number | string)[] = [1, "2", 3];

// Work with any
let variable: any = 43;
variable = "Hello";
variable = true;

// Void is the equivalent of null
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("John");

// Never is the equivalent of undefined
function neverReach(): never {
  throw new Error("Not implemented");
}

// Types
type Login = string;
const login: Login = "login";
const login2: Login = 43;

type Id = string | number;
const id: Id = "id";
const id2: Id = 43;
const id3: Id = true;

// How to define objects types
type User = {
  name: string;
  age: number;
};

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const person2: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 25,
  isStudent: false,
}