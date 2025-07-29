//! Variable Declaration
// In JavaScripot we can declare variable using three keyword
//1. var
//2. let
//3. const

//! 1. var
debugger; //memory allocation is continue but code execution is paused
console.log(a); //undefined // present in  global scope
var a; // Decalaration
a = 20; // initaialization
var a1 = true; // Dec+ Init
a1 = 'hello Wolld'; // reinit
console.log(a1);
var a1; //redeclaration

//! 2. let
debugger; // memory allocation is continue but code execution is paused
console.log(b); // uncaught error before init // present in script scope
let b; // dec
b = 20; // init
let b1 = true; // dec + init
b1 = 'abc'; // reinit
// let b1; //erorr -> redecalation is not possible using let

//! 3. const
// const c; // declaration alone is not possible
const c1 = 30; //dec+ init (only dec + init is possible ) 
// c1 = 40; //it will throw an error in console or terminal but it not show red line for error in vs code until we execute.

a = 20;
console.log(a);
var a;
console.log(a);

let a1;
console.log(a1);
a1 = true;

const a2 = 90;
console.log(a2);

//! Hoisting
debugger;
console.log(person); //Undefined becoz of hoisting -> all declaration of variables & functions is moved to top of scope
var person = 'Virat Kohli';

debugger;
a1 = 60; // error-> we try access a1 so error without declaration
console.log(a1); //error -> Temporal dead zone
let a1; // value assign as undefined but code exection phase, complier checks again this line in code execution phase.
console.log(a1); //undefined
a1 = true;