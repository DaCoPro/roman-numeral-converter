//cache
const input = document.getElementById('inputField');
const outputElement = document.getElementById('outputField');
let userInput = null;
let conversion = '';

//event listeners
document.getElementById('convertButton').addEventListener('click', runConversion);

//Roman numerals: I = 1, V = 5, X = 10, 

function runConversion () {
    
    evaluateUserInput();
    clearLastNumerals();
    
    findThousands();
    findFiveHundreds();
    findHundreds();
    findFifties();
    findTens();
    findFives();
    findOnes();
    
    renderNumerals();
}


function evaluateUserInput () {
    userInput = input.value;
}
function clearLastNumerals () {
    conversion = '';
    outputElement.innerHTML = conversion;
}
function findThousands () {
    if (userInput >= 1000) {
        conversion += 'Thousand';
        userInput -= 1000;
        findThousands();
    }
}
function findFiveHundreds () {
    if (userInput >= 500) {
        conversion += 'FiveHundred';
        userInput -= 500;
        findFiveHundreds();
    }
}
function findHundreds () {
    if (userInput >= 100) {
        conversion += 'Hundred';
        userInput -= 100;
        findHundreds();
    }
}
function findFifties () {
    if (userInput >= 50) {
        conversion += 'Fifty';
        userInput -= 50;
        findFifties();
    }
}
function findTens () {
    if (userInput >= 10) {
        conversion += 'X';
        userInput -= 10;
        findTens();
    }
}
function findFives () {
    if (userInput >= 5) {
        conversion += 'V';
        userInput -= 5;
        findFives();
    }
}
function findOnes () {
    if (userInput > 3) {
        conversion += "IV";
        userInput -= 4;
    } else if (userInput >= 1) {
        conversion += "I";
        userInput -= 1;
        findOnes();
    }
}
function renderNumerals () {
    outputElement.innerHTML = conversion;
}