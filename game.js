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
 