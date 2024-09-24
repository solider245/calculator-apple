// 更新显示的函数
export function updateDisplay(resultDisplay, currentInput) {
    resultDisplay.textContent = currentInput;
}

// 更新历史记录的函数
export function updateHistory(historyDiv, history) {
    historyDiv.innerHTML = '';
    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

// 添加数字到当前输入的函数
export function appendNumber(currentInput, number, resultDisplay) {
    if (currentInput === '0' && number !== '.' && number !== '+/-' && number !== '%') {
        currentInput = number;
    } else if (number === '+/-') {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (number === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else {
        currentInput += number;
    }
    updateDisplay(resultDisplay, currentInput);
    return currentInput;
}

// 清除显示和历史记录的函数
export function clearDisplay(currentInput, history, resultDisplay, historyDiv) {
    currentInput = '0';
    history = [];
    updateDisplay(resultDisplay, currentInput);
    updateHistory(historyDiv, history);
    return { currentInput, history };
}

// 执行计算的函数
export function calculate(currentInput, history, resultDisplay, historyDiv, saveToLocalStorage) {
    try {
        const result = eval(currentInput).toString();
        const entry = {
            id: Date.now(), // 使用时间戳作为唯一ID
            timestamp: new Date().toISOString(),
            input: currentInput,
            result: result,
            note: '' // 你可以在这里添加备注
        };
        saveToLocalStorage(entry);
        history.push(`${currentInput} = ${result}`);
        currentInput = result;
        updateDisplay(resultDisplay, currentInput);
        updateHistory(historyDiv, history);
    } catch (error) {
        currentInput = 'Error';
        updateDisplay(resultDisplay, currentInput);
    }
    return currentInput;
}

// 处理退格键的函数
export function handleBackspace(currentInput, resultDisplay) {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.textContent = currentInput || '0';
    return currentInput;
}

// 绑定事件监听器
export function bindEventListeners(buttons, currentInput, history, resultDisplay, historyDiv, saveToLocalStorage) {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonId = this.id;

            if (buttonId === 'clear') {
                const result = clearDisplay(currentInput, history, resultDisplay, historyDiv);
                currentInput = result.currentInput;
                history = result.history;
            } else if (buttonId === '=') {
                currentInput = calculate(currentInput, history, resultDisplay, historyDiv, saveToLocalStorage);
            } else if (buttonId === '+/-' || buttonId === '%') {
                currentInput = appendNumber(currentInput, buttonId, resultDisplay);
            } else if (buttonId === 'backspace') {
                currentInput = handleBackspace(currentInput, resultDisplay);
            } else {
                currentInput = appendNumber(currentInput, buttonId, resultDisplay);
            }
        });
    });
}