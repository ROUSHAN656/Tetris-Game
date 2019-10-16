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
