//! Primitive dataTypes
let a =10;
console.log(typeof a);
a = 'Touseef';
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = true;
console.log(typeof a);
a = 10n; //bigInt
console.log(typeof a);
a = Symbol('akhsay'); //Symbol
console.log(typeof a);
a = NaN; //garbage value
console.log(typeof a);
a = null; //Object
console.log(typeof a);

//! Non Primiive DataTypes
//objects
//Array
//Math
//Date

//! There is no character dataType in JS
console.log('a' - 1); //NaN

//! Operartors in JavaScript
//Arithematic Operators
// Add(+)
//Sub(-)
//Mul(*)
//Div(/)
//Mod(%)
//power(**)

console.log(true + 2); //3 -> Implicit type conversion true is 1
console.log(undefined + 1); //NaN
console.log(NaN + 1);
console.log('a12' - 20); // a12 , alphanumeric is not converted to number , so it a NaN
let a2 = null;
console.log(a2+ 1); // null is taken as 0 internally, so o/p is 1

let a3 = 10;
console.log(a3 == a3++); //true
console.log(++a3 == a3); //true

let a4 = 10;
let b; // undefined
console.log(a+b); //NaN

let a5; //Undefined
let b1; // undefined
console.log(a+b); //NaN -> undef + undef = NaN

let a6 = 12;
let b2 = ++a6;
let res = '120' -b + '10' + true * 10;
console.log(a6,b2,res);

console.log(5**4); // power -> 625
console.log("" ==0); //true -> see truthy and falsy concept
console.log(0n == 0); //true
console.log([] == false); //true [] convert to "" then convert to false
console.log([5] =="5"); //true //[5] convert to "5"
console.log([5] == 5); //type conversion - [5] to "5" to 5 then comapre to 5 which is true.
console.log([5] == 5 + "");
console.log([1,2] == '12'); //false
console.log([1,2] == '1,2'); // [1,2] to '1,2 type conversion
console.log([5]>null); // true-  [5] to 5
// console.log([] === 0); //false
console.log(true === 1); //false
console.log('5' - 0 != 5); //false
console.log('5' != 5); //false - '5' to 5, so 5 != 5 , false - type conversion - loose comparision
console.log('5' !== 5); //true - no type conversion - strict comparision
console.log(typeof typeof a); // String - typeof a is number and 'number' is printed as string, so typeof is string


//! Truthy and falsy values
//Truthy values-> other than falsy values is considered as truthy values.

//falsy values
//whatever value is evaluated as false in boolean context that value is called as falsy value.
// 0
// ""
// false
// NaN
// null
// undefined
// 0n

//! Shortcircuiting
let age = 16;
let msg = age> 18 && 'yes, you can drink';
let msg1 = age>18 ? 'yes , you can vote' : 'you are not eglible to vote';

console.log(msg);
console.log(msg1);

//! Taking Input from user
let username = prompt("Enter your name");
console.log(username);
console.log(typeof username);
username && console.log("welcome", username); // short cicuiting - if usrename not entered

// ask the name from the user
// if the name is given ask for the age
// if name and age both are given then print name and age both
// logical opeartors and ternary operator

//1st way
// let username1 = prompt("Enter your name");
// if(username1){
//     let age = prompt("Enter Age");
//     if(age){
//         console.log(username1,age);
//     }
// }

//! 2nd way short circuiting
let username1 = prompt('Enter your name');
let age1 = username1 && prompt('enter your age');
age1 && console.log(username1, age);


//! 3rd way- using ternary operator
// let usrename1 = prompt('enter your name');
// let age1 = username1 && prompt('enter age'); // && for checking first truthy value then move to second part if fisrt part is true.
// username1 && age1 ? console.log(username1, age1) : console.log('Invalid data');

//! add the total amount with tip and print that
// let amount = Number(prompt('enter bill value'));
// let tip = Number(prompt('enter the tip amount'));
// console.log(amount + tip);

//! parseInt()- when alpha numeric value entered, and it take only number as input and string ignores if user enter any string in the last after the number value then it return number value. 
let kg = parseInt(prompt('enter the weight'));
console.log(kg*1000 + 'grams');
console.log(typeof kg);

let res1 = 45/2;
res1 = res1 /10;
res1 /= 10;
console.log(parseInt(res1));

console.log(parseInt('abc123')); //NaN
console.log(parseInt('123abc')); //123
console.log(typeof NaN); //garbage number
console.log(parseInt('12aba12ba'));//12


// let res1 = 'a' && 'b'; // 'a' is truthy so b is res becoz it move to second part which is b.
// console.log(res1);