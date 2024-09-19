const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let currentOperator = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      handleDigit(value);
    } else if (action) {
      handleOperator(action);
    }
  });
});

function handleDigit(digit) {
  currentInput += digit;
  updateDisplay();
}

function handleOperator(operator) {
  if (operator === 'clear') {
    clearCalculator();
  } else if (operator === 'sign') {
    toggleSign();
  } else if (operator === 'percent') {
    calculatePercentage();
  } else if (operator === 'decimal') {
    addDecimal();
  } else if (currentInput !== '' && previousInput !== '') {
    calculate();
    currentOperator = operator;
  } else {
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
  }
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (currentOperator) {
    case 'add':
      currentInput = (num1 + num2).toString();
      break;
    case 'subtract':
      currentInput = (num1 - num2).toString();
      break;
    case 'multiply':
      currentInput = (num1 * num2).toString();
      break;
    case 'divide':
      currentInput = (num1 / num2).toString();
      break;
  }

  previousInput = '';
  currentOperator = null;
  updateDisplay();
}

// ... 其他函数 (clearCalculator, toggleSign, calculatePercentage, addDecimal) ...

function updateDisplay() {
  display.textContent = currentInput;
}
