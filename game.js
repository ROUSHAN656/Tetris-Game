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

 