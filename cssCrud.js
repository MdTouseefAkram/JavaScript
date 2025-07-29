let body = document.body;
for(let i = 0; i<100; i++){
    let btn = document.createElement('button');
    btn.innerHTML = `button${i}`;
    btn.style.cssText = `padding:10px 20px; background-color:${randomColor()}`;
    body.appendChild(btn);
}
function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

let rubics = document.createElement('section');
rubics.style.cssText = "height:500px; width:500px; border:2px solid black; margin:auto; display:flex; flex-wrap: wrap";
body.appendChild(rubics);

for(let i = 0; i<9; i++){
    let box = document.createElement('div');
    box.style.cssText = `height:33%; flex-grow; width:33%; border:1px solid; background-color:${randomColor()}`
    rubics.appendChild(box);
}



let section = document.createElement('section')

//! 100 buttons
for(let i = 0; i<100; i++){
    let btn = document.createElement('button');
    btn.innerText = `button${i}`; // It also comes in 1st step.
    btn.style.cssText = `padding:10px 20px; background-color:${randomColor()}`
    body.appendChild(btn);

}

function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}

//! 3. CRUD operation on CSS Styles.

// ! we will use element.style to perform crud over style attribute 
// ! create
// ! 1. setProperty('propertyName' , 'value')
// ! 2. propertyName = ""
// ! 3. cssText = ""

// ! 2. propertyName
section.style.height = "200px"
section.style.width = "200px";
section.style.backgroundColor = "red";
// let body = document.body;
body.appendChild(section)
section.style.setProperty('border' , '2px solid black')


//! cssText
//  it will override the previous value of style attribute with the new value
section.style.cssText += "border-radius:50%"
// section.style.cssText += "height:100px; width:100px; background:blue"

// ! Read 
// getPropertyValue('propertyName')
console.log(section.style.getPropertyValue('background-color'));
console.log(section.style.getPropertyValue('height'));
console.log(section.style.height) //Same as above only in case , if heigth property is written in inline css only because .style only reflects inline styles.

// ! delete
section.style.removeProperty('border-radius');
let section = document.createElement('section')


// ! we will use element.style to perform crud over style attribute 
// ! create
// ! 1. setProperty('propertyName' , 'value')
// ! 2. propertyName = ""
// ! 3. cssText = ""

// ! 2. propertyName
section.style.height = "200px"
section.style.width = "200px";
section.style.backgroundColor = "red";
// let body = document.body;
body.appendChild(section)
section.style.setProperty('border' , '2px solid black')


//! cssText
//  it will override the previous value of style attribute with the new value
section.style.cssText += "border-radius:50%"
// section.style.cssText += "height:100px; width:100px; background:blue"

// ! Read 
// getPropertyValue('propertyName')
console.log(section.style.getPropertyValue('background-color'));
console.log(section.style.getPropertyValue('height'));

// ! delete
section.style.removeProperty('border-radius')



//self -- but not recommended. Go through codes and notes.
//! CRUD operations (summary)
//we can perform CRUD operations on HTML Elements, HTML attributes and inline style.

//! 1. CRUD operation on HTML Element.
//create
//! createElement('tag')
//syntax - let elementVaribaleName = document.createElement('elementName')

//! append(content or node)/ appendChild(node)
// syntax - parent.append("This is text" or div) or parent.appendChild(div) // parent is element.

//!prepend()

//read
//DOM selector methods (eg - querySelector(), etc)

//update
//!innerText
// syntax - selector.innerText = "content"; //selector is tag element name or created element tag name like para1 which is cerated like para1 = document.CreateELement('div').

//!innerHTML
//syntax - selector.innerHTML =  "content";

//!textContent

//replaceChild()

//delete
//remove()
//removeChild()

//!
//! 2. CRUD operation on HTML Attribute.
//create
//! setAttribute()
//syntax -  selectorAttribute("attributename", "attribute value"); 
// div.setAttribute("id", "demo")

//read
//getAttribute()

//update
//setAttribute()

//delete
//removeAttribute()

//!
//! 3. CRUD operation on CSS Styles.
//create
//! setProperty()
// syntax - selector.style.setProperty("PropertyName", "property-value")
// div.style.setProperty("font-size", "40px");

//propertyName
//cssText

//read
//getProperty()

//update
//setProperty()
//propertyName
//cssText

//delete
//removeProperty

//! we can pass any cssSelector in fetching the element like document.querySelecor(anyCssSelector) -- This is also a part of CRUD operation in read in CRUD on HTML Element .it is a part of DOM selectors.