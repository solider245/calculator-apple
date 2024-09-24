import { createButtons } from './functions/createButtons.js';
import { saveToLocalStorage, loadHistoryFromLocalStorage } from './functions/historyManager.js';
import { bindEventListeners, updateHistory } from './functions/calculatorFunctions.js';

let currentInput = '0';
let history = [];

let resultDisplay = document.getElementById('result');
const historyDiv = document.getElementById('history');
const buttonsContainer = document.getElementById('buttons-container');

// 动态生成按钮
createButtons();

// 初始化
history = loadHistoryFromLocalStorage().map(entry => `${entry.input} = ${entry.result}`);
updateHistory(historyDiv, history);

// 绑定事件监听器
bindEventListeners(document.querySelectorAll('.buttons button'), currentInput, history, resultDisplay, historyDiv, saveToLocalStorage);