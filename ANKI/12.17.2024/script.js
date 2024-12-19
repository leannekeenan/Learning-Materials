const date = new Date()
let dateObject = document.createElement("p")
let formattedDate = date.toDateString();

let q1 = document.createElement("p")
let response = document.createElement("p")
let a1 = document.createElement("p")


q1.innerText = 'Rock Paper Scissors - write a function to imulate the game returning a winner or a draw when a tie occurs'

//define the function game which accepts a single parameter for the user players value
let game = (player) => {
    //define the options that can be choosen in the game 
    let options = ['rock', 'paper', 'scissor']
    //define the computers randomized choice by selecting whole numbers from 0 to the length of the options available to choose from in the game
    let comp = options[Math.floor(Math.random() * options.length)];
    //define what happens if the players parameter matches the randomized computer choice
    if(player === comp) {
        return { player, comp, result: 'tie'}
     }
     //define all possible scenarios of the player winning and define the return response
     else if (
       ( player === 'rock' && comp === 'scissor' )|| 
        (player === 'scissor' && comp === 'paper') || 
        (player === 'paper' && comp === 'rock')) {
            return {  player, comp, result: "player wins"}
     }
     //return a scenario where the computer wins if the previous are not met
     else {
        return {player, comp, result: 'computer wins'}
     }
    
};
//define a variable that holds the function game(), which in turn holds the value for the players option choice
let result = game("scissor");

//print to the page element a1 the value of the players option choice variable, and the computers option choice, and the final result of the game to determine a winner. 
a1.innerText = `Player chose ${result.player}, Computer chose ${result.comp}: ${result.result}`;
response.innerText = `
//define the function "game" which accepts a single parameter for the user players value
let game = (player) => {

    //define the options that can be choosen in the game 
    let options = ['rock', 'paper', 'scissor']

    //define the computers randomized choice by selecting whole numbers from 0 to the length of the options available to choose from in the game
    let comp = options[Math.floor(Math.random() * options.length)];

    //define what happens if the players parameter matches the randomized computer choice
    if(player === comp) {
        return { player, comp, result: 'tie'}
     }

     //define all possible scenarios of the player winning and define the return response
     else if (
       ( player === 'rock' && comp === 'scissor' )|| 
        (player === 'scissor' && comp === 'paper') || 
        (player === 'paper' && comp === 'rock')) {
            return {  player, comp, result: "player wins"}
     }

     //return a scenario where the computer wins if the previous are not met
     else {
        return {player, comp, result: 'computer wins'}
     }
    
};

//define a variable that holds the function game(), which in turn holds the value for the players option choice
let result = game("scissor");

//print to the page element a1 the value of the players option choice variable, and the computers option choice, and the final result of the game to determine a winner. 
};

`


dateObject.innerText = `${formattedDate}`
document.body.appendChild(dateObject)
document.body.appendChild(q1)
document.body.appendChild(response)
document.body.appendChild(a1)
