
// So you need to create an if statement where each iteration
// creates another squares. It must be squared - so e.g.
// [3 * 3 * 3] or [4 * 4 * 4 *4] ,etc.
// Start with 16 x 16 (16 times).

// Maybe if? if there is 16 iterations, there will be 
// a new power added to the result and create new divs each time

// weneed to base ourself on <power>, each iteration
// will give us number of squares <variable> multiplied by
// the same number

let squareWidth = 16; // narazie, potem x
let squareAmount;

function calculateSquares() {
    
        for (i = 1; i <= 16; i++) {
            squareAmount = squareWidth * squareWidth;
        } 
}

calculateSquares();

function placeSquares() {
    x = (800 / squareWidth) + `px`; // Adjusts the width of each square to the main div
    y = x; // Addjusts the height of each square to the main div

    for (j = 1; j <= squareAmount; j++) {
        const backgroundSquares = document.querySelector('#etch_a_sketch'); 
        const square = document.createElement('div');
        square.classList.add('each_square');
        square.style.backgroundColor = 'blue';
        square.style.width = x;
        square.style.height = y;
        backgroundSquares.appendChild(square);
    }
}

placeSquares();

console.log(squareAmount);

// kwadraty musza sie pomniejszac, np 800px bedzie kwadrat glowny wiec jak jest 16 to bedzie
// 800 / 16 = 50px na kwadrat,