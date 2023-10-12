const DEFAULTGRIDSIZE = 16;
const DEFAULTCOLOR = 'black';


let gridSize = DEFAULTGRIDSIZE;
let color = DEFAULTCOLOR;
let userGridSizeInput = "";
let userColorInput = "";

// identifies space that will contain grid
const gridContainer = document.querySelector('#main');

// builds initial default grid before any size button pushed
buildGrid.call()

// identifies space containing all grid buttons and color buttons
const allColorButtons = document.querySelectorAll('.colorButton');
const allGridButtons = document.querySelectorAll('.gridButton');
// creates event listener for all grid choice buttons
for (let i = 0; i <= allGridButtons.length - 1; i++){
    allGridButtons[i].addEventListener('click', resetGrid);
}
// creates event listener for all color choice buttons
for (let i = 0; i <= allColorButtons.length - 1; i++){
    allColorButtons[i].addEventListener('click', resetColor);
}

//function called when grid size button pushed
function resetGrid(){
    userGridSizeInput = this.id; //creates object to hold grid size button
    setGridSize.call() //sets grid size based on button pushed
    deleteGrid.call() //deletes old grid
    buildGrid.call() //builds new grid
}

//builds new grid
function buildGrid(){
    for (let i = 0; i <= gridSize -1; i++){
        let gridCol = document.createElement('div');
        gridCol.classList.add('gridCol');
        gridContainer.appendChild(gridCol);
        //constructs boxes within each column
        for (let y = 0; y <= gridSize -1; y++){
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
            gridCol.appendChild(gridBox);
            //adds event listener to fill box with color if mouseover occurs
            gridBox.addEventListener('mouseover', applyColor);
            function applyColor(){
                if (color === 'RANDOM'){
                    gridBox.style.cssText = "background-color: " + getRandomColor();
                }else{
                    gridBox.style.cssText = "background-color: " + color;
                } 
            }
        }
    }
}

//deletes old grid so that new grid has space to populate
function deleteGrid(){
    // creates object containing all grid columns
    const allGridCols = document.querySelectorAll('.gridCol');
    // iterates over grid columns, deleting contents of each, then deleting the column
    for (let i = allGridCols.length - 1; i >= 0; i--){
        for (let y = 0; y <= allGridCols.length -1; y++){
            allGridCols[y].removeChild(allGridCols[y].lastChild);
        }
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//converts grid choice from button to number of divs to be generated
function setGridSize(){    
    if(userGridSizeInput === "gridSmall"){
        gridSize = 15;
    } else if (userGridSizeInput === "gridMedium"){
        gridSize =  30;
    } else if (userGridSizeInput === "gridLarge"){
        gridSize = 70;
    }
}

//resets the color based on color button pushed
function resetColor(){
    userColorInput = this.id;
    if (userColorInput === "colorRed"){
        color = '#C44D58';
    } else if (userColorInput === "colorBlue"){
        color = '#4ECDC4';
    } else if (userColorInput === "colorGreen"){
        color = '#C7F464';
    } else if (userColorInput === "colorBlack"){
        color = 'black';
    } else if (userColorInput === "colorRandom"){
        color = 'RANDOM';
    }
}

//gets random RGB values and returns in proper RGB format
function getRandomColor(){
    let randomRedValue = Math.random()*255
    let randomGreenValue = Math.random()*255
    let randomBlueValue = Math.random()*255
    return "RGB( " + randomRedValue + "," 
                + randomGreenValue + "," 
                + randomBlueValue + ")"
}









