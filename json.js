let jsonData = `{

    "name": "ABC",
    "age": 30,
    "isMarried": false,
    "data": null,
    "skills": ["HTML", "CSS"],
    "hobby":{}
}`
console.log(jsonData);

//! JSON.parse() //JSON --> JS
// It is used to convert json object into javascript objects.
let jsObject = JSON.parse(jsonData);
console.log(jsObject);

//! JSON.stringify() // JS --> JSON
// It is used to convert js object to json object.
let json2 = JSON.stringify(jsObject);
console.log(json2);