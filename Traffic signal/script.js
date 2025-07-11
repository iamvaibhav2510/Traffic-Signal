// script.js

// Get references to the buttons and the color box
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const colorBox = document.querySelector('.colorBox');

// Function to change the color of the color box
function changeColor(color) {
    colorBox.style.backgroundColor = color;
}

// Event listeners for the buttons
btn1.addEventListener('click', () => changeColor('red'));
btn2.addEventListener('click', () => changeColor('yellow'));
btn3.addEventListener('click', () => changeColor('green'));
