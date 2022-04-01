let squareWidth; 
let squareAmount;
let drawing = false;
let squaresGenerated = "false"; // checks if canvas is empty

const canvas = document.querySelector('#etch_a_sketch'); 
let square; // each empty square created when a number is provided
const reset = document.querySelector('button'); // the button

const density = document.querySelector('h1');


function calculateSquares() {
        squareWidth = prompt('Insert a number between 2 and a 100!', 2); // decides how many grinds there will be from 2 to 100
        if (squareWidth > 100) {
            squareWidth = prompt('Apologies, needs to be lower than 100', 2);
        } else if (squareWidth < 2) {
            squareWidth = prompt('Apologies, needs to be more than 2', 2);
        }

        for (i = 1; i <= squareWidth; i++) {
            squareAmount = squareWidth * squareWidth;
        } 

        density.textContent = `Density: ${squareWidth} x ${squareWidth}`;
}

function placeSquares() {

    x = (600 / squareWidth) + `px`; // Adjusts the width of each square to the main div
    y = x; // Adjusts the height of each square to the main div
    

    for (j = 1; j <= squareAmount; j++) {
        square = document.createElement('div');
        square.classList.add('each_square');
        square.style.backgroundColor = 'white';
        square.style.width = x;
        square.style.height = y;
        canvas.appendChild(square);
    }

    const colorButton = document.querySelector('#color_squares');
    colorButton.addEventListener('click', function() {
        drawColorSquares();
    })

    const grayButton = document.querySelector('#gray_squares');
    grayButton.addEventListener('click', function() {
        drawSquares();
    })
    
}; // closes placeSquares function

function drawSquares() { // only draws after click, doesn't stop (yet)
    
    const squares = document.querySelectorAll('.each_square'); 
    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            drawing = true;
            if (drawing == true) {
                square.style.backgroundColor = 'grey';
                squares.forEach((square) => {
                    square.addEventListener('mouseover', () => {
                        square.style.backgroundColor = 'grey';
                    });
                }); // cloused forEach in the if clause
            }; // clauses the if clause
        }); // mousedown eventlistener
    }); // closes the main forEach square
}; // Closes drawSquares

function drawColorSquares() {
    let RGBColor1;
    let RGBColor2;
    let RGBColor3;

    let darkeningSquares;

        const colorSquares = document.querySelectorAll('.each_square');
        colorSquares.forEach((square) => {
            square.addEventListener('mousedown', function(){
                drawing = true;
                RGBColor1 = Math.floor(Math.random() * 255) + 1;
                RGBColor2 = Math.floor(Math.random() * 255) + 1;
                RGBColor3 = Math.floor(Math.random() * 255) + 1;
                if(drawing === true) {
                   square.style.backgroundColor = `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;
                    colorSquares.forEach((square) => {
                            square.addEventListener('mouseover', () => {
                                    RGBColor1 = Math.floor(Math.random() * 255) + 1;
                                    RGBColor2 = Math.floor(Math.random() * 255) + 1;
                                    RGBColor3 = Math.floor(Math.random() * 255) + 1;

                                    for (let i = 0; i < 50; i++) {
                                        console.log(`${RGBColor1},${RGBColor2},${RGBColor3}`);
                                        RGBColor1 = RGBColor1 - 15; // it changes to 5, why?
                                        RGBColor2 = RGBColor2 - 15;
                                        RGBColor3 = RGBColor3 - 15;
                                        square.style.backgroundColor = `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;
                                    }
                            });
                    });
                }
            })
        })
}


function restartGame() { 


        reset.addEventListener ('click', function() {
            if (squaresGenerated === "true") {
                const allSquares = document.querySelectorAll('.each_square');
                allSquares.forEach ((square) => {
                    square.parentNode.removeChild(square);
                });
                squaresGenerated = "false";
             //   i++;
            } else if  (squaresGenerated === "false") {
                squaresGenerated = "true"; 
                calculateSquares();
                placeSquares();
            }
        })    
    
};

restartGame();


