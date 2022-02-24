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

function operate(operator, a, b) {
    if (operator == "+") return add(a, b);
    else if (operator == "-") return subtract(a, b);
    else if (operator == "*") return multiply(a, b);
    else if (operator == "/") return divide(a, b);
}

let input = document.querySelector('#text');
let wholeInput = ["0"];
let lastItem;
let inputNumber;

function display(id) {
    if (input.textContent == '0') clearInput();

    if (id == "+" || id =="-" || id == "*" || id == "/") {
        wholeInput[wholeInput.length - 1] = inputNumber;
        lastItem = wholeInput[wholeInput.length - 1];//96
        if (lastItem == "+" || lastItem =="-" || lastItem == "*" || lastItem == "/") { //if user clicks + and then / or sth
            wholeInput[wholeInput.length - 1] = id;
            //storeOperator(id);
        } else { //user clicked number and now operator
            storeNewNumber(inputNumber);
            storeOperator(id);
            updateResult();
            wholeInput[wholeInput.length] = id; //+
            lastItem = wholeInput[wholeInput.length - 1];//+
        }
    } else {
        if (lastItem == "+" || lastItem =="-" || lastItem == "*" || lastItem == "/") {
            clearInput();
            input.textContent += id;
            lastItem = id; //maybe change it
        } else {
            input.textContent += id;
        }
    }
    inputNumber = parseInt(input.textContent);
}

let lastOperator = 'zero';
let newOperator = 'one';
let result = 'none';

function storeOperator(operator) {
    if (lastOperator == 'zero') { //0 calculation
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
    console.log("result:", result);
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
        input.textContent = result;
    }
}

function clearInput() {
       input.textContent = '';
//     lastNumber = 'zero';
//     newNumber = 'one';
//     lastOperator = 'zero';
//     newOperator = 'one';
//     result = 'none';
}

function clearAll() {
    input.textContent = '';
    lastNumber = 'zero';
    newNumber = 'one';
    lastOperator = 'zero';
    newOperator = 'one';
    result = 'none';
}
