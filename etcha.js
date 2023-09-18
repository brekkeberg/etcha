//grabs main container so that grid can be populated
const mainContainer = document.querySelector('#main');


// creates array of all color buttons and all grid size buttons
const allColorButtons = document.querySelectorAll('.colorButton');
const allGridButtons = document.querySelectorAll('.gridButton');

// creates event listener for all color choice buttons
for (let i = 0; i <= allColorButtons.length - 1; i++){
    allColorButtons[i].addEventListener('click', setColorChoice);
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
        userColorChoiceHex = 'RGB('+getRandColor()+',100,100)';
    }
}

// creates event listener for all grid choice buttons
for (let i = 0; i <= allGridButtons.length - 1; i++){
    allGridButtons[i].addEventListener('click', makeEtchaGrid);
}


function makeEtchaGrid(){
    //gets name of user grid choice size name from button click
    let userGridChoiceName = this.id;
    //converts grid choice size name to grid choice size number
    function setGridSize(){
        if(userGridChoiceName === "gridSmall"){
            return 15;
        } else if (userGridChoiceName === "gridMedium"){
            return 30;
        } else if (userGridChoiceName === "gridLarge"){
            return 70;
        }
    }
    let userGridChoiceNum = setGridSize()

    //delets any previous grids that have been built
    const allGridCols = document.querySelectorAll('.etchaCol');
    for (let i = allGridCols.length - 1; i >= 0; i--){
        for (let y = 0; y <= allGridCols.length -1; y++){
            allGridCols[y].removeChild(allGridCols[y].lastChild);
        mainContainer.removeChild(mainContainer.lastChild);
        }
    }

    // constructs columns based on user grid choice size number
    for (let i = 1; i <= userGridChoiceNum; i++){
        let etchaCol = document.createElement('div');
        etchaCol.classList.add('etchaCol');
        mainContainer.appendChild(etchaCol);
        //constructs boxes within each column
        for (let y = 1; y <= userGridChoiceNum; y++){
            let etchaBox = document.createElement('div');
            etchaBox.classList.add('etchaBox');
            etchaCol.appendChild(etchaBox);
            //adds event listener to each constructed box
            etchaBox.addEventListener('mouseover', applyColor);
            function applyColor(){
                etchaBox.style.cssText = "background-color: "+ userColorChoiceHex;
            }
        }
    }
}

function getRandColor(){
    let randomRGBvalue = Math.random()*255
    return randomRGBvalue
}

//allEtchaCol[i].removeChild(allEtchaCol[i].lastChild);

















