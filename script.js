let moves = ['rock', 'paper', 'scissors'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function computerPlay(list){
    return moves[getRandomInt(0,list.length)];
}
function checkValid(playerMove){
    return moves.includes(playerMove);
}

function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return 'A Draw!';
    };
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'You Lose!  paper beats rock!';
        }else{
            return 'You Win!  rock beats scissors!' ;
        };
    };
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return 'You Lose!  scissors beats paper!';
        }else{
            return 'You Win!  paper beats rock!';
        };
    };
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return 'You Lose!  rock beats scissors!';
        }else{
            return 'You Win!  scissors beats paper!';
        };
    };
};
let el_down = document.getElementById("GFG_DOWN");
let el_ps = document.getElementById("playerScore");
let el_cs = document.getElementById("compScore");
let el_dr = document.getElementById("draws");
let playerScore = 0;
let compScore = 0;
let drawAmt = 0;
function GFG_click(clicked) { 
    let x = clicked; 
    let compMove = computerPlay(moves);
    let op = playRound(compMove, x);
    if(op.includes('Win')){
        playerScore += 1;
    }else if(op.includes('Lose')){
        compScore += 1;
    }else{
        drawAmt += 1;
    }
    el_down.innerHTML = op; 
    
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' +playerScore;
}        
