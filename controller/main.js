//cache
const input = document.getElementById('inputField');
const outputElement = document.getElementById('outputField');
let userInput = null;
let conversion = '';

//event listeners
document.getElementById('convertButton').addEventListener('click', runConversion);

//Roman numerals: I = 1, V = 5, X = 10

function runConversion () {
    
    evaluateUserInput();
    clearLastNumerals();
    
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