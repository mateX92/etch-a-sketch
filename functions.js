let squareWidth; 
let squareAmount;

function calculateSquares() {
        squareWidth = prompt('Insert a number!', 2); // decides how many grinds there will be from 2 to 100
        if (squareWidth > 100) {
            squareWidth = prompt('Apologies, needs to be lower than 100', 2);
        } else if (squareWidth < 2) {
            squareWidth = prompt('Apologies, needs to be more than 2', 2);
        }

        for (i = 1; i <= squareWidth; i++) {
            squareAmount = squareWidth * squareWidth;
        } 
}

function placeSquares() {
    x = (800 / squareWidth) + `px`; // Adjusts the width of each square to the main div
    y = x; // Addjusts the height of each square to the main div
    let square;
    const backgroundSquares = document.querySelector('#etch_a_sketch'); 

    for (j = 1; j <= squareAmount; j++) {
        square = document.createElement('div');
        square.classList.add('each_square');
        square.style.backgroundColor = 'white';
        square.style.width = x;
        square.style.height = y;
        backgroundSquares.appendChild(square);
    }

    const squares = document.querySelectorAll('.each_square'); // selects squares built in the loop 
    // (it's accessible as we defined the square before the loop)
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
          square.style.backgroundColor = 'grey';
        });
      });
    }

function startGame() {
    const reset = document.querySelector('button');
      reset.addEventListener ('click', function() {
          calculateSquares();
          placeSquares();
      })
};


startGame();


console.log(squareAmount);