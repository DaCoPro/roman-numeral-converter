//cache
const userInput = document.getElementById('inputField');

output = document.getElementById('outputField')

//event listeners
document.getElementById('convertButton').addEventListener('click', runConversion);


function runConversion () {
    

    //update outputField HTML contents
    output.innerHTML = userInput.value;
}

