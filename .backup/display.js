const resultDisplay = document.getElementById('result');
const historyDiv = document.getElementById('history');

export function updateDisplay(value) {
  resultDisplay.textContent = value;
}

export function updateHistory(history) {
  historyDiv.innerHTML = ''; // 清空历史记录

  history.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    historyDiv.appendChild(p);
  });
}