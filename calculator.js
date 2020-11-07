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
/*const digitOne = document.querySelector('.onebtn');
const digitTwo = document.querySelector('.twobtn');
const digitThree = document.querySelector('.threebtn');
const digitFour = document.querySelector('.fourbtn');
const digitFive = document.querySelector('.fivebtn');
const digitSix = document.querySelector('.sixbtn');
const digitSeven = document.querySelector('.sevenbtn');
const digitEight = document.querySelector('.eightbtn');
const digitNine = document.querySelector('.ninebtn');
const digitZero = document.querySelector('.zerobtn');*/
const addBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const point = document.querySelector('.point');
const history = document.querySelector('.history');
const results = document.querySelector('.results');
const backSpaceBtn = document.querySelector('.backspace');

/*const container = document.querySelector('.container');

container.addEventListener('click', digitButtonFunc, false);

function digitButtonFunc(e) {
    if (e.target !== e.currentTarget) {
        assignFirstAndSecond(e.target);
    }
    e.stopPropagation();
}; */

document.querySelectorAll('.numbers').forEach(item => {
    item.addEventListener('click', function(e) {
        assignFirstAndSecond(e.target);
    });
});

let num1 = '';
let num2 = '';
let operator = null;
let equalsIndicator = false;
let result = '';

function operate(operator, num1, num2) {
    if (operator == '+') {
         return add(num1, num2);
    } else if (operator == '-') {
         return  subtract(num1, num2);
    } else if (operator == 'x') {
        return multiply(num1, num2);
    } else if (operator == '÷') {
        return  divide(num1, num2);
    };
};

function stringToNumber() {
    num1 = parseFloat(num1, 10);
    num2 = parseFloat(num2, 10);
};

function evaluateExpression() {
    if (num2 == '') {
        return;
    }
    stringToNumber();
    result = operate(operator, num1, num2);
    display.textContent = `${result}`;
    addToHistory();
    num1 = `${result}`;
    num2 = '';
    operator = null;
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
    display.textContent += digit.textContent;
};

function clear() {
    num1 = '';
    num2 = '';
    display.textContent = '';
    operator = null;
    equalsIndicator = false;
};

function operatorFunction(item) {
    display.textContent += ' ' + `${item.textContent}` + ' ';
    operator = `${item.textContent}`;
    equalsIndicator = false;
};

function addToHistory() {
    let newDiv = document.createElement('div');
    newDiv.textContent = `${num1}` + ' ' + `${operator}` + ' ' + `${num2}` + ' ' + '=' + ' ' + `${result}`;
    results.prepend(newDiv);
};

function backSpace() {
    if (display.textContent[display.textContent.length - 2] == `${operator}`) {
        display.textContent = display.textContent.slice(0, (display.textContent.length - 3));
        operator = null;
    } else {
        display.textContent = display.textContent.slice(0, (display.textContent.length - 1));
    };
    if (num2 != '') {
        num2 = num2.slice(0, (num2.length - 1));
    } else if (num1 != '' && num2 == '' && operator == null) {
        num1 = display.textContent;
    };
    console.log(num1);
    console.log(num2);
};

/*digitOne.addEventListener('click', function() {
    assignFirstAndSecond(this);
});

digitTwo.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitThree.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitFour.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitFive.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitSix.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitSeven.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitEight.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitNine.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

digitZero.addEventListener('click', function(){
    assignFirstAndSecond(this);
});

point.addEventListener('click', function(){
    assignFirstAndSecond(this);
}); */

addBtn.addEventListener('click', function(){
    evaluateExpression();
    operatorFunction(this);
    console.log(num1);
    console.log(num2);
});

subtractBtn.addEventListener('click', function(){
    evaluateExpression();
    operatorFunction(this);
});

multiplyBtn.addEventListener('click', function(){
    evaluateExpression();
    operatorFunction(this);
});

divideBtn.addEventListener('click', function(){
    evaluateExpression();
    operatorFunction(this);
});

equalBtn.addEventListener('click', function(){
    evaluateExpression();
    equalsIndicator = true;
    console.log(num1);
    console.log(num2);
});

clearBtn.addEventListener('click', function() {
    clear();
});

backSpaceBtn.addEventListener('click', function() {
    backSpace();
});
