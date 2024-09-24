import { createButtons } from './functions/createButtons.js';

let currentInput = '0';
let history = [];

let resultDisplay = document.getElementById('result');
const historyDiv = document.getElementById('history');
const buttonsContainer = document.getElementById('buttons-container');

// 动态生成按钮
createButtons();

// 更新显示的函数
function updateDisplay() {
    resultDisplay.textContent = currentInput;
}

// 更新历史记录的函数
function updateHistory() {
    historyDiv.innerHTML = '';
    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

// 添加数字到当前输入的函数
function appendNumber(number) {
    if (currentInput === '0' && number !== '.' && number !== '+/-' && number !== '%') {
        currentInput = number;
    } else if (number === '+/-') {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (number === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// 清除显示和历史记录的函数
function clearDisplay() {
    currentInput = '0';
    history = [];
    updateDisplay();
    updateHistory();
}

// 执行计算的函数
function calculate() {
    try {
        const result = eval(currentInput).toString();
        history.push(`${currentInput} = ${result}`);
        currentInput = result;
        updateDisplay();
        updateHistory();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

// 处理退格键的函数
function handleBackspace() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.textContent = currentInput || '0';
}

// 绑定事件监听器
function bindEventListeners() {
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
            } else if (buttonId === 'backspace') {
                handleBackspace();
            } else {
                appendNumber(buttonId);
            }
        });
    });
}

// 初始化
bindEventListeners();