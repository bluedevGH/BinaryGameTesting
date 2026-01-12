// MAKE SURE YOU WAIT FOR THE WINDOW TO LOAD BEFORE CALLING ANY FUNCTIONShttp://127.0.0.1:3000/Site/game.html
let LineFinished = new CustomEvent ("LineFinished",{
    detail: {
      linecleared: 0,
    }
})
let LineCreated = new CustomEvent ("LineCreated",{
    detail: {
      LinesOnScreen: 0,
    }
})
let myRandomNumber;
let myBinary;
let myRandomisedBinary;
let myTemporaryArray = [false, false, false, false, false, false, false, false];
let lineCounter = 0;
let intervalId = null;

function CreateLine(LineNumber) { // increase linenumber when caling
  let RandomInt = Math.floor(Math.random()*256);
  let BinaryAns = createBinary(RandomInt);
  let BinaryArray = [false, false, false, false, false, false, false, false];
  randomiseBinaryFunc(BinaryArray, BinaryAns);
  addRow(BinaryArray, RandomInt);
  LineCreated.detail.LinesOnScreen ++;
  window.dispatchEvent(LineCreated);
  let QArray = this.document.getElementsByClassName("Question" + String(LineNumber))
  Array.from(QArray).forEach((element) => {
    element.addEventListener("click", () => {
      if (compareArrays(BinaryArray, BinaryAns)) {
        LineFinished.detail.linecleared = LineNumber;
        window.dispatchEvent(LineFinished)
      }
    })
  })
}



// two different arrays? check above

window.addEventListener('load', function(){
  CreateLine(lineCounter);
  lineCounter ++;
  CreateLine(lineCounter);
  lineCounter ++;
  CreateLine(lineCounter);
  lineCounter ++;
  intervalId = setInterval(() => {
    CreateLine(lineCounter);
    lineCounter ++;
    }, 5000);
})

/* we need to run a LOOP.
Ever single time the game starts, we need to run a loop of questions -- do you mean set questions or 
Above is correct, and should work if called twice

we could have one loop creating and one checking


Layout:


File 1 : CoreGameplay

Creates Questions when play button is pressed (3)
Ever 8 seconds, creates a question
Creates a question when also called to


File 2: Checking
Checks each question, until done
Removes the question once done 
Calls for another question if none are on screen
Tallies score


*/
