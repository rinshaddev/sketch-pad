
const DEFAULT_COLOR = "normal";

let currentColor = '#000000';
let currentSize = 16;
let currentType = DEFAULT_COLOR;



const rangeValue = document.getElementById('show-range-value');
const gridContainer = document.getElementById('canvas');
const brushContainer = document.getAnimations('btn-color-picker-txt');
const brushColor = document.querySelector('.fa-solid.fa-paintbrush');
const palette = document.querySelector('.fa-solid.fa-palette');


const btnColorPicker = document.getElementById('btn-color-picker');
const btnRainbow = document.getElementById('btn-random-color');
const btnClear = document.getElementById('btn-clear');
const btnEraser = document.getElementById('btn-eraser');
const slider  = document.getElementById('range-collector');


const colorPicker = document.getElementById('color-picker');



btnColorPicker.addEventListener('click',setUpBtnAndColorPicker);
colorPicker.addEventListener('change', setUpBtnAndColorPicker);
gridContainer.addEventListener ("mouseenter", showingCursor);
gridContainer.addEventListener ('mouseleave',  showingCursor);
gridContainer.addEventListener("mousemove", curserShow);


//To display the custom cursor when enter the container
function showingCursor (e){
    let brushCursor = document.getElementById ('brush-cursor')
    
    
    //To whether mouse enter or not to show the cursor
    if (e.type == 'mouseenter'){ 
        brushCursor.style.display ="block"}
        else if (e.type == 'mouseleave'){
            brushCursor.style.display = "none"
        }
    
}


// to display color picker
function  setUpBtnAndColorPicker(event) {
   
   displayColorPickerAndPallette(event);
} 


function displayColorPickerAndPallette (event){
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
   brushColor.style.color = 'black';
   currentColor = event;
}

  

//show the according to the mouse mouse move
function curserShow(e) {
   const brushCursor = document.getElementById ('brush-cursor');
    mouseX = e.clientX;
    mouseY = e.clientY;
    brushCursor.style.position ="absolute"
    brushCursor.style.left = `${mouseX}px`
    brushCursor.style.top = `${mouseY}px`
    brushCursor.style.zIndex = 11;
    
}



window.onload = () => {
    setUpGrid();
    ColorPaletteBrush(currentColor);
}