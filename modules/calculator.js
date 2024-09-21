import { updateDisplay, updateHistory } from './display.js';

let currentInput = '0';
let history = [];

export function appendNumber(number) {
    if (currentInput === '0' && number !== '.' && number !== '+/-' && number !== '%') {
        currentInput = number;
    } else if (number === '+/-') {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (number === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

export function clearDisplay() {
    currentInput = '0';
    history = [];
    updateDisplay(currentInput);
    updateHistory(history);
}

export function calculate() {
    try {
        const result = eval(currentInput).toString();
        history.push(`${currentInput} = ${result}`); // 添加到历史记录
        currentInput = result;
        updateDisplay(currentInput);
        updateHistory(history);
    } catch (error) {
        currentInput = 'Error';
        updateDisplay(currentInput);
    }
}