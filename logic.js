function getComputerChoice() {
    let options = ['Rock','Paper','Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function playRound(playerSelection, computerSelection, score) {
    playerChoice = playerSelection.toLowerCase();
    computerChoice = computerSelection.toLowerCase();

    //Checks if match has been lost
    if ((computerChoice == 'paper' && playerChoice == 'rock')||(computerChoice == 'rock' && playerChoice == 'scissors') || (computerChoice == 'scissors' && playerChoice == 'paper'))  {
        score --;
        return [score, ('You lost! ' + capitalize(computerChoice) + ' beats ' + capitalize(playerChoice) + '!')]
    }

    else if(computerChoice == playerChoice) {
        return [score, ('Tie! Play again!')]
    }

    //Checks if match has been won
    else {
        score ++;
        return [score, ('You won this round! ' + capitalize(playerChoice) + ' beats ' + capitalize(computerChoice) + '!')]
    }
}

function checkInput(input) {
    if ((input.toLowerCase() == 'paper')||(input.toLowerCase() == 'rock')||(input.toLowerCase() == 'scissors')) {
        return true;
    }
    else {
        return false;
    }
}

function insert(text) {
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.textContent = text

    container.appendChild(div);
}

function game() {
    //for (let i = 0; i < 5; i++) {        
        // playerMove = prompt('Rock, Paper, or Scissors?');
        // while(!checkInput(playerMove)){
        //     playerMove = prompt('Rock, Paper, or Scissors?');
        // }
        // opponentMove = getComputerChoice();
        // console.log(playRound(playerMove, opponentMove));
    //}
    let score = 0;

    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        opponentMove = getComputerChoice();
        // console.log(playRound('rock', opponentMove));
        result = playRound('rock', opponentMove, score);
        score = result[0];
        console.log(score);
        document.getElementById("score").innerHTML = score
        insert(result[1]);
    });
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        opponentMove = getComputerChoice();
        // console.log(playRound('paper', opponentMove));
        result = playRound('paper', opponentMove, score);
        score = result[0];
        console.log(score);
        document.getElementById("score").innerHTML = score
        insert(result[1]);
    });
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        opponentMove = getComputerChoice();
        // console.log(playRound('scissors', opponentMove));
        result = playRound('scissors', opponentMove, score);
        score = result[0];
        console.log(score);
        document.getElementById("score").innerHTML = score
        insert(result[1]);
    });

    setInterval(function () {
        if (score >= 5) {
            document.getElementById("score").innerHTML = 'Winner winner chicken dinner'
            rock.removeEventListener('click', )
        }
    }, 1000);
}

game();