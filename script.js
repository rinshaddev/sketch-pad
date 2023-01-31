let currentColor = "#000000"
let currentType = 'normal';
let currentCursor = document.getElementById('brush-cursor');
let currentSize = 16;

const rangeValue = document.getElementById('show-range-value');
const gridContainer = document.getElementById('canvas');
const brushContainer = document.getAnimations('btn-color-picker-txt');
const brushColor = document.querySelector('.fa-solid.fa-paintbrush');
const palette = document.querySelector('.fa-solid.fa-palette');

//descriptions
const toolBox = document.querySelector('.btn-container')
const colorDescription = document.querySelector('#color-description');
const rainbowDescription = document.querySelector('#rainbow-description');
const eraserDescription = document.querySelector('#eraser-description');
const clearDescription = document.querySelector('#clear-description');
const penSizeDescription = document.querySelector('#pensize-description');

//Buttons
const btnColorPicker = document.getElementById('btn-color-picker');
const btnRainbow = document.getElementById('btn-random-color');
const btnClear = document.getElementById('btn-clear');
const btnEraser = document.getElementById('btn-eraser');

//inputs
const colorPicker = document.getElementById('color-picker');
const slider  = document.getElementById('range-collector');


// 1stType
//this type remove any current event listening and add new one so the color will change
btnRainbow.onclick =(e)=> setCurrentType('rainbow'); 
btnEraser.onclick =(e)=> setCurrentType('eraser'); 
btnColorPicker.onclick =(e)=> setCurrentType('normal');
// //2nd type;
//this will add new eventListening with current one;
// btnRainbow.addEventListener('onclick', (e)=> setCurrentType('rainbow')); 
// btnEraser.addEventListener('onclick', (e)=> setCurrentType('eraser')); 
// btnColorPicker.addEventListener('onclick', (e)=> setCurrentType('normal'));
//that's why this does'nt work as expected

//event listener
btnColorPicker.addEventListener('click',setUpBtnAndColorPicker);
colorPicker.addEventListener('change', setUpBtnAndColorPicker);
gridContainer.addEventListener("mousemove", curserMove);
gridContainer.addEventListener ('mouseleave', cursorShow);
toolBox.addEventListener('mouseenter' ,displayDescription);
btnClear.addEventListener("click",clearGrid);
slider.onchange = (e) => setCurrentSize(e.target.value)
slider.onmousemove = (e) => displayCurrentSize(e.target.value)


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function displayCurrentSize(e) {
   rangeValue.innerHTML = `<u>Brush Size</u><br>${e}`
}

function setCurrentSize(e){
   currentSize= e;
    clearGrid();
}



function clearGrid() {
 let grids = document.querySelectorAll('.grid')
// to delete only the grids not the cursor
   for (let i = 0; i < grids.length; i++){
      grids[i].parentNode.removeChild(grids[i]);
   }
   setUpGrid()
 
}

function setUpGrid(e) { 
     if (gridContainer.children > 4){
      btnClear.disabled = false;
   }
   gridContainer.style.gridTemplateColumns = `repeat(${currentSize},1fr)`
   gridContainer.style.gridTemplateRows = `repeat${currentSize},1fr)`
     for (let i = 0; i < currentSize * currentSize ; i++) {
        let grid = document.createElement ('div');
        grid.classList.add('grid');
        grid.addEventListener ('mouseover', updateColor);
        grid.addEventListener('mousedown', updateColor);
        gridContainer.appendChild(grid);
     }
   
}


function updateColor(e) {
   if (e.type == 'mouseover' && !mouseDown) return;
   if (currentType === 'normal'){
      e.target.style.backgroundColor = currentColor;
      brushColor.style.color = currentColor;
     }else if (currentType === 'rainbow') {
      e.target.style.backgroundColor = randomColorGenerator(); 
      brushColor.style.color = 'black'
     }else if (currentType === 'eraser'){
      e.target.style.backgroundColor = 'white'
     }
  } 



function displayDescription(e){

btnRainbow.addEventListener('mouseenter',()=> {rainbowDescription.style.display= 'block'});
btnRainbow.addEventListener('mouseleave',()=> {rainbowDescription.style.display = 'none'});
btnColorPicker.addEventListener('mouseenter',()=> {colorDescription.style.display= 'block'});
btnColorPicker.addEventListener('mouseleave',()=> {colorDescription.style.display = 'none'});
btnEraser.addEventListener('mouseenter',()=> {eraserDescription.style.display= 'block'});
btnEraser.addEventListener('mouseleave',()=> {eraserDescription.style.display = 'none'});
btnClear.addEventListener('mouseenter',()=> {clearDescription.style.display= 'block'});
btnClear.addEventListener('mouseleave',()=> {clearDescription.style.display = 'none'});
slider.addEventListener('mouseenter',()=> {penSizeDescription.style.display= 'block'});
slider.addEventListener('mouseleave',()=> {penSizeDescription.style.display = 'none'});

}

//setCurrent Type
function setCurrentType(type) { 
   currentType = type;
   
}


// complete color picking process
function setUpBtnAndColorPicker(event){
   if (event.type == 'change'){
    colorPicker.style.display = 'none';
    btnColorPicker.style.display = 'block';
    //change color of palette and brush;
    ColorPaletteBrush(event.target.value);
   }// to show the color picker input when the button is clicked
   else if (event.type == 'click'){
    btnColorPicker.style.display = 'none';
    colorPicker.style.display = 'block';
   }
}
// to set the color of brush and palette
function ColorPaletteBrush(event) {
   palette.style.color = event;
   currentColor = event;
}


//show the according to the mouse mouse move
function curserMove(e) {
   currentCursor.style.display = "none"
   if (currentType === "normal"|| currentType === "rainbow"){
    currentCursor = document.getElementById ('brush-cursor')
      currentCursor.style.display = 'inline-block'
   }else if (currentType === 'eraser') {
     currentCursor = document.getElementById('eraser-cursor');
     currentCursor.style.display = 'inline-block'
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
   currentCursor.style.position ="absolute"
   currentCursor.style.left = `${mouseX}px`
   currentCursor.style.top = `${mouseY}px`
   currentCursor.style.zIndex = 11; 
}
//to remove cursor on mouseleave 
function cursorShow () {
   currentCursor.style.display = 'none'
}

function randomColorGenerator(){
   return 'hsla(' + Math.floor(Math.random()*360) + ', 100%, 70%, 1)';
  }

window.onload = () => {
    ColorPaletteBrush(currentColor);
    setUpGrid()
}