import { appendNumber, clearDisplay, calculate, handleBackspace } from './calculator.js';

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;

        if (buttonId === 'clear') {
            clearDisplay();
        } else if (buttonId === '=') {
            calculate();
        } else if (buttonId === '+/-' || buttonId === '%') {
            appendNumber(buttonId);
        } else if (buttonId === 'backspace') {
            handleBackspace();
        } else {
            appendNumber(buttonId);
        }
    });
});