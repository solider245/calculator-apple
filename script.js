let currentInput = '0';
let history = [];

const resultDisplay = document.getElementById('result');
const historyDiv = document.getElementById('history');

function updateDisplay() {
    resultDisplay.textContent = currentInput;
}

function updateHistory() {
    historyDiv.innerHTML = ''; // 清空历史记录

    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

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

function clearDisplay() {
    currentInput = '0';
    history = [];
    updateDisplay();
    updateHistory();
}

function calculate() {
    try {
        const result = eval(currentInput).toString();
        history.push(`${currentInput} = ${result}`); // 添加到历史记录
        currentInput = result;
        updateDisplay();
        updateHistory();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

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