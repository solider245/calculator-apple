let currentInput = '0';
let history = [];
let historyId = 1;

let resultDisplay = document.getElementById('result');
const historyDiv = document.getElementById('history');

function updateDisplay() {
    resultDisplay.textContent = currentInput;
}

export function updateHistory() {
    historyDiv.innerHTML = ''; // 清空历史记录

    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `[${item.id}] ${item.date}: ${item.expression} = ${item.result}`;
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

export function calculate() {
    try {
        const result = eval(currentInput).toString();
        const historyItem = {
            id: historyId++,
            date: new Date().toLocaleString(),
            expression: currentInput,
            result: result
        };
        history.push(historyItem);
        currentInput = result;
        updateDisplay();
        updateHistory();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function handleBackspace() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.textContent = currentInput || '0';
}