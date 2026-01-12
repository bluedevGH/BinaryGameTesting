let questionNumber = 0;  // Used to keep track of how many questions have been sent


function createBinary(newNumber) { // create a binary value (array of true / false)

    // let newNumber = Math.floor(Math.random() * 256);
    let binaryNumber = [false, false, false, false, false, false, false, false]; // binary number array in true/false

    const divisibleNumbers = [128,64,32,16,8,4,2,1]; // numbers to divide from

    for (let i = 0; i < divisibleNumbers.length; i++) {
        if (newNumber >= divisibleNumbers[i]) {
            newNumber -=divisibleNumbers[i];
            binaryNumber[i] = true;
        }
    }
    return (binaryNumber);
};

    
function randomiseBinaryFunc(TheirRandomisedArray ,CorrectBinaryArray) { // returns array of randomised binary values, different to one given
    // TheirRandomisedArray = array to change / randomise
    // CorrectBinaryArray = array to check to make sure its not the same (contains correct value)

    function randomiseBinary() {
        for (let i = 0; i < 8; i++) {
            let randomTrue = Math.floor(Math.random() * 2);
            if (randomTrue === 0) {
                TheirRandomisedArray[i] = true;
            }
        }
    }
    randomiseBinary(CorrectBinaryArray);
    while (CorrectBinaryArray === TheirRandomisedArray){
        randomiseBinary(CorrectBinaryArray);
    }
};



// How to make addRow function:
// Needs: ID for the type of button
// Class for Q number (given by binary calculator / whatever creates qs)

// Every time button pressed - checks if correct - matching correct value   (CHECK IF randomisedBinary IS CORRECT, MATCH IT AGAINST CREATEBINARY)
// Once all correct, remove Q, add score




// Checks if all correct after every button press (small so should be fine)

function createQuestionButton(ButtonNumber, QNumber, binaryValue) { // creates quest button
    const newButton = document.createElement("button");

    function IOSwitch() {
        if (newButton.innerText == "1") {
            newButton.innerText = "0" // changes number on website
            binaryValue[ButtonNumber] = false; // changes val in the array
        } else {
            binaryValue[ButtonNumber] = true;
            newButton.innerText = "1"
        }
    }

    let newContent = binaryValue[ButtonNumber] ? "1" : "0";

    newButton.style.backgroundColor = "#fcbc46ff";
    newButton.id = QNumber + "Button" + ButtonNumber; // id = which button it is on row (x)    may have to be changed to Question0Button0 format for ids
    newButton.className = "Question" + QNumber; // class = question number (y)
    newButton.onclick = IOSwitch;
    newButton.append(newContent); document.getElementById("Container").appendChild(newButton);
}

function createTextButton (InternalVal, QNumber) {
    const newDiv = document.createElement("div");
    let newContent = document.createTextNode("");
    newContent = InternalVal;
    if (InternalVal === "=") {
        newDiv.id = QNumber + " = div";
        newDiv.style.backgroundColor="lightgreen";
    } else{
        newDiv.id = QNumber +" ans div";
        //newDiv.rel = 'stylesheet';
        //newDiv.href = 'styles.css';
        newDiv.style.backgroundColor = "pink";
    }
    newDiv.className = "Question" + QNumber;
    newDiv.append(newContent); document.getElementById("Container").appendChild(newDiv);
}

function addRow(binaryValue, actualValue, ) { // Takes random binary value, creates row of 9 values
    // to create a row, you need 8 q buttons, 1 = box, 1 "answer" box
    for(let i= 0; i < 8; i++) { // creates 8 question buttons
        createQuestionButton(i, questionNumber, binaryValue);
    }
    createTextButton("=", questionNumber);
    createTextButton(String(actualValue), questionNumber); // adding css has to be done by either finding id or 
    questionNumber ++;
}

/*window.onload = function() {
    console.log("loaded!");
    createQuestionButton(1, 1, true);
} */
