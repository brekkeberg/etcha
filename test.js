const mainContainer = document.querySelector('#main');

mainContainer.addEventListener('mouseover',testFunc);

function testFunc(){
    console.log('HELLO WORLD')
    mainContainer.style.cssText = "background-color: black"
}
