
let drawing = false;

let square; // each empty square created when a number is provided

const reset = document.querySelector('button'); // the Generate/Clear button

const density = document.querySelector('h1'); // main text that provides info on density
const textColor = document.querySelector('h2'); // text regarding Color, appears after grid generates

const colorChoice = document.querySelectorAll('.squares_fill'); // Color choice
colorChoice.forEach((color) => { // sets it to gray for now, later it will be as per CSS (once squares generate);
    color.style.backgroundColor = "gray";
}) 

let squareWidth; // size of each square
let squareAmount; // total amount of squares generated on Canvas

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


const canvas = document.querySelector('#etch_a_sketch'); // the Canvas
let canvasSize = canvas.offsetWidth;

function placeSquares() {

    x = (canvasSize / squareWidth) + `px`; // Adjusts the width of each square to the main div
    y = x; // Adjusts the height of each square to the main div
    

    for (j = 1; j <= squareAmount; j++) {
        square = document.createElement('div');
        square.classList.add('each_square');
        square.style.backgroundColor = 'white';
        square.style.width = x;
        square.style.height = y;
        canvas.appendChild(square);
    }

    // DRAWING COLOR SQUARES IF THE PROPER BUTTON IS CLICKED

    const colorButton = document.querySelector('#color_squares');
    colorButton.addEventListener('click', function() { // adds a text which version of Colors you chose
        drawColorSquares();
        textColor.textContent = "Draw in Color!";
    })

    // DRAWING GRAY SQUARES IF THE PROPER BUTTON IS CLICKED

    const grayButton = document.querySelector('#gray_squares');
    grayButton.addEventListener('click', function() {
        drawSquares();
        textColor.textContent = "Draw in Gray!";
    })
    
}; // closes placeSquares function

function drawSquares() { // only draws after click, doesn't stop (yet)
    
    const squares = document.querySelectorAll('.each_square'); 

    squares.forEach((square) => {
        square.addEventListener('mousedown', function handleMouseDown() {

                drawing = true;
                square.style.backgroundColor = 'grey';

                squares.forEach((square) => {
                    square.addEventListener('mouseover', function handleMouseOver() {
                        if (drawing === true) {
                            square.style.backgroundColor = 'grey';
                        };

                        document.addEventListener('mouseup', () => {
                            drawing = false;
                            square.removeEventListener('mouseover', handleMouseOver);
                        });
                    });
                }); // cloused forEach in the if clause

                document.addEventListener('mouseup', () => {
                    drawing = false;
                    square.removeEventListener('mousedown', handleMouseDown);
                })
        });
    }); // closes the main forEach square
}; // Closes drawSquares

function drawColorSquares() {
    let RGBColor1;
    let RGBColor2;
    let RGBColor3;

    let darkeningSquares;

        const colorSquares = document.querySelectorAll('.each_square');
        colorSquares.forEach((square) => {
            square.addEventListener('mousedown', function handleMouseDownColor() {
                drawing = true;
                RGBColor1 = Math.floor(Math.random() * 255) + 1;
                RGBColor2 = Math.floor(Math.random() * 255) + 1;
                RGBColor3 = Math.floor(Math.random() * 255) + 1;

                square.style.backgroundColor = `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;

                    colorSquares.forEach((square) => {
                            square.addEventListener('mouseover', function handleMouseOverColor() {
                                if (drawing === true) {

                                    RGBColor1 = Math.floor(Math.random() * 255) + 1;
                                    RGBColor2 = Math.floor(Math.random() * 255) + 1;
                                    RGBColor3 = Math.floor(Math.random() * 255) + 1;

                                    for (let i = 0; i < 50; i++) {
                                      //  console.log(`${RGBColor1},${RGBColor2},${RGBColor3}`);
                                      //  RGBColor1 = RGBColor1 - 15; // it changes to 5, why?
                                      //  RGBColor2 = RGBColor2 - 15;
                                      //  RGBColor3 = RGBColor3 - 15;
                                        square.style.backgroundColor = `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;
                                    };

                                    };

                                    document.addEventListener('mouseup', () => {
                                        drawing = false;
                                        square.removeEventListener('mouseover', handleMouseOverColor);
                                    });
                            });
                    });

                document.addEventListener('mouseup', () => {
                    drawing = false;
                    square.removeEventListener('mousedown', handleMouseDownColor);
                });

            });
        });
}

let squaresGenerated = "false"; // checks if canvas is empty

function restartGame() { 


        reset.addEventListener ('click', function() {
            if (squaresGenerated === "true") {
                const allSquares = document.querySelectorAll('.each_square');
                allSquares.forEach ((square) => {
                    square.parentNode.removeChild(square);
                });
                squaresGenerated = "false";
                density.textContent = "Click 'Generate'!";
                textColor.textContent = "";

                colorChoice.forEach((color) => {
                    color.style.opacity = "30%";
                    color.style.cursor = "";
                    color.style.backgroundColor = "gray";
                }) 

            } else if  (squaresGenerated === "false") {
                squaresGenerated = "true"; 
                calculateSquares();
                placeSquares();
                textColor.textContent = 'Choose Color!';

                colorChoice.forEach((color) => {
                    color.style.opacity = "100%";
                    color.style.cursor = "pointer";
                    color.style.backgroundColor = "";
                }) 
            }
        })    
    
};

restartGame();

// to test if touch would work



//function colorPink() {

 //   const squaresTouched = document.querySelectorAll('.each_square'); 

 //   squaresTouched.forEach((square) => {
 //       square.addEventListener('touchstart', function handleTouchEvent(e) {
 //           console.log(e);
 //           square.style.backgroundColor = "pink";

 //           squaresTouched.forEach((square) => {
//              square.addEventListener('touchmove', function handleMoveEvent(e) {
//                    console.log(e);
 //                   e = square;
  //                  square.style.backgroundColor = "blue";
  //              });
  //          })
  //      });


   // });

//};
        


