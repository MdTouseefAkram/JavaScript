console.dir(document);
console.dir(document.body.children[1].children[0].textContent);
document.body.children[1].children[0].textContent = "Akshay"

console.dir(document.all);




//! DOM

console.dir(document);
console.dir(document.body.children[1].children[0].textContent);
document.body.children[1].children[0].textContent = "Akshay"

console.dir(document.all);

//! 1. CRUD operations on HTML Elements.

//! Read (DOM Selector Methods)
//! 1. getElementById('id')
//getElementById will return a single HTMLElement Node with the matching id
//if multiple elements are having same id , it will select the first matching element with that 
let h = document.getElementById('demo')
console.log(h);

//!2. getElementsByTagName('tag')
// it will return a collection of HTML elements as an array like object (HTMLCollection)
// but that is not an array , we cannot use array methods on it
let allh = document.getElementsByTagName('h1')
console.log(allh); //HTMLCollection(4) [h1, h1#demo, h1, h1, demo: h1#demo]
allh.pop()
//! Traditional loops we can use
for(let el of allh1){
    console.log(el);
}
//! we can use indexing to access the elements from the HTMLCollection
console.log(allh1[0]); //


//!3. getElementsByClassName('class');
// it will also return HTMLCollection which is an array like object
let evens = document.getElementsByClassName('even')
console.log(evens);

//! 4. getElementsByName('name')
let r = document.getElementsByName('r');
console.log(r);

//!5. querySelector('anyCSSSelector')
// querySelector is the advance dom selector method , here we can pass any css selector as the argument ,
// it will return the first matching htmlelement node with matching selector

let res = document.querySelector('#demo')
let res1 = document.querySelector('.even')
let res2 = document.querySelector('h1')
console.log(res1);
console.log(res2);

//!6. querySelectorAll('anyCSSSelector')
// ! it will target all the matching elements with the selector
// it will return nodeList
let allh1 = document.querySelectorAll('h1')
let allDiv = document.querySelectorAll('div')
let allEven = document.querySelectorAll('.even')
console.log(allh1);
console.log(allDiv);
console.log(allEven);

//! Update the HTML Elements 
//! 1.textContent //2.innerText //3. innerHTML

//! textContent will only return the text content , it will not return the html elements. 
// it will preserne the space as that of writtent in html file

let para1 = document.querySelector('.para')
console.log(para1.textContent); 

//! 2.innerText
// innerText will return whatever is displayed on the UI(screen)
console.log(para.innerText);

//!3. innerHTML
console.log(para.innerHTML);

let para = document.querySelector('.para')
para.innerText = "<b>Hey hii hello</b>"
para.textContent = "<b>Hey  this is textContent</b>"
para.innerHTML = "<b>Hey  this is innerHTML</b>"

let ul1 = `<ul type="circle">
        <li>Potato</li>
        <li>Tomato</li>
        <li>Carrot</li>
        <li>LadyFinger</li>
    </ul>`
let body1 = document.body;
body1.innerHTML += ul1;
let table = ` <table border="">
        <tr>
            <td>data-1</td>
            <td>data-2</td>
            <td>data-3</td>
            <td>data-4</td>
        </tr>
        <tr>
            <td>data-1</td>
            <td>data-2</td>
            <td>data-3</td>
            <td>data-4</td>
        </tr>
        <tr>
            <td>data-1</td>
            <td>data-2</td>
            <td>data-3</td>
            <td>data-4</td>
        </tr>
        <tr>
            <td>data-1</td>
            <td>data-2</td>
            <td>data-3</td>
            <td>data-4</td>
        </tr>
    </table>`
body.innerHTML += table;
body.innerHTML += "This is updated value"

//! create 
//! 1.createElement('tag')
//create element is used to create an HTMLElementNode
let div = document.createElement('div'); // elementNode
div.innerText = "Hey i am div created using js"
let body2 =document.body;
//! append() , appendChild()
// ! append can accept a text node as well as an element node
// appendChild can only accept an html element node
body.append('Hey i am append'); // it can accept the text node as the argument
body.append(div); // it can accept the element node as well

body.appendChild('Hey appendChild') // error we cannot pass text node to appendChild
let p = document.createElement('p')
p.innerText = 'i am para'
body.appendChild(p) // it can only accept HtmlElementNode

//! prepend()
//prepend will add the element at the begining
let p = document.createElement('p')
p.innerText = 'i am para'
body.prepend(p)

//! Proficle card code
let section = document.createElement('section')
let body = document.body;
body.appendChild(section);
let img = document.createElement('img')

img.src = "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
section.appendChild(img)

let h2 = document.createElement('h2')
h2.innerText = 'Akshay'
section.appendChild(h2)
let p = document.createElement('p');
p.innerText = `Hey this is akshay , in tempora earum repellendus illum quod tempore. Itaque, incidunt veniam? Natus cupiditate obcaecati fugit nesciunt placeat ut similique inventore accusantium deserunt rem?
    Quos deleniti autem repudiandae dolor, architecto, iure non exercitationem aspernatur magnam laborum nemo vero maxime libero labore ducimus et pariatur praesentium at deserunt esse unde ab minus. Incidunt, reprehenderit sed.
    Corporis, hic. Sequi possimus animi magni esse`
section.appendChild(p)

//! Delete 
//! 1. element.remove()
//! 2. parent.removeChild(childNode)
let ul2 = document.querySelector('ul')
console.log(ul2); //! In HTML elements CRUD operations->  Node or element name might be different. like ul2 or.. becoz tag is created by JS and ul2 is a variable in which ul tag is there and using ul2 varible which we perform remove , append, prepend operation in body.
let li = document.querySelector('.four')
ul2.removeChild(li)
let first = document.querySelector('.first')
first.remove()



//! 2. CRUD Over HTML Attributes.

//!create / update
//! 1. element.setAttribute('attrName' , 'value' )
let ul = document.querySelector('ul') 
ul.setAttribute('type' , 'square') // updating //! ul is selector varible name in which ul tag is there , where we set the attribute. This is second step after creation of element and then setting attribute then we add css.

//! Read 
//! 1. getAttribute('attrName')
console.log(ul.getAttribute('type'));
console.log(ul.getAttribute('id'));
ul.setAttribute('class' , 'two')
console.log(ul.getAttribute('class'));

//! Delete
ul.removeAttribute('id')
ul.removeAttribute('class')

// ! creating a table from the array of objects
let table1 = document.createElement('table')
table.setAttribute('class' , 'border center collapse')
let body3 = document.body;
body3.appendChild(table1)

const cricketPlayers = [
  {
    name: "Virat Kohli",
    jerseyNo: 18,
    ipTeam: "Royal Challengers Bangalore",
    innings: 245
  },
  {
    name: "MS Dhoni",
    jerseyNo: 7,
    ipTeam: "Chennai Super Kings",
    innings: 220
  },
  {
    name: "Rohit Sharma",
    jerseyNo: 45,
    ipTeam: "Mumbai Indians",
    innings: 245
  },
  {
    name: "KL Rahul",
    jerseyNo: 1,
    ipTeam: "Lucknow Super Giants",
    innings: 110
  },
  {
    name: "Shubman Gill",
    jerseyNo: 77,
    ipTeam: "Gujarat Titans",
    innings: 70
  },
  {
    name: "Hardik Pandya",
    jerseyNo: 33,
    ipTeam: "Mumbai Indians",
    innings: 120
  },
  {
    name: "Ruturaj Gaikwad",
    jerseyNo: 31,
    ipTeam: "Chennai Super Kings",
    innings: 50
  },
  {
    name: "Sanju Samson",
    jerseyNo: 9,
    ipTeam: "Rajasthan Royals",
    innings: 140
  },
  {
    name: "David Warner",
    jerseyNo: 31,
    ipTeam: "Delhi Capitals",
    innings: 160
  },
  {
    name: "Andre Russell",
    jerseyNo: 12,
    ipTeam: "Kolkata Knight Riders",
    innings: 110
  },
    {
    name: "Virat Kohli",
    jerseyNo: 18,
    ipTeam: "Royal Challengers Bangalore",
    innings: 245
  },
  {
    name: "MS Dhoni",
    jerseyNo: 7,
    ipTeam: "Chennai Super Kings",
    innings: 220
  },
  {
    name: "Rohit Sharma",
    jerseyNo: 45,
    ipTeam: "Mumbai Indians",
    innings: 245
  },
  {
    name: "KL Rahul",
    jerseyNo: 1,
    ipTeam: "Lucknow Super Giants",
    innings: 110
  },
  {
    name: "Shubman Gill",
    jerseyNo: 77,
    ipTeam: "Gujarat Titans",
    innings: 70
  },
  {
    name: "Hardik Pandya",
    jerseyNo: 33,
    ipTeam: "Mumbai Indians",
    innings: 120
  },
  {
    name: "Ruturaj Gaikwad",
    jerseyNo: 31,
    ipTeam: "Chennai Super Kings",
    innings: 50
  },
  {
    name: "Sanju Samson",
    jerseyNo: 9,
    ipTeam: "Rajasthan Royals",
    innings: 140
  },
  {
    name: "David Warner",
    jerseyNo: 31,
    ipTeam: "Delhi Capitals",
    innings: 160
  },
  {
    name: "Andre Russell",
    jerseyNo: 12,
    ipTeam: "Kolkata Knight Riders",
    innings: 110
  }
];

let tr1 = document.createElement('tr')
let th1 = document.createElement('th')
th1.innerText = 'Name'
th1.setAttribute('class' , 'border')
let th2 = document.createElement('th')
th2.innerText = 'JNO'
th2.setAttribute('class' , 'border')

let th3 = document.createElement('th')
th3.innerText = 'IPL Team'
th3.setAttribute('class' , 'border')

let th4 = document.createElement('th')
th4.innerText = 'Innings'
th4.setAttribute('class' , 'border')

tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)
table.appendChild(tr1)

cricketPlayers.forEach((el , i)=>{
    let tr = document.createElement('tr');
    if(i%2!==0){
        tr.setAttribute('class' , 'orange')
    }
    else{
        tr.setAttribute('class' , 'yellow')
    }
    table1.appendChild(tr);
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    td1.innerText = el.name
    td2.innerText = el.jerseyNo
    td3.innerText = el.ipTeam
    td4.innerText = el.innings
    td1.setAttribute('class' , 'border')
    td2.setAttribute('class' , 'border')
    td3.setAttribute('class' , 'border')
    td4.setAttribute('class' , 'border')
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
})


const vegetables = [
  "Carrot",
  "Potato",
  "Tomato",
  "Spinach",
  "Broccoli",
  "Cauliflower",
  "Cabbage",
  "Green Beans",
  "Onion",
  "Garlic",
  "Peas",
  "Pumpkin",
  "Radish",
  "Cucumber",
  "Zucchini",
  "Beetroot",
  "Eggplant",
  "Capsicum",
  "Sweet Corn",
  "Bitter Gourd"
];


const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Mango",
  "Pineapple",
  "Papaya",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Kiwi",
  "Pomegranate",
  "Guava",
  "Pear",
  "Peach",
  "Plum",
  "Cherry",
  "Lychee",
  "Dragon Fruit",
  "Custard Apple"
];

const groceryItems = [
  "Rice",
  "Wheat Flour",
  "Sugar",
  "Salt",
  "Cooking Oil",
  "Lentils (Toor Dal)",
  "Chickpeas",
  "Black Beans",
  "Oats",
  "Tea",
  "Coffee",
  "Milk Powder",
  "Spaghetti",
  "Canned Tomatoes",
  "Breakfast Cereal",
  "Peanut Butter",
  "Jam",
  "Baking Powder",
  "Soy Sauce",
  "Vinegar"
];


let body4 = document.body;
// ! fruitList
let fruitList = document.createElement('ol');
fruits.forEach((el , i)=>{
    let li = document.createElement('li');
    fruitList.appendChild(li)
    li.innerText = el;
})
body4.appendChild(fruitList)

// ! fruitList
let vegList = document.createElement('ol');
vegetables.forEach((el , i)=>{
    let li = document.createElement('li');
    if(i%2!==0){
        li.setAttribute('class' , 'orange')
    }
    else{
        li.setAttribute('class' , 'yellow')
        
    }
    vegList.appendChild(li)
    li.innerText = el;
})
body.appendChild(vegList)