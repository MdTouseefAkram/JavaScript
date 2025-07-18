// ! Asynchronous JS
// 1. Timer API
//! i. setTimeout
let a = 10;
console.log(a);
setTimeout(()=>{
    a = 50;
})
console.log(a);
setTimeout(()=>{
    console.log(a);
})


//! ii. setInterval

// ! Promise
// ! creating a promise
console.log("Started");

let p1 = new Promise((res , rej)=>{
     let random = Math.floor(Math.random()*10);
     setTimeout(()=>{
            if(random>4){
        res("Hey it is resolved")
     }
     else{
        rej('Hey it is rejected')
     }
     } , 10000)
})
console.log(p1);

p1.then((res)=>{
  console.log('This is then method');
  console.log(res);
  return 20;
}).then((res1)=>{
    console.log(res1);
    return 20
}).then((res2)=>{
    console.log(res2);
}).catch((err)=>{
    console.log(err); //promise chaining
}).finally(()=>{
    console.log('Finally');
})
// ! Promise
// Promise is an object in js which is used to handle the completion or failure of any asynchronous operation.
// as a frontend developer we dont create the promise , we will recieve the promise whenever we fetch the data from a server 

// ! states of promise
// ! fullfilled --> if the promise is resolved , to handle the fullfilled state we have a method called as then
// ! rejected --> if the promise is rejected to handle that we have a method called as catch
// ! pending --> neither resolved nor rejected


console.log("hey this is after promise handler methods");
for(let i = 0; i<=10000; i++){
    console.log(i);
}

// console.log("Started");
// ! Creating a Promise
// let p = new Promise((res , rej)=>{
//   res('Hello this is resolved')
// rej('Rejected')
let random = Math.floor(Math.random()*10)
setTimeout(()=>{
    if(random>5){
    res('Resolved Data')
}
else{
    rej("Rejected")
}
} , 4000)
// })
console.log("Ending");
console.log(p);
p.then((r)=>{
   console.log(r);
}).catch((err)=>{
    console.log(err);
})



// ! async await
// async and await are the keywords they are used to simplify the working with promise

//! async 
// async is a keyword which is used to make an asynchronous function
// we can write async keyword before a function and that function will become asynchronous function
// async function will always return a promise

// ! await 
//  it is a keyword which can be used inside the async function
// it will pause the execution of a function until the promise is resolved or rejected
console.log("Started");
 async function fun(){
    console.log("Inside async function");
    console.log("This is line 2");
    try{
        let res = await p;
        console.log(res);
    }catch(err){
        console.log(err);
    }
    console.log("Ending of the async function");
 }
fun();
//  console.log("Ending");
//!  https://codeshare.io/5wyZEj

// ! AJAX (Asynchronous Javascript and XML)
// ! AJAX (Asynchronous Javascript and JSON)
// ! 1. fetch() // 2. XMLHTTPRequest()

// ! fetch('api')
// fetch is the methods present inside window(browser)
// fetch is used to make HTTP Reuqests (Get ,Put , Post , Patch , Delete)
// fetch will always return a promise
// that we have to consume by using then catch or async await
let res = fetch('https://fakestoreapi.in/api/products');
// fetch will return a promise that will be stored inside res variable
res.then((data)=>{
//    console.log(data); // response object
//    console.log(data.json()); // json() will again return a promise
   return data.json()
}).then((data1)=>{
   console.log(data1.products);
})



// ! using async await to handle promise
var prod;
async function getData() {
   let res = await fetch('https://fakestoreapi.in/api/products')
   let data = await res.json()
    // console.log(data.products);
    useData(data.products)
}
console.log(getData()); // promise
// console.log(prod); // undefined

let container = document.querySelector('.container')
function useData(data){   
   data.forEach((el , i)=>{
    console.log(el);
    
    let card = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('h3')
    let price = document.createElement('p')
    let desc = document.createElement('p')
    desc.classList.add('desc')
    desc.innerText = el.description.slice(0,60)
    price.innerText = el.price;
    price.classList.add('price')
    img.src = el.image
    title.innerText = el.title.slice(0,16)
    card.classList.add('cards')
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(price)
    card.appendChild(desc)
        container.appendChild(card)
   })
}

