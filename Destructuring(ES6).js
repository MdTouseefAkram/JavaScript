// ! 
// ! Destructuring an array 
//  Destructuring is used to extract the elements of an array and store them inside a variable
let arr = [10 , [20 , [30 , [40 , [50]] , 90]]]
let [ , [ , [ ,[ , [a]],c]]] = arr; //! array elements does not skip which even is not used, we write like [, [a]] // in case of array we can give any variable name for particular element value while desturing.
console.log(a , c); 

// ! Destructuring of Objects
let obj = {
    sname : "Atul" , 
    age : 39 ,
    city:"Delhi",
    Degree:"B.Tech",
    percentage:90,
    isMarried:true
}
// let {city , Degree} = obj; //! in case of objects , we must write same as keyName while destruturing.
console.log(city);
console.log(Degree);


let student = {
    name : "ABC",
    skills : {
        frontend:["HTML" , "CSS" , "JS" , "ReactJS"],
        backend:["Java" , "ExpressJS" , "Advance Java"]
    },
    hobby:["Book Reading" , "Web Series"]
}

console.log(student.skills.backend[1]); //ExpressJS

  let {skills:{backend:[ , sk]}}  = student; //! Those objects data which is not need to extract even if firts object like 'name:' skip it , but write '{' initailly. we don't need to write comma like {,keyName:}. we write like let {skill: {frontend: {anyVariableName}} = student. Now we can use variable data anywhere.
  console.log(sk); //ExpressJS
  

let arr1 = [
    {
        name:"Atul",
            skills : {
        frontend:{
            basic:["HTML" , "CSS" , "JS"],
            advance:{
                libraries:["ReactJS"],
                frameworks:["AngularJS" , "NextJS"]
            }
        },
        backend:{
                 basic:["Java" , "JS"],
            advance:{
                libraries:["SpringBoot"],
                frameworks:["SpringFamily"]
            }
        }
    },


    } , {

    },{

    }
]
const data = [
  {
    id: 1,
    name: "Alice",
    contact: {
      email: "alice@example.com",
      phone: "123-456-7890",
      addresses: [
        {
          type: "home",
          city: "New York",
          zip: "10001"
        },
        {
          type: "work",
          city: "Boston",
          zip: "02110"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Bob",
    contact: {
      email: "bob@example.com",
      phone: "987-654-3210",
      addresses: [
        {
          type: "home",
          city: "San Francisco",
          zip: "94105"
        },
        {
          type: "work",
          city: "Seattle",
          zip: "98101"
        }
      ]
    }
  }
];
let [{contact:{addresses:[{zip}, {city}]}}] = data; //! In case of starting extracting data from array under this data, objects and rest data is present. Destructring starts with array brackets becoz data is pesent inside an array then inside objects is there. 
console.log(zip , city);


const users = [
  {
    userId: 101,
    profile: {
      name: "Jane Doe",
      age: 29,
      settings: {
        theme: "dark",
        language: "en",
        projects: [
          {
            projectId: "p1",
            projectName: "AI Chatbot",
            team: [
              { name: "Jane Doe", role: "Lead Developer" },
              { name: "Tom", role: "Data Scientist" }
            ]
          },
          {
            projectId: "p2",
            projectName: "Web Redesign",
            team: [
              { name: "Alice", role: "UX Designer" },
              { name: "Jane Doe", role: "Frontend Developer" }
            ]
          }
        ]
      }
    }
  },
  {
    userId: 202,
    profile: {
      name: "John Smith",
      age: 35,
      settings: {
        theme: "light",
        language: "fr",
        projects: [
          {
            projectId: "p3",
            projectName: "Mobile App",
            team: [
              { name: "John Smith", role: "Product Manager" },
              { name: "Sara", role: "Developer" }
            ]
          }
        ]
      }
    }
  }
];
let [{profile:{settings:{projects:[{team:[{role} , {role:role1}]}]}}}] = users
console.log(role);
console.log(role1);




// ! Spread and rest (...)
// ! spread
// it is used to unpack all the elements of the array or all the properties of an object
let arr2 = [10 , 20 ,30]
console.log(arr2);
console.log(10 , 20 , 30);
console.log(...arr2);

let arr3 = [10 , 20 , 30];
let arr4 = [40 , 50 , 60];
let res = [...arr3 , ...arr4]; //[ 10, 20, 30, 40, 50, 60 ]
console.log(res);

let arr5 = [10 , 20 , 30];
//! shallow copy -- (A shallow copy creates a new object, but nested objects/arrays are still referenced from the original).
console.log('hi')
let arr6 = [...arr5];  // shallow  ? why , it reference is different.
arr6.push(90)
console.log(arr5); //[ 10, 20, 30 ]
console.log(arr6); //[ 10, 20, 30, 90 ]

// !spread
let arr7 = [10 , 30 , 560 , 900 , 89 , 654];
console.log(Math.max(...arr7));
console.log(Math.min(...arr7));
Math.max(200 , 50 , 650 , 700 , 880 ,900)


console.log(..."Akshay"); // "A" , "k" , "s"
let res1 = [..."abcdef"];
console.log(res1);


// ! Rest Parmeters
// its used to pack the rest of the arguments in the form of an array 
function sum(a,b, ...d){
    console.log(d); //[ 30, 40, 50, 60 ] // Takes from function call, a = 10, b = 20 and rest d = 40, 50, 60. // It is an array given by rest.
    return a+b;
}
console.log(sum(10 , 20 , 30 , 40 ,50 ,60)); //30 - It is normal value.


// ! fetching the data from an api 



