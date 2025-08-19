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
    return nb1 / nb2;
}

function operate(nb1, nb2, op){
    switch (op){
        case "+":
            return add(nb1, nb2);
        case "-":
            return sub(nb1, nb2);
        case "X":
            return mul(nb1, nb2);
        case "/":
            return divide(nb1, nb2);
    }

}

function clear() {
     const output = document.querySelector('.line1');
     output.textContent ="";
}

function main(){
    const buttons = document.querySelectorAll('button');
    const output = document.querySelector('.line1')
    const operators = ["+", "-", "X", "/"];
    let values = {nb1: "", nb2: ""}
    let operator;
    let current = values.nb1;

    buttons.forEach(button => {

        if (button.textContent === "Clear"){
            button.addEventListener('click', () =>{
                clear();
        })}
        else if(operators.includes(button.textContent)){
            button.addEventListener('click', () =>{
                operator = button.textContent;
                current = values.nb2;
                output.textContent += ` ${operator} `
        })}
        else if(button.textContent === "="){
            button.addEventListener('click', () =>{
                let answer = operate(values.nb1, values.nb2, operator);
                output.textContent += ` = ${answer}`
        })}

        else{
            button.addEventListener('click', () =>{
                output.textContent += `${button.textContent}`
        })}

    })
}

main()

console.log(operate(2, 3, mul))
