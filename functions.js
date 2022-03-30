
const square = document.createElement('div');

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

function placeSquares() {
    let squareAmount;

        for (i = 1; i <= 16; i++) {
            squareAmount = squareWidth * squareWidth;
        }
    
        console.log(squareAmount);
}

placeSquares();