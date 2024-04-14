const inputDisplay = document.getElementById("screen");
const answerDisplay = document.getElementById("final-ans");

let input = "";
let answer = 0;


const insert = ch => {
    input += ch;
    refreshValues();
}

const clearInput = () => {
    input = "";
    refreshValues();
}

// 1234
const solveExpression = (operand1, operator, operand2) => {
    if (operand2.length == 0) return operand1;
    let numOperand2 = 0;
    for (let i = 0; i < operand2.length; i++) {
        numOperand2 *= 10;
        numOperand2 += operand2[i] - '0';
    }
    operand2 = numOperand2;
    switch(operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
    }
}

const calculateAnswer = () => {
    let operand1 = 0, operand2 = "", operator = "+";
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= "0" && input[i] <= "9") {
            operand2 += input[i];
        } else {
            operand1 = solveExpression(operand1, operator, operand2);
            operator = input[i];
            operand2 = "";
        }
    }
    answer = solveExpression(operand1, operator, operand2);
}

const refreshValues = () => {
    calculateAnswer();
    inputDisplay.innerText = input == "" ? 0 : input;
    answerDisplay.innerText = answer;
}