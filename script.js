window.onload=()=> {defaultGrid();}
let currentColor = '#000000';

const rangeValue = document.getElementById('show-range-value');
const gridContainer = document.getElementById('canvas');


const btnColorPicker = document.getElementById('btn-color-picker');
const btnRainbow = document.getElementById('btn-random-color');
const btnClear = document.getElementById('btn-clear');
const btnEraser = document.getElementById('btn-eraser');

const colorPicker = document.getElementById('color-picker');
const grid = document.querySelectorAll('.grid')




function defaultGrid(){
    gridContainer.style.gridTemplateColumns= 'repeat(16, 1fr)';
    gridContainer.style.gridAutoRows = 'repeat (16, 1fr)'
     for (let i = 0; i < 16 * 16; i++) {
        let grid = document.createElement("div");
        grid.classList.add('grid');
        grid.addEventListener('mouseenter',() => {grid.style.backgroundColor = currentColor})
        gridContainer.appendChild(grid)
    }

}



 



  
    
