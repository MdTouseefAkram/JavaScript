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
    btn.innerText = `button${i}`;
    btn.style,cssText = `padding:10px 20px; background-color:${randomColor()}`
    body.appendChild(btn);

}

function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}

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
