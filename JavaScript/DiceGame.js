
// ! Dice Game
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

