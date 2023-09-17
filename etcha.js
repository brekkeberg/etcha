//grabs main container so that grid can be populated
const mainContainer = document.querySelector('#main');


// constructs grid
let gridSize = 70
for (let i = 1; i <= gridSize; i++){
    let etchaCol = document.createElement('div');
    etchaCol.classList.add('dot');
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
for (let i = 0; i <= boxesCount; i++){
    allBoxes[i].addEventListener('mouseover',applyColor);
    function applyColor(){
        allBoxes[i].style.cssText = "background-color: black"
    }
}








