
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


colorPicker.addEventListener('change',  setColorBtnGrid);
btnRainbow.addEventListener('click', rainbow);
// btnColorPicker.addEventListener('click', )

function rainbow (e){
   grids.forEach(element => {
    element.removeEventListener ('mouseenter', changeColor)
   });
   grids.forEach(element => {
    element.addEventListener ('mouseenter', hello)
   })
  function hello(e){
    e.target.style.backgroundColor =`#${Math.floor(Math.random()*16777215)}`
   }}

function normal (e){

 
 }


function colorGenerator(){
  return 
}



 function setColorBtnGrid (e){
    currentColor = e.target.value;
    setBackgroundColor();
    // to reassign the current with the value it's currently rainbow; 
   grids.forEach(element => {
     element.addEventListener ('mouseenter', hi)
    })
    function hi(e){
     e.target.style.backgroundColor = currentColor;
    }

 }



let grids = [...document.querySelectorAll('.grid')]
console.log(grids)
 
function setUpSpecificColorGrid(e){
   gridContainer.style.gridTemplateColumns= `repeat(${currentSize}, 1fr)`;
   gridContainer.style.gridAutoRows = `repeat (${currentSize}, 1fr)`;
  
     for (let i = 0; i < currentSize * currentSize; i++) {
      let grid = document.createElement("div");
        grid.classList.add('grid');
        grid.addEventListener('mouseenter',changeColor)
        grids.unshift(grid)
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



function changeColor(e){
        e.target.style.background = currentColor;
}   
   