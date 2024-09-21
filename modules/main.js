import { clearDisplay, calculate, appendNumber } from './modules/calculator.js';

// 获取按钮元素并绑定事件监听器
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;

        if (buttonId === 'clear') {
            clearDisplay();
        } else if (buttonId === '=') {
            calculate();
        } else if (buttonId === '+/-' || buttonId === '%') {
            appendNumber(buttonId);
        } else {
            appendNumber(buttonId);
        }
    });
});