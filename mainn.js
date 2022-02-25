function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}
function power(a, b) {
    return a**b;
}
function squareRoot(a) {
    return Math.sqrt(a);
}

function operate(operator, a, b) {
    if (operator == "+") return add(a, b);
    else if (operator == "-") return subtract(a, b);
    else if (operator == "*") return multiply(a, b);
    else if (operator == "/") return divide(a, b);
    else if (operator == "^") return power(a, b);
}

let input = document.querySelector('#text');
let wholeInput = ["lol"];
let lastItem;
let inputNumber;
let inputSigns = ['shit'];

function display(id) {
    if (id == 'enter') {
        if (lastOperator == 'zero') prompt(`bruv xdddd ${inputNumber} = ${inputNumber} xdd`);
        else {
            wholeInput[wholeInput.length] = inputNumber;
            wholeInput[wholeInput.length] = id; 
            lastItem = wholeInput[wholeInput.length - 1];
            storeNewNumber(inputNumber);
            calcYaLater(id);
            updateResult();
        }
    } else {
    
        if (typeof inputNumber != 'undefined') { //not important
            const stringus = `${inputNumber}`;
            inputSigns = stringus.split('');
        }
        if (input.textContent == 'CALC YA LATER') clearInput();
        if (inputSigns.length >= 14) prompt("bruv that's 2 long 4 me");
        else {
            if (id == "+" || id =="-" || id == "*" || id == "/" || id == "^") {
                if (lastItem == "+" || lastItem =="-" || lastItem == "*" || lastItem == "/" || lastItem == "^") { //user clicked number operator operator
                    wholeInput[wholeInput.length - 1] = id;
                    lastItem = wholeInput[wholeInput.length - 1];
                    changeOperator(id);
                } else { //user clicked number and operator
                    wholeInput[wholeInput.length] = inputNumber;
                    wholeInput[wholeInput.length] = id; 
                    lastItem = wholeInput[wholeInput.length - 1];
                    storeNewNumber(inputNumber);
                    calcYaLater(id);
                    updateResult();
                }
            } else {
                if (lastItem == "+" || lastItem =="-" || lastItem == "*" || lastItem == "/" || lastItem == "^") {
                    clearInput();
                    input.textContent += id;
                    lastItem = id; //maybe change it
                } else {
                    input.textContent += id;
                }
            } 
        }
        inputNumber = parseFloat(input.textContent);
    }
}


let lastOperator = 'zero';
let newOperator = 'one';
let result = 'none';

function calcYaLater(operator) {
    if (operator == 'enter') {
        if (lastOperator == 'zero') {

        }
        if (newOperator == 'one') {
            result = operate(lastOperator, lastNumber, newNumber);
            lastOperator = 'zero';
        }
        else {
            result = operate(newOperator, lastNumber, newNumber);
            lastOperator = 'zero';
            newOperator = 'one';
        }
    } else if (lastOperator == 'zero') { //0 calculation
        lastOperator = operator;
    } else if (newOperator == 'one') { //first calculation
        newOperator = operator;
        result = operate(lastOperator, lastNumber, newNumber);
    } else { //next calculations
        lastOperator = newOperator;
        newOperator = operator;
        result = operate(lastOperator, lastNumber, newNumber);
    }
    console.log("lastOp:", lastOperator);
    console.log("newOp:", newOperator);
}

function changeOperator(operator) {
    if (newOperator == 'one') {
        lastOperator = operator;
    } else {
        newOperator = operator; 
    }
}

let lastNumber = 'zero';
let newNumber = 'one';
function storeNewNumber(number) {
    if (lastNumber == 'zero') { //0 calculation
        lastNumber = number;
    } else if (newNumber == 'one') { //first calculation
        newNumber = number;

    } else { //next calculations
        lastNumber = newNumber;
        newNumber = number;
    }
    console.log("lastNum:", lastNumber);
    console.log("newNum:", newNumber);
}

function updateResult() {
    if (result != 'none') {
        lastNumber = newNumber;
        newNumber = result;
    }
    if (newNumber != 'one') {
        input.textContent = Math.round(result*100).toFixed(1)/100;
    }
}

function clearInput() {
       input.textContent = '';
}

function clearAll() {
    input.textContent = '';
    lastNumber = 'zero';
    newNumber = 'one';
    lastOperator = 'zero';
    newOperator = 'one';
    result = 'none';
}

function deleteButton() {
    let str = input.textContent;
    let newStr = str.slice(0, -1);
    input.textContent = newStr;
    inputNumber = parseFloat(input.textContent);
}