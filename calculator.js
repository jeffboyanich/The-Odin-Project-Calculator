//Initialize main calculator functions
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};


//Initialize calculator button variables
const digitOne = document.querySelector('.onebtn');
const digitTwo = document.querySelector('.twobtn');
const digitThree = document.querySelector('.threebtn');
const digitFour = document.querySelector('.fourbtn');
const digitFive = document.querySelector('.fivebtn');
const digitSix = document.querySelector('.sixbtn');
const digitSeven = document.querySelector('.sevenbtn');
const digitEight = document.querySelector('.eightbtn');
const digitNine = document.querySelector('.ninebtn');
const digitZero = document.querySelector('.zerobtn');
const addBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');

let num1 = '';
let num2 = '';
let operator = null;
let equalsIndicator = false;

function operate(operator, num1, num2) {
    if (operator == '+') {
         return add(num1, num2);
    } else if (operator == '-') {
         return  subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return  divide(num1, num2);
    };
};

function evaluateExpression() {
    stringToNumber();
    let result = operate(operator, num1, num2);
    display.textContent = `${result}`;
    num1 = `${result}`;
    num2 = '';
};

function assignFirstAndSecond(digit) {
    if (equalsIndicator == true) {
        clear();
        num1 += digit.textContent;
    } else if (operator == null) {
        num1 += digit.textContent;
    } else {
        num2 += digit.textContent;
    }
};

function stringToNumber() {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
}

function clear() {
    num1 = '';
    num2 = '';
    display.textContent = '';
    operator = null;
    equalsIndicator = false;
};

digitOne.addEventListener('click', function() {
    assignFirstAndSecond(digitOne);
    display.textContent += '1';
});

digitTwo.addEventListener('click', function(){
    assignFirstAndSecond(digitTwo);
    display.textContent += '2';
});

digitThree.addEventListener('click', function(){
    assignFirstAndSecond(digitThree);
    display.textContent += '3';
});

digitFour.addEventListener('click', function(){
    assignFirstAndSecond(digitFour);
    display.textContent += '4';
});

digitFive.addEventListener('click', function(){
    assignFirstAndSecond(digitFive);
    display.textContent += '5';
});

digitSix.addEventListener('click', function(){
    assignFirstAndSecond(digitSix);
    display.textContent += '6';
});

digitSeven.addEventListener('click', function(){
    assignFirstAndSecond(digitSeven);
    display.textContent += '7';
});

digitEight.addEventListener('click', function(){
    assignFirstAndSecond(digitEight);
    display.textContent += '8';
});

digitNine.addEventListener('click', function(){
    assignFirstAndSecond(digitNine);
    display.textContent += '9';
});

digitZero.addEventListener('click', function(){
    assignFirstAndSecond(digitZero);
    display.textContent += '0';
});

addBtn.addEventListener('click', function(){
    if (num2 !== '') {
        evaluateExpression();
    };
    display.textContent += '+';
    operator = '+';
    equalsIndicator = false;
});

subtractBtn.addEventListener('click', function(){
    if (num2 !== '') {
        evaluateExpression();
    };
    display.textContent += '-';
    operator = '-';
    equalsIndicator = false;
});

multiplyBtn.addEventListener('click', function(){
    if (num2 !== '') {
        evaluateExpression();
    };
    display.textContent += 'x';
    operator = '*';
    equalsIndicator = false;
});

divideBtn.addEventListener('click', function(){
    if (num2 !== '') {
        evaluateExpression();
    };
    display.textContent += '/';
    operator = '/';
    equalsIndicator = false;
});

equalBtn.addEventListener('click', function(){
    evaluateExpression();
    equalsIndicator = true;
});

clearBtn.addEventListener('click', function() {
    clear();
});
