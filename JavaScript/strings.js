//! Strings

//! Ways to create String
//! By using literals
// a. ''
// b. " "
// c. ` `
let s1 = 'Hello'; //! Primitive String
let s2 = "Hello";
let s3 = `Hello
            Hii`;

console.log(s1 == s1); //true
console.log(s1 === s2); //true
console.log(s3); //print as same with spaces as written in s3 because of using backticks.
//! By using constructor function
//! In case of Non Primitive Strings, it compare refrences address, not values.
let s4 = new String('Hello');
let s5 = new String('Hello');
console.log(s4); //object-> [String: 'Hello']

console.log(s4 == s5); //false , beacuse reference address is diffrent of both objects.
console.log(s1 == s4); //! true, when compare primitive with non primitive,, then non non primitive converts to primitive datatype.
console.log(s1 === s4); //false, type conversion in not allowed in ===. so non primitve not converted to primitive datatype.
console.log("Hello");
console.log(' ' == " "); //true
console.log(' ' == true); // false -> ' ' has one space within ' ', it convert to 0. 0 == 1 -> false
console.log(!' ' == false); // true
console.log(' ' == false-1); //false
console.log('' === true-1); //false

console.log([] == false); //true
console.log([1] == '1'); //true
console.log([1] == 1); //true

//! Day 2
let username = "Hritik";
console.log(username);

//! 1. toUpperCase()
// It will convert all the letters to uupercase.
console.log(username.toUpperCase);

//! 2. toLowerCase()
// It will convert all the letters to lowercase.
console.log(username.toLowerCase);

//! 3. trimStart()
// It will remove extra identation from the beginining of String.
let str = "           JavaScript          ";
console.log(str.length);
let str1 = str.trimStart();
console.log(str1.length);

//! 4. trimEnd()
// It will remove extra identation from the end of the String.
console.log(str.trimEnd().length);

//! 5. trim()
// It will remove extra identation from the begining as well from end of the String.
console.log(str);
console.log(str.length);
let str3 = str.trim();
console.log(str3);
console.log(str3.length);

//! 6. replace('substr' , 'newsubstr')
// It will replace the first occurence of the substring with the new substring.
let str4 = "Hey Hii Are You ?";
console.log(str4);
let newstr = str.replace('H' , 'K');
console.log(newstr);

//! 7. replaceAll('substr', 'newsubstr')
// It will replace the all occurrences of the specified substring with the new substring.
let str5 = "Hii Hii Hii How Are You ?";
let newstr1 = str5.replaceAll('Hii', 'Bye');
console.log(newstr1);

//! 8. slice(starting index, ending index)
// It will return a substring
// It will exclude the ending index
// It supports negative indexing [Note- -ve index start from last index as -1]
let str6 = 'JavaScript';
let str7 = str6.slice(0, 4);
console.log(str7);

let str8 = str6.slice(4); //starting index = 4 and ending index is last index (n-1).
console.log(str8); // script

let str9 = str6.slice(-6, -3);
console.log(str9); // src

let inp = prompt("enter your name");
let str10 = inp[0].toUpperCase() + inp.slice(1).toLowerCase();
console.log(str10);

let str11 = "We are living in india";
let word = "";
for(let i = 0; i<str11.length; i++){
    if (str11[i] !== ' '){
        word += str11[i];
    } else{
        console.log(word);
        word = "";
    }
}
console.log(word);

//! 9. split('splitter')
// split will return the output as an Array.
// It will split all the letters if we pass splitter as ''
// It will split all the words if we pass the splitter as ' '

let str12 = "We are living in india";
let str13 = "javascript";
console.log(str12.split('')); //['W', 'e', ' ', 'a', 'r', 'e', ' ', 'l', 
// 'i', 'v', 'i', 'n', 'g', ' ', 'i', 'n', ' ', 'i', 'n', 'd', 'i', 'a']0: 
// "W"1: "e"2: " "3: "a"4: "r"5: "e"6: " "7: "l"8: "i"9: "v"10: "i"11: "n"12: 
// "g"13: " "14: "i"15: "n"16: " "17: "i"18: "n"19: "d"20: "i"21: "a" ]

console.log(str12.split(' ')); //['We', 'are', 'living', 'in', 'india']
console.log(str13.split('a')); // ['j', 'v', 'script']

//! Converting every word of an String to Capitalize.
let words = str12.split(' '); // ['We', 'are', 'living', 'in', 'india']
console.log(words);

for(let i = 0; i<words.length; i++){
    words[i] = toCapitalize(words[i]);
}
// function for capitalize
function toCapitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(words); //['We', 'Are', 'Living', 'In', 'India']
let str14 = "";

for(let i = 0; i<words.length; i++){
    str14 = str14 + words[i] + ' ';
}
console.log(str14); //We Are Living In India

//! Converting all the words of a sentence to Capitalize.

function toCapitalizeWord(word){ //dont confuse in word or words , in JS dynamiclly typed , no need to write like this String word. Here word is parameter for function which is not dependent on word= "" , declare in above.
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

let str15 = "We are living in india";
let words1 = str15.split(' ');
console.log(words1); //['We', 'are', 'living', 'in', 'india']

for(let i = 0; i<words1.length; i++){
    words1[i] = toCapitalizeWord(words1[i]);
}
console.log(words1.toString());// comma will come after each word in sentence.
console.log(words1.join(' ')); //spcae will come after each words in sentence because we pass ' ' as argument. -> So better approach.

//! reverse the word in a string 
//! reverse the characters of a string
//! reverse the position of the words in a string

//! Day 3
//! split()

//! substring(starting index, ending index)
// It is same as that of slice but it does not accept negative indexing.
// It will treat negative values as 0.
let str16 = 'javascripta';
console.log(str.substring(-2,4));

//! indexOf('char')
// indexOf will return the index of the first occurence of a character.
console.log(str16.indexOf('a'));

//! lastIndexOf('char')
// lastIndexOf will return the index of the last occurence of a character.
console.log(str16.lastIndexOf('a'));

//! charAt(index)
// It will return the character present at a particular index.
console.log(str16.charAt(0)); //j

//! str.concat(str1, str2, ...strn)
let firstname = "Md";
let middlename = "Touseef";
let lastname = "Akram";
console.log(firstname + " " + middlename + " " + lastname);
let res = firstname.concat(" ", middlename, " ", lastname);
console.log(res);

//! endsWith
let str17 = "javascript";
console.log(str17.endsWith('y')); //false
console.log(str17.endsWith('t')); // true

//! startsWith
console.log(str17.startsWith('j')); // true
console.log(str17.startsWith('k')); //false

//! includes
// It return true or false based on if a character is present in the String or not.
console.log(str17.includes('a')); //true
console.log(str17.includes('b')); //false

//! charCodeAt(index)
// It will return ASCII value of character present at a particular index.
let str18 = "abcdef";
console.log(str18.charCodeAt(1)); //98
console.log(str18.charCodeAt(0)); //97

//! String.fromCharCode()
// It will convert the ASCII value to character.
console.log(String.fromCharCode(65));

//! 1. create a function to identify if a word is starting with vowels or not

// This way is not recommended.
function startsWithVowel(word){
    return word[0].toLowerCase().startsWith('a'||'e'||'i'||'o'||'u');
}
let username1 = prompt('Enter your name'); //'Touseef' if enter
console.log(startsWithVowel(username1)); //false , because Touseef start with 'T' which is not vowel. 

//! Another way

function startsWithVowel2(word){
    return "aeiou".includes(word[0].toLowerCase()); //! "aeiou".includes(...) checks whether that character is a vowel.
}
console.log(startsWithVowel2(username1)); //'Touseef' if enter then false, because Touseef start with 'T' which is not vowel. 

//! 2. create a function to count the number of vowels in a string.

function countVowels(str){
    let count = 0;
    for(let i = 0;i<str.length; i++){
        if("aeiou".includes(str[i].toLowerCase())); //means it vowel
        count++;
    }
    return count;
}
console.log(countVowels('Touseef'));
//! 3. create a function to count the number of consonants in a string.

function countConsonants(str){
    let count = 0;
    for(let i= 0; i<str.length; i++){
        if(!("aeiou".includes(str[i].toLowerCase()))); //means consonants
        count++;
    }
    return count;
}
console.log(countConsonants("touseef"));

//! easy way to count vowels and consonansts.
let str19 = 'aabbccaaff'
console.log(`No of vowels in ${str19} are ${countVowels(str19)}`);
console.log(`No of consonants is ${str19} are ${str19.length - countVowels(str19)}`);
