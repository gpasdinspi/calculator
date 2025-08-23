function add(nb1, nb2){
    return nb1 + nb2;
}

function sub(nb1, nb2){
    return nb1 - nb2;
}

function mul(nb1, nb2){
    return nb1 * nb2;
}

function divide(nb1, nb2){
    if (nb2 === 0){
        return "Error"
    }
    return nb1 / nb2;
}

function clear() {
     const output = document.querySelector('.line1');
     output.textContent ="";
}

function evaluateExpression(tokens) {
    // Handle mul and divide
    let i = 0;
    while (i < tokens.length) {
        if (tokens[i] === "X" || tokens[i] === "/") {
            const op = tokens[i];
            const left = parseFloat(tokens[i - 1]);
            const right = parseFloat(tokens[i + 1]);
            const result = op === "X" ? mul(left, right) : divide(left, right);
            tokens.splice(i - 1, 3, result.toString());
            i = 0; // repeat
        } else {
            i++;
        }
    }

    // Handle add and sub
    i = 0;
    while (i < tokens.length) {
        if (tokens[i] === "+" || tokens[i] === "-") {
            const op = tokens[i];
            const left = parseFloat(tokens[i - 1]);
            const right = parseFloat(tokens[i + 1]);
            const result = op === "+" ? add(left, right) : sub(left, right);
            tokens.splice(i - 1, 3, result.toString());
            i = 0;
        } else {
            i++;
        }
    }

    return tokens[0];
}

let expression = [];
let currentNumber = "";


function main() {
    const buttons = document.querySelectorAll('button');
    const output = document.querySelector('.line1');
    const operators = ["+", "-", "X", "/"];
    let lastchar;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const text = button.textContent;

            if (operators.includes(text)) {
                if (currentNumber !== "") {
                    expression.push(currentNumber);
                    currentNumber = "";
                }
                expression.push(text);
                output.textContent += ` ${text} `;
                return;
            }

            if (text === "=") {
                if (currentNumber !== "") {
                    expression.push(currentNumber);
                }
                const result = evaluateExpression(expression);
                output.textContent = ` ${result} `
                expression = [];
                currentNumber = result; // allow to use the previous answer to continue
                return;
            }

            if (text === "Clear") {
                clear();
                expression = [];
                currentNumber = "";
                return;
            }

        // if it's a number
        currentNumber += text;
        output.textContent += text;


        });
    });
}


main()

