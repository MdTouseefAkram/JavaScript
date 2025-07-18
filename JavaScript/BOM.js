console.log(window);
// ! properties of BOM
//! 1.screen (Object Model)
// it will provide the information about the viewport (screen of the device)
console.log(window.screen);
console.log(window.screen.orientation);

//! 2.history (Object Model)
// history will keep track of the webpages , we visit by using the current tab
// it provide us the functionalities of forward button back button and to move forward and back mutiple pages at a time
console.log(window.history);
console.log(window.history.length); // it will return the number of webapages visited by current tab
// history.back() // this method helps us to achieve the functionality of back button in the browser, it will move back by a single page
// history.forward() // this method helps us to achieve the functionality of forward button in the browser, it will move forward by a single page
// history.go(+veNumOfPages) // it will move forward by numOfPages
// history.go(-veNumOfPages) // it will move back by numOfPages

//!3. navigator (Object Model)
// it will tell the information about the browser
console.log(navigator);
console.log(navigator.languages);
console.log(navigator.language);
if(navigator.language === 'ja'){
    alert("Hello in japanese")
}
//! online or offilne
console.log(navigator.onLine); // true is user online otherwise false


// !4. location (Object Model)
// it will give you the info about current location(path address of the website)
// it gives the functionalities of reload button and you can change the path address also 
console.log(location);
location.reload()
location.assign('https://www.google.com')



//! 5. document (Object Model)

//! 6. innerHeight (properties)
//! 7. outerHeight (including console area)
//! 8. innerWidth (width excluding the console area)
//! 9. outerWidth (width including the console area)
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);


//! Methods of Browser Object Model
//! prompt()
//! alert()
//! confirm() 
//! open()
//! close()
//! setTimeout
//! setInterval
//! clearTimeout
//! clearInterval


//! confirm()
// confirm is used to display the pop up on the browser withg two buttons ok and cancel
// if user press ok that will return true , if user press cancel that will return false
let op = confirm("Are you married")
if(op){
    if(confirm("Have You kids")){
        console.log("Congrats");
    }
    else{
  if(confirm("Book Honeymoon place")){
    open("https://www.google.com/maps/place/Switzerland/@46.7828246,5.5840647,7z/data=!3m1!4b1!4m6!3m5!1s0x478c64ef6f596d61:0x5c56b5110fcb7b15!8m2!3d46.818188!4d8.227512!16zL20vMDZtenA?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D")
  }
    }
}
// console.log(op);
//! open()
// it will give the functionality of visiting a webpages using a new tab
open("https://www.amazon.com")
open("https://www.amazon.com")
open("https://www.amazon.com")
open("https://www.amazon.com")


//! Day 2
console.log("Starting");
setTimeout(() => {
    console.log("This is setTimeout")
}, 5000); //! if 0 is there also in that case it execute at last because it it asyncronous.
console.log("Ending");
let date = new Date();
date.setHours


//!1. setTimeout(()=>{} , delay)
//! setTimeout will accept two arguments 1st is callback function and second is delay in ms
//! it will execute the callback function after that perticular delay .
//! setTimeout is a way to achieve asunchronous behaviour in javascript
//! setTimeout will execute the callback function for once only

console.log("Started");
setTimeout(()=>{
    console.log('This is setTimeout');
} , 0)
console.log("Ending");
for(let i = 0; i<=100000; i++){
  console.log(i*2);
}

//! 2.setInterval(()=>{} , delay)
//! setInterval will execute the callback function again n again after a perticular delay
setInterval(()=>{

} , delay) 

console.log("starting");

let myInterval = setInterval(()=>{
  let date = new Date();
  console.log(`${checkDigit(date.getHours()%12)} : ${checkDigit(date.getMinutes())} : ${checkDigit(date.getSeconds())}`);
} , 1000)

console.log("Ending");
clearInterval(myInterval)

function checkDigit(p){
  if(p.toString().length == 2){
    return p;
  }
  else{
    return `0${p}`
  }
}
console.log(checkDigit(11));






