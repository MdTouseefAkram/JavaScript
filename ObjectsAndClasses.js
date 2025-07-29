//! Objects are used to represent any real world entity in programming.
//! Objects are the coleection of properties.
//! A property is the combination of key and value pair.
//! We can store any data type as the value.

let marker = {
    ink: "blue",
    "1color": "white",
    40: "amount"
}

//! Accessing the properties of an object.

//! 1st way --> Dot Notation.
console.log(marker.ink);

//! 2nd way --> Bracket Notation
console.log(marker["1color"]);
console.log(marker["40"]);

let person = {
    name: "Akshay",
    color: "white",
    age: 90,
    skills: ["html", "Css", "JS", "ReactJS"],
    isMarried: false,
    isWorking: true,
    userInput: "Hello"
}
// let userInput = 'age';
let userInput = prompt('What do you want to know, 1.age, 2.skills, name');
console.log(person.userInput); // hello
console.log(person[userInput]); // 90 , without " " using , it search variable like userInput = 'age', then age find is 90.

//! Updating the properties of an Object.
person.name = "Touseef";
person["age"] = 20;

//! Deleting the properties of an Object.
delete person.age;
delete person["name"];
console.log(person);

//! Adding a property in an Object.
person.place = "delhi";
// person["place"] = "delhi";
console.log(person);


//! Methods


//!1. Object.keys(refVariable)
// It will return all the keys in an array format
console.log(Object.keys(person));

//!2. Object.values(refVariable)
// It will return all the values in an array format
console.log(Object.values(person));

//! 3. Object.entries(refVariable)
// It will return the key and value pair as the nested array 
console.log(Object.entries(person));

//! 4. Object.seal(refVariable)
// ! it will seal the object , we cannot delete the existing properties or we cannot add a new property , but we can update the existing
Object.seal(person);
delete person.name;

//! 5. Object.isSealed(refVariable)
// it will return boolean value , if object is sealed it will return true otherwise false
console.log(Object.isSealed(person));
person.name = "ujjwal"
person.hobby = "cricket"
console.log(person);

//!6. Object.freeze()
// it will freeze the object we cannot perform any operation , 
//we can't delete , we cannot add and even we cannot update
Object.freeze(person);
person.place = "bangalore";
console.log(person);
//! 7. Object.isFrozen(refVariable)
// it will return true if the object is freeze otherwise false
console.log(Object.isFrozen(person)); // true


// !8. objName.hasOwnProperty('key')
// it will return a boolean value . 
// it will return if a property is present in the object 
console.log(person.hasOwnProperty('place')); // true



// ! Ways to create an Object 
//! 1. by using literals
//! 2. by using Object conctructor
//! 3. constructor function
//! 4. by using a class
//! 5. Object.assign()
//! 6. Object.create()

//! 2. by using Object conctructor
let obj = new Object();
obj.name = "virat";
obj.age = 40;
console.log(obj);

//! 3. constructor function
// whenever we have to create multiple objects wit same properties we can use constructor function
function Student(sname , sage , phy , che , maths){
    this.name = sname,
    this.age = sage,
    this.phy = phy,
    this.che = che,
    this.maths = maths
    this.result = function(){
        console.log(`The result of ${this.name} is ${(this.phy+this.che+this.maths)/3}`);
    }
}
let s1 = new Student('atul' , 25 , 90 , 94 , 91);
let s2 = new Student('pranav' , 23 , 92 , 94 , 98);
let s3 = new Student('akshay' , 23 , 94 , 95 , 98);
console.log(s1);
s1.result()
console.log(s2);
s2.result()
console.log(s3);
s3.result()

//! how new keyword will work
//! 1. it will create an empty object in heap 
//! 2. the this keyword of the constructor function will point to that object
//! 3. all the properties will be assigned to that object 
//! 4. the reference address will be stored to the reference variable
console.log(s1);
console.log(s2);

//! methods
// a function which is created within a object is called as a method
//! this keyword
let p = {
    pname:"Rohit",
    age:40,
    details:function(){
        console.log(this); // parent object p1
    },
    details1:()=>{
        console.log(this); // window --> because it'll borrow from its lexical environment
    },
}
p.details()
p.details1()
p.demo()

console.log(this); // window
function fun(){
    console.log(this); // inside a function it will point to window
}
fun()

//! call , apply , bind
// call apply bind are used to change the reference of this keyword to a perticular object 
// the working of call apply bind is same , they are syntactically different
let p1 = {
    name:"Rohit",
    age:40,
    details:function(place){
     console.log(`the name is ${this.name} the age is ${this.age} place:${place}`); //the name is Rohit the age is 40 place:Mumbai
    }
}
p1.details('Mumbai');
let p2 = {
    name:"Dhoni",
    age:42
}
let p3 = {
    name:"Virat",
    age:37
}
p1.details.call(p2 , "Ranchi") //the name is Dhoni the age is 42 place:Ranchi // the call() method invokes a function immediately.
p1.details.call(p3 , "Delhi") //the name is Virat the age is 37 place:Delhi
p1.details.apply(p3 , ["Bengaluru"]) //the name is Virat the age is 37 place:Bengaluru

//! some extra examples
// p1.details.apply(p3) //the name is Virat the age is 37 place:undefined
//! let p1 = {
//     name:"Rohit",
//     age:40,
//     place:"Mumbai",
//     details:function(){
//      console.log(`the name is ${this.name} the age is ${this.age} place:${this.place}`); //the name is Rohit the age is 40 place:Mumbai
//     }
// }
// p1.details();

// let p4 = {
//     name:"Virat",
//     age:37,
//     place:"Bomabay"
    
// }
//? p1.details.apply(p4); //the name is Virat the age is 37 place:Bomabay

//! bind will return a new function where this keyword will always point to a perticular object (whatever we have given as argument)
let demo = p1.details.bind(p2) // bind() called later -- here demo() is called later
demo('A') //the name is Dhoni the age is 42 place:A // here demo() is called. so this is how bind returns a new function.
demo('B') //the name is Dhoni the age is 42 place:B
demo('C') //the name is Dhoni the age is 42 place:C


//! bind
// bind will return a new function where this return.

//! apply
//The apply() method is similar to call(), but it accepts arguments as an array or array-like object.
p1.details.apply(p3, "Bangaluru"); //error --> TypeError: CreateListFromArrayLike called on non-object
p1.details.apply(p3 , ["Bengaluru"]) //the name is Virat the age is 37 place:Bengaluru

//!Another example
const person = {
  firstName: "John",
  lastName: "Doe"
};

function introduce(greeting, city) {
  return `${greeting}, I'm ${this.firstName} ${this.lastName} from ${city}.`;
}

// Using apply() to call introduce with person as 'this' and arguments as an array
const message = introduce.apply(person, ["Hello", "New York"]);
console.log(message); // Hello, I'm John Doe from New York.


//! prototype inheritance
function Student(sname , sage , phy , che , maths){
    this.name = sname,
    this.age = sage,
    this.phy = phy,
    this.che = che,
    this.maths = maths
}
// console.dir(Student);
Student.prototype.demo = function(){
    console.log('This is demo function');
}
Student.prototype.result =function(){
        console.log(`The result of ${this.name} is ${(this.phy+this.che+this.maths)/3}`);
    }
let s4 = new Student('atul' , 25 , 90 , 94 , 91);
let s5 = new Student('pranav' , 23 , 92 , 94 , 98);
let s6 = new Student('akshay' , 23 , 92 , 94 , 98);
console.log(s4.__proto__);
s4.result()
console.log(s5);
s5.result()
console.log(s6);
s6.result()

//! https://codeshare.io/5XLXlk

let arr = [1,2,3,4]
arr.__proto__ = {};
// arr.push(10)
console.log(arr); //{ '0': 1, '1': 2, '2': 3, '3': 4 }



//! class
//! class is a blueprint to create the objects 
//! class was introduced in ES6(2015) version of Javascript
class Student{
    constructor(name , rollno , age){
     this.name = name;
     this.age = age;
     this.roll = rollno
    }
   // whatever methods we declare in the class , by default they will go to the prototype object we don't have to pass them to the prototype manually.
    details(){
        console.log(`${this.name} ${this.age} ${this.roll}`);
    }
    //static methods will not be available for the instance , it will be only available for the class itself.
    static demo(){
        console.log('I am demo function');
    }

}
let s7 = new Student('Atul' , 6 , 24);
let s8 = new Student('Pranav' , 7 , 25);
console.log(s7);
s7.details()
Student.demo()
console.log(s8);


//! 5. Object.create(prototypeObj)
// by using Object.create we can assign the prototype object as the argument 
// Whatever object we pass as argument will become the prototype
let obj = Object.create({place:'Delhi' , degree:'B.Tech'})
obj.name = "ABC"
console.log(obj); //{} //{ name: 'ABC' } - this is correct.
console.log(obj.degree); //B.Tech
console.log(obj.place); //Delhi

//! Creates a new object with a specified prototype.
let parentObj = {
    name:"Atul",
    printName(){
        console.log(this.name)
    },
};
let obj = Object.create(parentObj);
console.log(obj.name); // "Atul" (inherited)
obj.printName(); // Atul

//!6. Object.assign(obj1 , obj2 , obj3)
 //! shallow copy
let a = {
    name:"A",
    age : 30,
    skills:['html' , 'css' , 'js']
}
let b = a;
b.name = "B";
a.age = 40;
console.log(a); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }
console.log(b); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }

//! 
let copy = Object.assign({} , a)
console.log(copy); //{ name: 'B', age: 40, skills: [ 'html', 'css', 'js' ] }
copy.name = "Copied";
console.log(copy); //{ name: 'Copied', age: 40, skills: [ 'html', 'css', 'js' ] }
copy.skills.pop()
console.log(a); //{ name: 'B', age: 40, skills: [ 'html', 'css' ] }
console.log(b); //{ name: 'B', age: 40, skills: [ 'html', 'css' ] }
console.log(copy); //{ name: 'Copied', age: 40, skills: [ 'html', 'css' ] }

const products = [
  { prodName: "Laptop", price: 1000, qty: 10, pid: "P001", mfg: 2023 },
  { prodName: "Monitor", price: 1000, qty: 10, pid: "P002", mfg: 2022 },
  { prodName: "Smartphone", price: 800, qty: 5, pid: "P003", mfg: 2024 },
  { prodName: "Tablet", price: 800, qty: 5, pid: "P004", mfg: 2024 },
  { prodName: "Keyboard", price: 100, qty: 20, pid: "P005", mfg: 2021 },
  { prodName: "Mouse", price: 100, qty: 20, pid: "P006", mfg: 2021 },
  { prodName: "Webcam", price: 150, qty: 8, pid: "P007", mfg: 2023 },
  { prodName: "Speakers", price: 150, qty: 8, pid: "P008", mfg: 2022 },
  { prodName: "Printer", price: 200, qty: 12, pid: "P009", mfg: 2023 },
  { prodName: "Scanner", price: 200, qty: 12, pid: "P010", mfg: 2023 },
  { prodName: "Router", price: 120, qty: 7, pid: "P011", mfg: 2020 },
  { prodName: "Modem", price: 120, qty: 7, pid: "P012", mfg: 2020 },
  { prodName: "External HDD", price: 250, qty: 6, pid: "P013", mfg: 2022 },
  { prodName: "USB Drive", price: 50, qty: 50, pid: "P014", mfg: 2021 },
  { prodName: "SD Card", price: 50, qty: 50, pid: "P015", mfg: 2021 },
  { prodName: "Power Bank", price: 300, qty: 4, pid: "P016", mfg: 2024 },
  { prodName: "Charger", price: 75, qty: 30, pid: "P017", mfg: 2022 },
  { prodName: "HDMI Cable", price: 75, qty: 30, pid: "P018", mfg: 2022 },
  { prodName: "Projector", price: 500, qty: 3, pid: "P019", mfg: 2023 },
  { prodName: "Camera", price: 500, qty: 3, pid: "P020", mfg: 2023 }
];

// ! total cost of all the products
let totalCost1 = products.reduce((acc , el)=>{
    return acc+el.price*el.qty
} , 0)
console.log(totalCost1);

//! products name as a single string with space
let allProducts = products.reduce((acc , el)=>{
    return acc+el.prodName+" ";
} , "")
console.log(allProducts);


// ! products on even index
let evenIndex = products.filter((el , i)=>{
    return i%2 === 0;
})
console.log(evenIndex);





//! the total amount spent on products in the year 2024
//! 1st step filter all the items mfg as 2024
//! sum all the cost and return
let op = products.filter((el)=>el.mfg === 2023).reduce((acc,el)=>{
  return acc+el.price*el.qty
} , 0)
console.log(op);

// ! display only those products which are manufactured in year 2023
let products2023 = products.filter((el)=>el.mfg === 2023);
console.log(products2023);

//! products which cost more than 150
let product150 = products.filter((el)=>el.price>150)
console.log(product150);

//! qty < 10
let qty10 = products.filter((el)=>el.qty<10)
console.log(qty10);

//!  increment the price of every product by 20%
let price20 = products.map((el)=>{
    return {...el , price:el.price+el.price*0.2};
})
console.log(price20);
console.log(products);

// ! spread(...)
let fruits = ["mango" , "papaya"]
let fruits2 = ["kiwi" , "strawberry"]

let res = [...fruits , ...fruits2]
console.log(res);

let obj = {
    name:"A",
    age:30,
    qty:4
}
console.log({...obj , qty:10});

//! print the object with even qty
let evenQty = products.filter((el)=>el.qty%2==0);
console.log(evenQty);

//! total cost of all the products
let totalCost = products.reduce((acc , el )=>{
    return acc+el.price*el.qty
} , 0)
console.log(totalCost);


const players = [
  { playerName: "Virat Kohli", jerseyNo: 18, team: "India", centuries: 29, isMarried: true, innings: 279 },
  { playerName: "Rohit Sharma", jerseyNo: 45, team: "India", centuries: 31, isMarried: true, innings: 247 },
  { playerName: "Joe Root", jerseyNo: 66, team: "England", centuries: 12, isMarried: false, innings: 143 },
  { playerName: "Steve Smith", jerseyNo: 33, team: "Australia", centuries: 18, isMarried: true, innings: 190 },
  { playerName: "MS Dhoni", jerseyNo: 7, team: "India", centuries: 10, isMarried: true, innings: 250 },
  { playerName: "Nicholas Pooran", jerseyNo: 99, team: "West Indies", centuries: 22, isMarried: false, innings: 210 },
  { playerName: "Rahmanullah Gurbaz", jerseyNo: 14, team: "Afghanistan", centuries: 5, isMarried: false, innings: 85 },
  { playerName: "Kane Williamson", jerseyNo: 23, team: "New Zealand", centuries: 15, isMarried: true, innings: 160 },
  { playerName: "Ben Stokes", jerseyNo: 5, team: "England", centuries: 9, isMarried: false, innings: 128 },
  { playerName: "David Warner", jerseyNo: 21, team: "Australia", centuries: 20, isMarried: true, innings: 205 },
  { playerName: "Shimron Hetmyer", jerseyNo: 3, team: "West Indies", centuries: 8, isMarried: false, innings: 97 },
  { playerName: "Ibrahim Zadran", jerseyNo: 87, team: "Afghanistan", centuries: 1, isMarried: false, innings: 54 },
  { playerName: "Tom Latham", jerseyNo: 13, team: "New Zealand", centuries: 11, isMarried: true, innings: 132 },
  { playerName: "Shubman Gill", jerseyNo: 77, team: "India", centuries: 4, isMarried: false, innings: 88 },
  { playerName: "Jos Buttler", jerseyNo: 31, team: "England", centuries: 6, isMarried: false, innings: 110 },
  { playerName: "Marnus Labuschagne", jerseyNo: 9, team: "Australia", centuries: 25, isMarried: true, innings: 240 },
  { playerName: "Jason Holder", jerseyNo: 55, team: "West Indies", centuries: 7, isMarried: true, innings: 102 },
  { playerName: "Hazratullah Zazai", jerseyNo: 88, team: "Afghanistan", centuries: 2, isMarried: false, innings: 61 },
  { playerName: "Devon Conway", jerseyNo: 17, team: "New Zealand", centuries: 13, isMarried: true, innings: 170 },
  { playerName: "Ruturaj Gaikwad", jerseyNo: 39, team: "India", centuries: 3, isMarried: false, innings: 75 }
];

//! players who score more than 15 centuries
let centuries15 = players.filter((el)=>el.centuries>15)
console.log(centuries15);

//! filter all the players of india
let indianPlayers = players.filter((el)=>{
    return el.team.toLowerCase() === "india"
})
console.log(indianPlayers);

//! who all are married
let married = players.filter((el)=>el.isMarried)
console.log(married);

//! total centuries by indian players
let totalIndianCenturies = players.filter((el)=>el.team.toLowerCase()==="india").reduce((acc , el)=>{
    return acc+el.centuries;
} , 0)
console.log(totalIndianCenturies);

// Math Object
//! https://codeshare.io/5ZLdrz.



//! 🔹 What is a Prototype?
// Every JavaScript object has an internal property called [[Prototype]], which refers to another object.
// You can access it using:
// Object.getPrototypeOf(obj); // Modern
// obj.__proto__;              // Deprecated but still widely used.


//! 🔹 Prototype in Functions (Constructor Functions)
// When you create a function, it automatically gets a prototype property. This is mainly used when the function is intended to be used as a constructor (i.e., with new).

// javascript
// Copy
// Edit
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello, I am ${this.name}`);
// };

// const p1 = new Person("Touseef");
// p1.sayHello(); // Hello, I am Touseef
// Here:

// sayHello is not defined directly on p1

// It’s defined on Person.prototype

// p1.__proto__ === Person.prototype → true

//! 🔹 Prototype Chain
//! This is how JavaScript enables inheritance:


// p1 → Person.prototype → Object.prototype → null
// When accessing p1.sayHello, JS checks:

// Is it in p1? ❌

// Is it in Person.prototype? ✅

// If not, continue up the chain…

//! 🔹 Example (Inheritance in JS)

// let animal = {
//   eats: true
// };

// let rabbit = Object.create(animal);
// rabbit.hops = true;

//! console.log(rabbit.eats); // true → inherited from animal

//! 🔹 Explanation:
// animal is an object with a property eats.

// rabbit is created using Object.create(animal), which sets animal as the prototype of rabbit.

// So when you access rabbit.eats, JavaScript looks in rabbit:

// Not found ❌

//! Then looks in rabbit.__proto__ (which is animal) ✅

//! 🔹 Prototype Chain Created:
// rabbit → animal → Object.prototype → null

// !🔹 Summary
// Concept	Description
// prototype   --	Property of constructor functions to define methods
// __proto__	-- Internal reference to the prototype object
// Prototype Chain --	Mechanism for inheritance in JS


//! 🔹 What is Object Prototype in JavaScript?
// In JavaScript, Object.prototype is the top-most prototype object from which all JavaScript objects inherit. It provides basic methods and properties that are available to all objects unless explicitly overridden.

//! 🔸 Key Concept:
// When you create any object (literally anything: {}, new Object(), arrays, functions, etc.), it inherits from Object.prototype unless you explicitly set a different prototype.

//! 🔹 Example:

// const obj = { name: "Touseef" };

//  obj does not have hasOwnProperty directly
// console.log(obj.hasOwnProperty("name")); // true

// hasOwnProperty comes from Object.prototype
// console.log(obj.__proto__ === Object.prototype); // true

//! 🔹 Common Methods from Object.prototype:
// Method	Description
// hasOwnProperty() --	Checks if property exists directly on the object
// toString()--	Returns string representation of the object
// valueOf()--	Returns the primitive value of the object
// isPrototypeOf()--	Checks if an object exists in the prototype chain
// propertyIsEnumerable()--	Checks if a property is enumerable

//! 🔹 Prototype Chain Diagram (Simplified):

// obj → Object.prototype → null
// If you try to access a method or property that’s not in obj, JavaScript will check Object.prototype, and if not found, it returns undefined.

//! 🔹 Custom Object Example:

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Touseef");

//! console.log(p1.toString()); // [object Object] → inherited from Object.prototype
// Even though you didn’t define toString(), it works because it’s inherited from Object.prototype.

//! 🔸 Summary:
//! Object.prototype is the root prototype for most objects.

// Provides default methods that all objects can use.

// It's at the top of the prototype chain.



