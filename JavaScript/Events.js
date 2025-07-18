// ! Events in Javascript
// ! Mouse Events
// ! click
// ! dblclick
// ! mousemove
// ! mouseover
// ! mouseout
// ! mouseenter

// ! Ways to handle the events
// ! Event attributes

let body = document.body;
let btn  = document.querySelector('.themeBtn')
function fun(){
    console.log("This is function fun"); 
    if(body.style.getPropertyValue('background-color')==='black'){
        btn.innerHTML  = `Dark <i class="fa-solid fa-moon"></i>`
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
    else{
    body.style.backgroundColor = "black"
        body.style.color = "white"
        btn.innerHTML = `Light <i class="fa-solid fa-sun"></i>`
    }

}

// ! whenever we pass the function to any event listener , that function will be called as event handler function
let randomColor = ()=>{
   let r = Math.floor(Math.random()*255)
   let g = Math.floor(Math.random()*255)
   let b = Math.floor(Math.random()*255)
   return `rgb(${r} , ${g} , ${b})`
}
console.log(randomColor());
let randomBtn = document.querySelector('.themeBtn1');
randomBtn.onclick = function randomTheme(){
    body.style.backgroundColor = randomColor()
    body.style.color = randomColor()
}



// ! Dice Game (same as in DiceGame.js)
let rollBtn = document.querySelector('.roll')
let output = document.querySelector('.output')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
function rollDice(){
    let d1 = Math.floor(Math.random()*6)+1;
    let d2 = Math.floor(Math.random()*6)+1;
    output.textContent = d1+d2
    img1.src = `./imgs/dice${d1}.png`
    img2.src = `./imgs/dice${d2}.png`
    if(d1 === d2){
        alert("Game Over")
        rollBtn.disabled = true
    }
}
rollBtn.onclick = rollDice;


//! addEventListener

let btn1 = document.querySelector('.Demo')
btn1.onclick = function(){
    console.log('Demo Function');
    
}
btn.onclick = function(){
    console.log('FUn Function'); 
}
// ! addEventListener('eventName' , callbackFunction , useCapture)
btn.addEventListener('click' , ()=>{
    console.log('FUnction is executed');
})
btn.addEventListener('click' , ()=>{
    console.log('Demo is executed');
})
let body1 = document.body;
let gp = document.querySelector('.gp')
let p = document.querySelector('.p')
let c = document.querySelector('.c')
body1.addEventListener('click' , (e)=>{
    e.stopPropagation()
    console.log('Body is clicked');
} )
gp.addEventListener('click' , (e)=>{
    e.stopPropagation()
    console.log('Gp is clicked');
} )
p.addEventListener('click' , (e)=>{
    e.stopPropagation()
    console.log('p is clicked');
} )
c.addEventListener('click' , (e)=>{
    e.stopPropagation()
    console.log('c is clicked');
} )

// ! whenever useCapture is true the event will be triggered in capturing phase
// ! default value of useCapture is false thats why the event is triggered in bubbling phase by default

// * Event Object
// ! Event object is passed by default as an argument to the event handler function 
// ! Event Object represents the information about the event occur , it has many properties and methods

// ! mouse events
let demo = document.querySelector('.demo')
demo.addEventListener('mousemove' , ()=>{
    console.log('Mouse is moving');
})
demo.addEventListener('mouseenter' , ()=>{
    console.log('Mouse enter');
})
demo.addEventListener('mouseout' , ()=>{
    console.log('Mouse out');
})

// ! keyboard events
// keydown
// keypress
// keyup

let inp = document.querySelector('.inp')
inp.addEventListener('keypress' , (e)=>{
    switch(e.key.toLowerCase()){
        case 'a':{
            console.log('User has pressed a');
            break;
        }
        case 'b':{
            console.log('User has pressed b');
            break;

        }
        case 'c':{
            console.log('User has pressed c');
            break;

        }
        case 'd':{
            console.log('User has pressed d');
            break;

        }
        default :{
            console.log(`User has pressed some random key`);
        }
    }
})
inp.addEventListener('keypress' , ()=>{
    console.log('Key is pressed');
})
inp.addEventListener('keyup' , ()=>{
    console.log('Keyup (key is released)');
})


// ! form events
// ! submit
// ! change
// ! input
let username = document.querySelector('.username')
let pwd = document.querySelector('.password')
let text = document.querySelector('.text')
let form = document.querySelector('.form')
username.addEventListener('input' , (e)=>{
    // console.log('input event');
    // console.log(e.target.value);
    console.log(username.value);
    text.textContent = username.value
})
username.addEventListener('change' , ()=>{
    console.log('change');
    text.textContent = username.value
})

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log(`username is ${username.value}`);
    console.log(`password is ${pwd.value}`);
})
