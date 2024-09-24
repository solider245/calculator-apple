export function createButtons() {
    const buttonConfig = [
        { id: 'clear', text: 'AC', class: 'clear' },
        { id: '+/-', text: '+/-' },
        { id: '%', text: '%' },
        { id: '/', text: '÷', class: 'operator' },
        { id: '7', text: '7' },
        { id: '8', text: '8' },
        { id: '9', text: '9' },
        { id: '*', text: '×', class: 'operator' },
        { id: '4', text: '4' },
        { id: '5', text: '5' },
        { id: '6', text: '6' },
        { id: '-', text: '-', class: 'operator' },
        { id: '1', text: '1' },
        { id: '2', text: '2' },
        { id: '3', text: '3' },
        { id: '+', text: '+', class: 'operator' },
        { id: '0', text: '0' },
        { id: '.', text: '.' },
        { id: '=', text: '=', class: 'equals' },
        { id: 'backspace', text: '←', class: 'backspace' }
    ];

    buttonConfig.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.id = button.id;
        buttonElement.textContent = button.text;
        if (button.class) {
            buttonElement.classList.add(button.class);
        }
        document.getElementById('buttons-container').appendChild(buttonElement);
    });
}