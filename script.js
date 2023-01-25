
let currentColor = '#000000';
let currentSize = 16;

const rangeValue = document.getElementById('show-range-value');
const gridContainer = document.getElementById('canvas');


const btnColorPicker = document.getElementById('btn-color-picker');
const btnRainbow = document.getElementById('btn-random-color');
const btnClear = document.getElementById('btn-clear');
const btnEraser = document.getElementById('btn-eraser');
const slider  = document.getElementById('range-collector');

const colorPicker = document.getElementById('color-picker');


colorPicker.addEventListener('change',  hello);

 function hello (e){
    currentColor = e.target.value;
    setBackgroundColor();

 }




 
function setUpSpecificColorGrid(e){
   gridContainer.style.gridTemplateColumns= `repeat(${currentSize}, 1fr)`;
   gridContainer.style.gridAutoRows = `repeat (${currentSize}, 1fr)`
     for (let i = 0; i < currentSize * currentSize; i++) {
      let grid = document.createElement("div");
        grid.classList.add('grid');
        grid.addEventListener('mouseenter',() => {grid.style.backgroundColor = currentColor})
        gridContainer.appendChild(grid)
    }
   


}
function setBackgroundColor() {
    btnColorPicker.style.background = currentColor;
    btnColorPicker.style.color = 'white'
}

window.onload =  () =>{
setBackgroundColor()
setUpSpecificColorGrid()
}



