//  Primatives: numers, strings, booleans
//  Complex Types: arrays, objects
// Function Types, parameters

//  primatives

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isIntstructor: boolean;

isIntstructor = true;

//More Complex Types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "12 here as number, would not work"];

// Unions
// when you want to allow more than one type, you add it like any other type assignment
// Seperate them by Bars

let course: string | number | boolean = "React - The Complete Guide";

course = 12341;
// can also use it for other variables, to  accept more info.
let newUserName: string | string[];

newUserName = "Max";

//Can assign a type to something liek a variable

type Person = { name: string; age: number };

let person: Person;
person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Functions and Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
