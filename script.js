const container = document.querySelector("#container");

//Makes the grid
function makeGrid(column = 16, row = 16) {
    let grid = column * row;
    for(i = 0; i < grid; i++) {
        let box = document.createElement('div');
        box.classList = "box";
        container.style.setProperty('grid-template-columns', `repeat(${column}, 1fr)`);
        container.style.setProperty('grid-template-rows', `repeat(${row}, 1fr)`);
        container.appendChild(box);
    }   
};

makeGrid();

//Changes a grids color when you mouseover
const boxes = document.getElementsByClassName("box");
function pen(box) {
    box.style.backgroundColor = "black";
};
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => pen(boxes[i]));
};

//Clears the canvas
const button = document.getElementById("reset").addEventListener("click", clear);
function clear() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#ffffffe3";
    }
};
 
//Creates a new grid based on user input
const resizeGrid = document.getElementById("gridsize").addEventListener("click", resize);
function resize() {
    container.innerHTML = "";
    clear();
    let userInput = Number(prompt("Choose a number between 1 and 100"));
    if(userInput > 100 || userInput < 1) {
        alert("Please choose a number between 1 and 100");
    } else 
        makeGrid(column = userInput, row = userInput);
        function pen(box) {
            box.style.backgroundColor = "black";
        }
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseover", () => pen(boxes[i]));
        }
};

//Creats rainbow ink
const rainbowButton = document.getElementById("rainbow").addEventListener("click", rainbowPen)
function rainbowInk(box) {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        } 
    return box.style.backgroundColor = color;
}; 
function rainbowPen() {
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => rainbowInk(boxes[i]));
    }
}; 
//Creates black ink
const blackInk = document.getElementById("black").addEventListener("click", blackpen)
function blackpen() {
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => pen(boxes[i]));
    }
};



