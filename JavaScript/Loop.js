//! table printing
// let num = parseInt(prompt('enter number'));
// for(let a = 1; a<=10; a++){
//     console.log(`${num}*${a} = ${num*a}`);
// }

//! print all the digits of a number
// let num = parseInt(prompt('enter number'));
// while(num!== 0){
//     let id = num%10;
//     console.log(ld);
//     num = parseInt(num/10);
// }

//! print count all the digits of a number
// let num = parseInt(prompt('enter number'));
// let temp = num;
//
// let digits = num.length;// 3 //fast method to count digits of a number
// num = parseInt("123"); 
//
// let count = 0;
// while(num!== 0){
//     let ld = num%10;
//     count++;
//     console.log(ld);
//     num = parseInt(num/10);
// }
// console.log(`the number of digits in ${temp} is ${count}`);

//! print reverse all the digits of a number
// let num = parseInt(prompt('enter number'));
// let temp = num;
//
// let digits = num.length;// 3 //fast method to count digits of a number
// num = parseInt(num); 
//
// let count = 0;
// let rev = 0;
// while(num!== 0){
//     let ld = num%10;
//     count++;
//     console.log(ld);
//     num = parseInt(num/10);
//     rev = rev*10 + ld;
// }
// console.log(`the number of digits in ${temp} is ${count}`);
// console.log(`The reverse of ${temp} is ${rev}`); //num is lost to 0 so use temp which store num value initially.

//! print plindrome the digits of a number
let num = parseInt(prompt('enter number'));
let temp = num;
// 2nd method
let digits = num.length;// 3 //fast method to count digits of a number
num = parseInt(num); 
//
let count = 0;
let rev = 0;
while(num!== 0){
    let ld = num%10;
    count++;
    console.log(ld);
    num = parseInt(num/10);
    rev = rev*10 + ld;
}
console.log(`the number of digits in ${temp} is ${count}`);
console.log(`The reverse of ${temp} is ${rev}`); //num is lost to 0 so use temp which store num value initially.

//! checking and print palindrom
if(temp == rev){
    console.log(`The number is ${temp} is ${rev}`);

} else{
    console.log(`The number ${temp} is not a palindrome number `);
}