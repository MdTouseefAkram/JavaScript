//! Functions
debugger;
console.log('Starting');
function demo(){
    console.log('This is inside function');
}
demo();
console.log('Ending');

function sum(a,b){
    console.log(a+b); //a = undefined, b = undefined - a+ b = NaN
}
sum(); //NaN - undfine + undefine = NaN
sum(10); //a = 10 , b = undefine - a+ b - NaN
sum(10,30); //40

//! Return keyword
// return keyword is use to return a value from the function.
// It is the last statement to be executed inside the function, 
// after return keyword nothing is executed inside the function.
// if we don't return anything from function then the function will return undefined.
function sum(a,b){
    console.log(a+b); 
    return 0;
}
let res = sum(10,20); // whenever we don't use return kayword or we don't return anything then function return undefined. 
console.log(res); // 0 becoz we return 0


//! Defualt Parameters
function greet(name = 'Guest'){ //default parameter when user don't give any name then Guest is taken as name
    console.log(`Hello , ${name}`);
}
greet(); //Hello , Guest
greet('Touseef'); // Hello, Touseef

function sum(a = 0, b = 0, c = 0){
    console.log(a+b+c);
}
sum(); // 0 - taking default values from default parameter
sum(10); // 10, taking b, c as default value as 0.
sum(10,20); // 30 - taking c as 0 from default parameter value and a = 10, b = 20 and c=0, s sum = 30
sum(10,20,30); //60

//! Scope of varaibels
debugger;
var a = 10; // global scope
let b = 20; // script scope - accesible into this JS file.
const c = 30; // script scope

if(true){ //(any block other than function block)
    var a1 = 40; //global scope
    var b1 = 50; // Block scope - acessible to block scope
    var c1 = 60; //Block scope
}

//! Types of functions
//! 1. Named Function
function fun(){
    var a2 = 70; //local scope - accesible within function scope
    let b2 = 80; //local scope
    const c2 = 90; //local scope
}
fun();

a()
function a(){
    console.log('This is anonymous function');
}
a()
let a = function(){
    console.log('This is anonymous function');
}
//! 2. Anonymous Function
let fun = function(){
    console.log('This is anonymous function');
}
//! 3. Function Expression
let fun = function sum(){
    console.log('This is anonymous function');
}
fun();

//! 4. First Class Functiom
// A function which is assigned as a value to a variable is called as first Class function.
// ex - function sum


//! 5. Arrow function
// If we have exactly one parameter then we don't need parenthesis.
// If we have one statement in the body of the function then we don't need curly brackets and return keyword.
let sum = (a,b)=> {
    return a+b;
}
// Arrow Function
let sum = (a,b)=> a+b;
let res1 = sum(10,20);
console.log(res1);

// 2nd ex-
function sqr(a){
    return a*a;
}
console.log(sqr(5));
// Arrow function
let sqr1 = a=>a*a;
console.log(sqr1(4));


//! 6. IIFE(Immediately Invoked function expression) function
//It cannot be reused.
// we cannot store this function inside a variable.
(
    //function declaration
    function fun(){
        console.log(`I am IIFE function`);
    }
)();  //function call
//; is must if we gain write another IIFE function otherwise it give 
(
    //function declaration
    function (){
        console.log(`I am IIFE function`);
    }
)();
let res2 = (
    function mult(a,b){
        console.log(a*b);
        return 70;
    }
)(10,20);
console.log(res2);
console.log(res2());

//! 7. Higher Order Function
// op is higher order function, because it accepts another function as argument.
function op(p1, p2, p3){
    p1(p2, p3);
}
op(sum, 10, 4);
op(Sub, 10, 4);
op(mult, 10, 4);

//! 8. Callback Function
// If a function is passed as the argument to another function that is called as Callback Function.
// ex -> sum, sub, mult
function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mult(a,b){
    console.log(a*b);
}
//! Function op is a Higher Order Function because it accepts another function as argumnet.

//! 9. Nested Function
// A function declared inside another function
debugger;
function outer(a){
    function inner(a){
        function child(c){
            console.log(a+b+c);
        }
        child(30);
    }
    inner(20);
}
outer(10);

//! Counter Function
function Counter(){
    let count = 0;
    return function func(){
        console.log(count++);
    }
}
let res3 = Counter();
//console.log(res3);
res3()
res3()
res3()
