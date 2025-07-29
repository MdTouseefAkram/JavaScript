//! Arrays
// Array in JS is used to store a collection of homogenous and heterogenous elements. 
// Arrays is stored as object in Heap area with reference address.

//! Ways to create an Array in JS.

//! 1. By using Literals ([])
let arr = [];
console.log(arr);

let arr2 = ['mango', 'papaya', 'grapes'];

//! Inserting the elements in an array.
arr[0] = 40;
arr[1] = true;
arr[2] = 'Touseef';
console.log(arr);

arr[10] = 'End';
console.log(arr); // [ 40, true, 'Touseef', <7 empty items>, 'End' ]

arr2[10] = 'grapes';
console.log(arr2); // [ 'mango', 'papaya', 'grapes', <7 empty items>, 'grapes' ]

//! (Mutable) Updating the elements of the Array.
arr2[0] = 'orange';
console.log(arr2);

//! Deletion
delete arr2[0];
console.log(arr2); // [ <1 empty item>, 'papaya', 'grapes', <7 empty items>, 'grapes' ]

console.log([] == []); //false , [] is non primitive and two diiferent Array is there. (In non primitive type conversion is not allowed), refernece address is stored in heap which is different.
let a = [];
let b = a;
console.log(a == a); //true
console.log( a== b); //true

//! Questions 1
let a1 = [1,2,3];
let b1 = a1;

delete a1[2];
console.log(a1); // [ 1, 2, <1 empty item> ]
console.log(b1); // [ 1, 2, <1 empty item> ] // Shallow copy
b1[5] = 'mango'; //! both a1 and b1 pointing to same memory address. 
console.log(b1);

//! Question 2
let a3 = [1,2,3];
let b3 = [1,2,3];
console.log(a3 == b3); //false (whenever we compare two non primitive values, they are compare by refernece)
console.log(a3 == [1,2,3]); // false
console.log(a3 == '1,2,3'); // true -> whenever we compare non primitive to primitive then type cohersion is done. [1,2,3] convert to string '1,2,3'.


//! Properties and Methods of Array.
//? Property
//! 1. length
// It will return the number of elements present inside the Array.
let fruits3 = ["mango", "gauva"];
console.log(fruits3.length); // 2

//! typeof returns object for an Array because Array is stored as an Object in Heap Area.
console.log(typeof fruits3); // object -> Array is Object in JS.
console.log(typeof null); // object
console.log(typeof {}); // object

//! How to identify that inside a variable an Array is stored.
console.log(Array.isArray(fruits3)); //true
console.log(Array.isArray([])); //true
console.log(Array.isArray({})); //false
console.log(Array.isArray(null)); //false

//! 2nd way--> Creating an Array by using Array Constructor.
let arr1 = new Array(5, 2);
console.log(arr1); // [5,2]

//! Note -> Whenever we pass one single argument as a numeric value it will take as the size of the Array.
let arr2 = new Array(5); 
console.log(arr2); // [ <5 empty items> ]
// If we pass other than numeric value, it will take as an element.
let arr3 = new Array('5');
console.log(arr3); // [ '5' ]




//! Looping on Array.

//! 1. for in loop -> It will iterates through the index of the Array.

let arr = [10,20,30,40];
for(let i in arr){
    console.log(i); //give index 0 1 2 3
    //console.log(arr[i]); //work properly-> 10, 20, 30, 40
}
//  console.log('Hi')

//! 2. for of loop -> It will iterates through the elements of the Array.

for(let el of arr){
    console.log(el); //10 20 30 40
    //console.log(arr[el]); //undefined
}

//! Array Method
let fruits = ["mango", "papaya"];

//! 1. push(element) --> (Mutable)
// It is used to add the element at the last in the Array.
fruits.push("gauava");
console.log(fruits);

//! 2. pop() --> (Mutable)
// It is used to remove the element from the last index of the Array.
fruits.pop();
// fruits.push('guava');
console.log(fruits);

//! 3. unshift() --> (Mutable)
// It is used to add the element at the begining of the Array.
fruits.unshift('grapes',' strawberry', 'guava');
console.log(fruits);

//! 4. shift() --> (Mutable)
// It is used to remove the elements from the 0th index of the Array.
fruits.shift();
fruits.shift();
console.log(fruits);

//! 5. includes(element) --> (Immutable)
// It is used to check if an element is available inside the Array or not, it will return if the element is present in the Array, otherwise false.
console.log(fruits.includes('gauava')); // true
console.log(fruits.includes('grapes')); //false

//! 6. indexOf(element, startingIndex) --> (Immuatable)
// It is used to return the index of a particular element present inside the Array.
console.log(fruits.indexOf('gauava', 3)); // 3 is index no where we want to start search from that index. It helpful if multiple gauava there and we want 2nd or 3rd or other index gauava.
console.log(fruits.indexOf('mango'));
let nums = [10,20,30,10,20,10];
console.log(nums.indexOf(10)); //0
console.log(nums.indexOf(10, 2)); // 3
console.log(nums.indexOf(10, 4)); // 5

//! 7. lastIndexOf(element) --> (Immutable)
// It will return the index of last occurence of the element.
console.log(nums.lastIndexOf(10, -2)); // 3

//! 8. reverse() --> (Mutable)
// It will reverse all the elements of the Array and it will muatate the original Array.
let nums1 = [10, 20, 30, 40, 40, 60];
nums1.reverse();
console.log(nums1);

//! 9. toString()
// toString() is used to convert an Array into String, it will give comma between every element.
// It will convert the Array to a single String.
console.log(nums1.toString());

//! 10. join(argument)
// join will convert the Array into String based on the argument we pass.
//! without argument
console.log(nums1.join()); //60,50,40,30,20,10
//! without argument as empty String
console.log(nums1.join('')); //605040302010
//! with argument as space
console.log(nums1.join(' ')); //60 50 40 30 20 10

//! Program 1
//! reverse a program.
let str = 'javascript';
let reversed = str.split('').reverse().join('');
console.log(reversed);

//! Program 2. reverse the words of the sentence.
let str1 = 'i love javascript';
let reversed1 = str1.split(' ').reverse().join(' '); //split words and join words
console.log(reversed1); // javascript love i

//! Program 3. reverse the character of the sentence
let qoute = " I love javascript";
let reverseQuote = qoute.split('').reverse().join(''); // space is also a character, so use empty string without space.
console.log(reverseQuote);

//! 11. slice(s.i, e.i)
// slice will return the subArray(specific part of the Array)
let fruits2 = ['mango', 'papaya', 'gauva', ' gauava'];
console.log(fruits2.slice(1, 3)); //e.i is excluding
console.log(fruits2.slice(1)); //e.i is till last

//! 12. splice(s.i, deleteCount, element1, element2, ...elementn)
// splice is used to add or remove the element at a particular index.
// It will accept 3 arguments, 1st is index, 2nd is declare count and after that the element to be added at that index.
// It will modify the original Array.

let arr4 = [10, 20, 30, 40, 50];
arr4.splice(1,2, "apple", "gauva")
console.log(arr4);
arr4.splice(3,1); // remove 40 present at 3rd index. and 1 is count.
console.log(arr4);

//! 13. sort(compare Fn..)
// It will modify the original Array.
// Without callback fn, it will compare in first digit, so to sort properly we have to pass compare fn.

let arr5 = [100, 900, 800, 700, 200, 400, 300, 1,2,20, 30, 40];
//! arr5.sort();  
//[
//     1, 100,  2,  20, 200,
//    30, 300, 40, 400, 700,
//   800, 900
// ]

arr5.sort((a,b)=>{
    return a-b; //ascending order
    // return b-a; // descending order
})
console.log(arr5);
// [
//     1,   2,  20,  30,  40,
//   100, 200, 300, 400, 700,
//   800, 900
// ]

//! 14. flat()
// The flat() method in JavaScript is an Array method used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth.
// The flat() method concatenates sub-array elements
const arr6 = [1, 2, [3, 4]];
console.log(arr6.flat()); // Output: [1, 2, 3, 4]

//! 15. fill(element, s.i(optional), e.i(optional))
// It is used to fill the Array with a particular element.
// It will modify the actual Array.
let arr7 = new Array(10); // [ <10 empty items> ]
arr7.fill(10); //fill all elements with 10
arr7.fill(20,3,6); // element - 20, s.i - 3, e.i - 6 -Exclusive
console.log(arr7);
// [
//   10, 10, 10, 20, 20,
//   20, 10, 10, 10, 10
// ]

//! Advance Methods of Array
// These all the methods will accept a callback function and that callback
// will be executed for all the elements of the Array.
//! A callback function is explicitly provided as an argument when calling another function.
//A callback is a function passed as an argument to another function.
//This technique allows a function to call another function.
//A callback function can run after another function has finished.

// callback function will be having 3 parameters.
// 1st parameter represents iterating variable, which will iterate throught all the element of the Array one by one.
// 2nd parameter represents the index.
// 3rd parameter will represent the original Array.

// Callback function
function greetUser(name) {
    console.log("Hello, " + name);
}

// Function that takes another function as a parameter (callback)
function processUser(callback) {
    const userName = "Touseef";
    callback(userName); // calling the callback
}

// Call the main function and pass the callback
processUser(greetUser);

// O/P: Hello, Touseef

//!🔍 Explanation:
//!? greetUser is a callback function.

//!? processUser takes a function as an argument (callback) and then calls it with a name.

//!? This is how callback functions work — passing one function to another and calling it when needed.


//! 16. forEach(callback fn...)
// forEach is an advance method of the Array.
// It will accept a callback function with 3 parameters.
// It works like a loops, used to iterate through the Array.
// It doesn't return anything.
let nums2 = [20, 141, 90, 45, 30];
nums2.forEach((el, i, arr)=>{
    console.log(el, i);
})
// O/P
// 20 0
// 141 1
// 90 2
// 45 3
// 30 4

//! 17. map(callback fn..)
// Map will return a new Array with updated elements.
// We have to return a condition based on the elements will be updated.
// extra: The map() function in JavaScript is a higher-order array method.
let arr8 = [3,5,6,8,9];
let res1 = arr8.map((el, i)=>{
    return el*el;
})
console.log(res1); // [ 9, 25, 36, 64, 81 ]
console.log(arr8); // [ 3, 5, 6, 8, 9 ]

let res2 = [];
for(let i = 0; i<arr8.length; i++){
    res2[i] = arr8[i]*arr8[i];
}
console.log(res2); // [ 9, 25, 36, 64, 81 ]
console.log(arr8); //[ 3, 5, 6, 8, 9 ]

//! Examples
// Return a new array with the square root of all element values:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
// O/P: 2,3,4,5

// Multiply all the values in an array with 10:
const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers1.map(myFunction)

function myFunction(num) {
  return num * 10;
}
// O/P: 650,440,120,40

//! Description
//? map() creates a new array from calling a function for every array element.

//? map() does not execute the function for empty elements.

//? map() does not change the original array.

//! 18. filter(callback Fn..)
// The filter() method creates a new array filled with elements that pass a test provided by a function.
let nums3 = [10,11,20,21,30,31];
let res3 = nums3.filter((el, i, arr)=>{
    return el%2 !== 0; // It will check the truthy value, the condition is true or not.
})

let nums4 = [0, 10, false, undefined, "rohit", true];
let res4 = nums4.filter((el, i, arr)=>{
    return el; // It will check truthy values and filtered it and return these truthy values in new Array.
})
console.log(res4); // [ 10, 'rohit', true ]

//! Example
// filter all the names starting with a vowel.
let names = ["pranav", "atul", "ritesh", "akshay"];
let filledNames = names.filter((el, i)=>{
    return "aeiou".includes(el.charAt(0).toLowerCase());
})
console.log(filledNames); // [ 'atul', 'akshay' ]

//! Example 2
let nums5 = [1,2,3,4,5];
let res5 = nums5.filter((el, i, arr)=>{
    return el>2; // It will check truthy values like 1>2 - false, 3>2- true, so it will add on new Array.
})
console.log(res5); // [ 3, 4, 5 ]

//! 19. reduce(callback Fn)
// In the callback function of reduce we have accumulator.
// Whatever we return from the callback function will become the new value of aacumulator.
let nums6 = [10, 20, 30, 40];
let res6 = nums3.reduce((acc, el, i, arr)=>{
    return acc*el;
}) // here initial value is not pass so acc takes 1st index as initial value and i starts from 2nd index.
console.log(res6);

//! 20. reduceRight()
// Similar to reduce but it will start from the right side (last index).
let nums7 = [10, 20, 30, 40];
let res7 = nums3.reduceRight((acc, el, i, arr)=>{
    console.log(acc, el);
    return acc*el;
})
console.log(res7);

//! 21. find(callback Fn..)
// find will accept the callback function.
// We have to return a condition from the callback function of find.
// It will return the first element which satisfies that condition.
let nums8 = [20, 140, 90, 45, 30];
let res8 = nums8.find((el, i)=>{
    return el%2 !== 0;
})
console.log(res8); // O/P-> 45

//! 22. some(callback function)
// It will return a boolean value.
// We have to return a condition from the callback function.
// It returns true if any of the element in the Array satisfies the condition.
let nums9 = [20, 141, 90, 46, 30];
let res9 = nums9.some((el, i)=>{
    console.log("executing for", i+1); 
//  executing for 1
// executing for 2
    return el%2 !== 0;
})
console.log(res9); // true -- only due to element 141 which is el%2!== 0.

//! 23. every(callback Fn...)
// It will return true if all the elements of the Array satisfies the condition, otherwise false.
let nums10 = [20, 140, 90, 46, 30];
let res10 = nums10.every((el, i)=>{
    console.log("executing for", i+1);
// executing for 1
// executing for 2
// executing for 3
// executing for 4
// executing for 5
    return el%2 === 0;
})
console.log(res10); // true


//!1. remove the duplicates from the array
let nums11 = [10 , 20 , 30 , 40 , 30 , 10];
let res11 = nums11.filter((el , i)=>{
    return nums11.indexOf(el) == i;
})
console.log(res11);



//! 2. capitalize all the names
let names1 = ["rajat" , "rahul" , "pranav" , "atul" , "rites"]
let updated = names1.map((el)=>{
    return el.charAt(0).toUpperCase()+el.slice(1)
})
console.log(updated);

//! 3. check if a string is palindrome or not
let str3  = "Touseef"
let str4  = "Akram"

//! 4. check if two strings are anagram or not 
//  ten/net, two/tow, three/there , add/dad

function isAnagram(str1 , str2){
    if(str1.length !== str2.length){
        return false
    }
    else{
        return str1.split('').sort().join('') == str2.split('').sort().join('')
    }
}
console.log(isAnagram('three' , 'there'));

// ! 5. remove duplicates 2
let nums12 = [10 , 20 , 30 , 40 , 30 , 10];
let res12 = []
nums12.forEach((el , i)=>{
      if(!res12.includes(el)){
        res12.push(el)
      }
})
console.log(res12);
