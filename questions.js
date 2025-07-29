// ! Questions
// !1. What is the difference b/w Dynamically Typed Language  and static typed language
// !2.** What is Let var and const , explain with difference between them
// !3.** What is hoisting in js
// !4. What is Temporal Dead Zone in js
// !5.** What is closure in js
// !6.** Explain Higher Order Function , callback function , IIFE function and arrow function
// !7. Explain String methods (at least 10)
    // i. split
    // ii. join
// !8. How do we reverse a string 
// !9.** Array Methods 
// filter , map , reduce , reduceRight , sort , reverse , find , some , every
// !10 What is object in js , explain what is method in js 
// !11** What is call apply and bind in js
// !12 How new keyword will work with constructor function
// !13 What is prototype object in js 
// !14.What is setTimeout , setInterval , clearTimeout and clearInterval in js
// !15.What is Browser Object modal and all its properties and methods
// !16** What is DOM , Explai at least 4 to 5 points
// !17 How do we perform crud operations over HTML Elements
// !18 How do we perfrom crud over HTML Attributes
// !19 How do we perfrom crud over CSS style
// !20* What are truthy and falsy values in JavaScript
// !21* What is Coercion in JavaScript
// !23* Promise (What , How to create , Consuming Methods)
// !24* Async await
// !25* fetch

// !26* How to fetch an api 
// !27* Destructuring
// !28* Spread And Rest
// !29 ES6






// let arr = [10,20];
// arr.forEach((el, i)=>{
//     console.log(el,i);
// }) 
//10 0
// 20 1
// console.log(arr.at(1));

// let a = {
//     name:"A",
//     age : 30,
//     skills:['html' , 'css' , 'js']
// }
// let b = a;
// b.name = "B";
// a.age = 40;
// console.log(a); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }
// console.log(b); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }

// //! 
// let copy = Object.assign({} , a); //{} is optional
// console.log(copy); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }
// let obj = Object.create({place:'Delhi' , degree:'B.Tech'})
// obj.name = "ABC"
// console.log(obj); //{} //{ name: 'ABC' }
// console.log(obj.degree); //B.Tech
// console.log(obj.place); //Delhi

// let parentObj = {
//     name:"Atul",
//     printName(){
//         console.log(this.name)
//     },
// };
// let obj = Object.create(parentObj);
// console.log(obj.name); // "Atul" (inherited)
// obj.printName(); //Atul

//call
let p1 = {
    name:"Rohit",
    age:40,
    details:function(place){
     console.log(`the name is ${this.name} the age is ${this.age} place:${place}`); //the name is Rohit the age is 40 place:Mumbai
    }
}
p1.details("Mumbai");
let p2 = {
    name:"Dhoni",
    age:42
}
let p3 = {
    name:"Virat",
    age:37,
    
}
// let p4 = {
//     name:"Virat",
//     age:37,
//     place:"Bomabay"
    
// }
// p1.details.call(p2 , "Ranchi") //the name is Dhoni the age is 42 place:Ranchi
// p1.details.call(p3 , "Delhi") //the name is Virat the age is 37 place:Delhi
// p1.details.apply(p3 , ["Bengaluru"]) //the name is Virat the age is 37 place:Bengaluru
// // p1.details.apply(p3) //the name is Virat the age is 37 place:undefined
// // p1.details.apply(p4) //the name is Virat the age is 37 place:Bomabay
// let demo = p1.details.bind(p2)
// demo('A')
// demo('B')
// demo('C')

// p1.details.apply(p3, ["Hello", "New York"]); //the name is Virat the age is 37 place:Hello

// p1.details.apply(p3, "Bangaluru");
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// function introduce(greeting, city) {
//   return `${greeting}, I'm ${this.firstName} ${this.lastName} from ${city}.`;
// }

// // Using apply() to call introduce with person as 'this' and arguments as an array
// const message = introduce.apply(person, ["Hello", "New York"]);
// console.log(message); // Output: Hello, I'm John Doe from New York. //Hello, I'm John Doe from New York.
// p1.details.apply(p3, "Bangaluru"); //error`
// let student = {
//     name : "ABC",
//     skills : {
//         frontend:["HTML" , "CSS" , "JS" , "ReactJS"],
//         backend:["Java" , "ExpressJS" , "Advance Java"]
//     },
//     hobby:["Book Reading" , "Web Series"]
// }

// console.log(student.skills.backend[1]); //ExpressJS

//   let {skills:{backend:[ , sk]}}  = student; //! objects skip directly which is not use.
//   console.log(sk); //ExpressJS

// function sum(a,b, ...d){
//     console.log(d); //[ 30, 40, 50, 60 ]
//     return a+b;
// }
// console.log(sum(10 , 20 , 30 , 40 ,50 ,60)); //30