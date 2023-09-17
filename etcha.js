//grabs main container so that grid can be populated
const mainContainer = document.querySelector('#main');


// creates array of all color buttons and all grid size buttons
const allColorButtons = document.querySelectorAll('.colorButton');
const allGridButtons = document.querySelectorAll('.gridButton');

// creates event listener for all color choice buttons
for (let i = 0; i <= allColorButtons.length - 1; i++){
    allColorButtons[i].addEventListener('click', setColorChoice);
}

// creates event listener for all grid choice buttons
for (let i = 0; i <= allGridButtons.length - 1; i++){
    allGridButtons[i].addEventListener('click', setGridSize);
}

// logic for color choice buttons
let userColorChoiceHex = "black";
function setColorChoice(){
    let userColorChoiceName = this.id;
    if (userColorChoiceName === "colorRed"){
        userColorChoiceHex = '#C44D58';
    } else if (userColorChoiceName === "colorBlue"){
        userColorChoiceHex = '#4ECDC4';
    } else if (userColorChoiceName === "colorGreen"){
        userColorChoiceHex = '#C7F464';
    } else if (userColorChoiceName === "colorBlack"){
        userColorChoiceHex = 'black';
    } else if (userColorChoiceName === "colorRandom"){
        userColorChoiceHex = 'green';
    }
}


let gridSize = 70;
function setGridSize(){
    let userGridChoice = this.id;
    if(userGridChoice === "gridSmall"){
        gridSize = 15;
        console.log(gridSize);
    } else if (userGridChoice === "gridMedium"){
        gridSize = 30;
        console.log(gridSize);
    } else if (userGridChoice === "gridLarge"){
        gridSize = 70;
        console.log(gridSize);
    }
}






// constructs grid
for (let i = 1; i <= gridSize; i++){
    let etchaCol = document.createElement('div');
    etchaCol.classList.add('etchaCol');
    mainContainer.appendChild(etchaCol);
    for (let y = 1; y <= gridSize; y++){
        let etchaBox = document.createElement('div');
        etchaBox.classList.add('box');
        etchaCol.appendChild(etchaBox);
    }
}

// makes object containing all boxes
const allBoxes = document.querySelectorAll('.box');

//makes mouseover event listener for all boxes
let boxesCount = gridSize * gridSize
for (let i = 0; i <= boxesCount -1; i++){
    allBoxes[i].addEventListener('mouseover',applyColor);
    function applyColor(){
        allBoxes[i].style.cssText = "background-color: "+ userColorChoiceHex
    }
}








