let q1 = document.createElement("p")
let a1 = document.createElement("p")

let q2 = document.createElement("p")
let a2 = document.createElement("p")

let q3 = document.createElement("p")
let a3 = document.createElement("p")

let q4 = document.createElement("p")
let a4 = document.createElement("p")

let q5 = document.createElement("p")
let a5 = document.createElement("p")




q1.innerText = 'Rock Paper Scissors - write a function to imulate the game returning a winner or a draw when a tie occurs'


let game = (player) => {

    let options = ['rock', 'paper', 'scissor']
    let comp = options[Math.floor(Math.random() * options.length)];

    if(player === comp) {
        return { player, comp, result: 'tie'}
     }
     else if (
       ( player === 'rock' && comp === 'scissor' )|| 
        (player === 'scissor' && comp === 'paper') || 
        (player === 'paper' && comp === 'rock')) {
            return {  player, comp, result: "player wins"}
     }
     else {
        return {player, comp, result: 'computer wins'}
     }
    
};
let result = game("scissor");

a1.innerText = `Player chose ${result.player}, Computer chose ${result.comp}: ${result.result}`;



q2.innerText = ''

a2.innerText = `

`

q3.innerText = ''

a3.innerText = `

`

q4.innerText = ''

a4.innerText = `

`

q5.innerText = ''

a5.innerText = `

`



document.body.appendChild(q1)
document.body.appendChild(a1)


document.body.appendChild(q2)
document.body.appendChild(a2)


document.body.appendChild(q3)
document.body.appendChild(a3)


document.body.appendChild(q4)
document.body.appendChild(a4)


document.body.appendChild(q5)
document.body.appendChild(a5)
