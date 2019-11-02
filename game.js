let canvas;
let ctx;
let boxHeight=20;
let boxWidth=12;
let startX=4;
let startY=0;
let level=1;
let result="playing";

let coordinateArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0));
let currentTetromino=[[1,0], [0,1], [1,1], [2,1]];
let tetrominos=[];
let colorsOfTetrominos=['purple','cyan','blue','yellow','orange','green','red'];
let currentTetrominoColor;
let gameBoardArray=[...Array(20)].map(e => Array(12).fill(0));
let stoppedShapeArray = [...Array(20)].map(e => Array(12).fill(0));
let DIRECTION = {
    IDLE: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};
let direction;

class Coordinates{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

// Execute SetupCanvas when page loads
document.addEventListener('DOMContentLoaded', SetupCanvas); 
 
// Creates the array with square coordinates [Lookup Table]
// [0,0] Pixels X: 11 Y: 9, [1,0] Pixels X: 34 Y: 9, ...
function CreateCoordArray(){
    let xR = 0, yR = 19;
    let i = 0, j = 0;
    for(let y = 9; y <= 446; y += 23){
        // 12 * 23 = 276 - 12 = 264 Max X value
        for(let x = 11; x <= 264; x += 23){
            coordinateArray[i][j] = new Coordinates(x,y);
            // console.log(i + ":" + j + " = " + coordinateArray[i][j].x + ":" + coordinateArray[i][j].y);
            i++;
        }
        j++;
        i = 0;
    }
}

 
function SetupCanvas(){
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 936;
    canvas.height = 956;
 
    // Double the size of elements to fit the screen
    ctx.scale(2, 2);
 
    // Draw Canvas background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw gameboard rectangle
    ctx.strokeStyle = 'black';
    ctx.strokeRect(8, 8, 280, 462);
 
    tetrisLogo = new Image(161, 54);
    tetrisLogo.onload = DrawTetrisLogo;
    tetrisLogo.src = "tetrislogo.png";
 
    // Set font for score label text and draw
    ctx.fillStyle = 'black';
    ctx.font = '21px Arial';
    ctx.fillText("SCORE", 300, 98);
 
    // Draw score rectangle
    ctx.strokeRect(300, 107, 161, 24);
 
    // Draw score
    ctx.fillText(score.toString(), 310, 127);
    
    // Draw level label text
    ctx.fillText("LEVEL", 300, 157);
 
    // Draw level rectangle
    ctx.strokeRect(300, 171, 161, 24);
 
    // Draw level
    ctx.fillText(level.toString(), 310, 190);
 
    // Draw next label text
    ctx.fillText("WIN / LOSE", 300, 221);
 
    // Draw playing condition
    ctx.fillText(winOrLose, 310, 261);
 
    // Draw playing condition rectangle
    ctx.strokeRect(300, 232, 161, 95);
    
    // Draw controls label text
    ctx.fillText("CONTROLS", 300, 354);
 
    // Draw controls rectangle
    ctx.strokeRect(300, 366, 161, 104);
 
    // Draw controls text
    ctx.font = '19px Arial';
    ctx.fillText("A : Move Left", 310, 388);
    ctx.fillText("D : Move Right", 310, 413);
    ctx.fillText("S : Move Down", 310, 438);
    ctx.fillText("E : Rotate Right", 310, 463);
 
    // 2. Handle keyboard presses
    document.addEventListener('keydown', HandleKeyPress);
 
    // 3. Create the array of Tetromino arrays
    CreateTetrominos();
    // 3. Generate random Tetromino
    CreateTetromino();
 
    // Create the rectangle lookup table
    CreateCoordArray();
 
    DrawTetromino();
}
 

 