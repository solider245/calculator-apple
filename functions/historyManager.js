// 保存到本地存储的函数
export function saveToLocalStorage(entry) {
    let historyData = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    historyData.push(entry);
    localStorage.setItem('calculatorHistory', JSON.stringify(historyData));
}

// 从本地存储加载历史记录的函数
export function loadHistoryFromLocalStorage() {
    let historyData = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    return historyData;
}