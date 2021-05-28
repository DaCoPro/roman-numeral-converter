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
    
    findTens();
    findFives();
    findOnes();
    
    renderNumerals();
}


function evaluateUserInput () {
    userInput = input.value;
}

function findTens () {
    if (userInput >= 10) {
        conversion += 'X';
        userInput -= 10;
        console.log(userInput)
        findTens();
    }
}
function findFives () {
    if (userInput >= 5) {
        conversion += 'V';
        userInput -= 5;
        console.log(userInput)
        findFives();
    }
}
function findOnes () {
    if (userInput >= 1) {
        conversion += "I";
        userInput -= 1;
        console.log(userInput)
        findOnes();
    }
}
function renderNumerals () {
    outputElement.innerHTML = conversion;
}