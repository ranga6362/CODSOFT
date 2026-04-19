// Functionality Logic
const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.getAttribute('value');
        const id = button.id;

        if (id === 'clear') {
            expression = "";
            display.value = "";
        } else if (id === 'equals') {
            try {
                if (expression !== "") {
                    // Calculate using Function for safety in this scope
                    const result = new Function('return ' + expression)();
                    display.value = result;
                    expression = result.toString();
                }
            } catch (e) {
                display.value = "Error";
                expression = "";
            }
        } else {
            // Logic to append value
            const lastChar = expression.slice(-1);
            const operators = ['+', '-', '*', '/'];

            // Prevent multiple operators in a row
            if (operators.includes(val) && operators.includes(lastChar)) {
                expression = expression.slice(0, -1) + val;
            } else {
                expression += val;
            }
            display.value = expression;
        }
    });
});