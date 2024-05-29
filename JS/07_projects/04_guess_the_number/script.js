let randomnumber = parseInt(Math.random() * 100 + 1);

const userinput = document.querySelector('#guessfield');
const submit = document.querySelector('#subt');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');

const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter numbr less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, Actual number was : ${randomnumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomnumber) {
        displayMessage(`Yoy won! you guessesd it right.`);
        endGame();
    } else if (guess > randomnumber) {
        displayMessage(`The number is too High`);
    } else if (guess < randomnumber) {
        displayMessage(`The number is too Low`);
    }
}

function displayGuess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<input type="submit" value="Start New Game" id="newsubt" style=" color: black; margin: auto; margin-top: 15px; width: 9vw; padding: 5px; font-weight: 600; border-radius: 5px;">`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newbtn = document.querySelector('#newsubt');
    newbtn.addEventListener('click', function (e) {
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

