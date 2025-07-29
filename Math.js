// ! Math Object
console.log(Math);
// ! Properties
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);


//! Methods
//!1. abs()
console.log(Math.abs(-20)); // 20
//!2. Math.floor()
// it will nearest lowest integer valu
console.log(Math.floor(20.4)); // 20
console.log(Math.floor(20.9)); // 20
//!3. Math.ceil()
// it will round off the number to nearest highest integer value
console.log(Math.ceil(20.1)); // 21
console.log(Math.ceil(20.9)); // 21
//! 4. Math.round()
// it will round off the number to nearest integer value
console.log(Math.round(20.3)); // 20
console.log(Math.round(20.9)); // 21
console.log(Math.round(20.5)); // 21

//! 5. Math.trunc
// it will remove all the foating point values
// similar to floor
console.log(Math.trunc(90.956)); // 90
console.log(Math.trunc(90.156)); // 90


//! Math.random()
// it will generate random values from 0 to 1
console.log(Math.floor(Math.random()*100));
//! generating the values from 50 to 100
let random = Math.floor(Math.random()*50)+50;
console.log(random);
//! generate a random number between a given range
//! formulae -->
// ! Math.floor(Math.random()*(max-min))+min

//! Generate a four digit otp 
function getOtp(){
    let otp = Math.floor(Math.random()*(999999 - 100000))+100000;
    console.log(`Your otp is : ${otp}`);
   let userOTP =  parseInt(prompt("COnfirm Your OTP please"));
    if(userOTP === otp){
        alert("Your OTP is correct")
    }else{
        alert("The OTP is Incorrect")
    }
}
getOtp()

// ! "Can you create a simple number guessing game where the computer randomly selects a number between 1 and 100, and the player has to guess it? After each guess, the game should tell the player whether their guess is too high, too low, or correct. The game should continue until the correct number is guessed, and at the end, display the number of attempts it took to guess correctly."