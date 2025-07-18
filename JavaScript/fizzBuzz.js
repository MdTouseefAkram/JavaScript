// let num = parseInt(prompt('enter a number'));

//best practice to use backticks to achieve string interpolation , and avoid using single or double qoutes.

// let amount = parseInt(prompt('enter the amount'));
// if(amount < 2000){
//     console.log(`The currrent amount is ${amount} and the discounted amount is ${amount-amount*5/100}`);
// }
// else if(amount> 6000){
//     console.log(`The currrent amount is ${amount} and the discounted amount is ${amount - amount*25/100}`);
// }
// else if(amount > 4000){
//     console.log(`The currrent amount is ${amount} and the discounted amount is ${amount - amount*20/100}`);
// }
// else if(amount > 2000){
//     console.log(`The currrent amount is ${amount} and the discounted amount is ${amount - amount*10/100}`);
// }

// let username = prompt('enter your name');
// if(username){
//     console.log(`hello, ${username}`);
// }
// else{
//     console.log("Hello Guest");
// }
// console.log( `${username}`|| `Hello Guest`);
// console.log(`Hello, ${username || `Guest`}`);//same as above with Hello

let age = parseInt(prompt('enter age'));
console.log(age>18? 'Drink Milk' : 'Drink water');
console.log(`Yes I would like to have a glass of ${age>=18 ? 'Drink' : 'Milk'}`); //same as above

let status1 = true;
console.log(status1 == false ? 'Offline' : "Online" );
console.log(`Status : ${status1 ? 'Online' : 'Offline'}`); //same as above but with backtic, we can expression in ${}

