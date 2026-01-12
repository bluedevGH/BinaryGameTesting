let score = 0;
let finalscore;
let endOfGame = new CustomEvent ("GameEnded",{
    detail: {
      finalScore: 0,
      questionsAnswered: 0
    }
})

const compareArrays = (a, b) => {
  if (a.length !== b.length) return false; // different length = booted (should be 8)
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false; // if each value not same, returns false
  }
  return true; // only returns true if full array is true
};
window.addEventListener('LineFinished', function (LineWhichFinished) {
    let LineCleared = LineWhichFinished.detail.linecleared;
    let FinishedLine = document.getElementsByClassName("Question" + String(LineCleared))
    Array.from(FinishedLine).forEach((element) => {
      element.remove();
    });
    score +=10;
    document.getElementById("scoreText").innerText = (`Score: ${score}`)
    LineCreated.detail.LinesOnScreen -=1;
    console.log(score);
 }
)
window.addEventListener("LineCreated", function(TheEvent) {
  let LOS = TheEvent.detail.LinesOnScreen;
  if (LOS > 8) {
    console.log("BOOM!");
    clearInterval(intervalId);
    intervalId = null;
    endOfGame.detail.finalScore = score;
    finalscore = score;
    let questionsAnswered = score / 10;
    const myOverlay = document.createElement("div");
    myOverlay.classList.add("myOverlay");
    document.body.appendChild(myOverlay);
    console.log(myOverlay.parentElement);
    const deathPanel = document.createElement("div");
    const statsPanel = document.createElement("div");
    const loseHeader = document.createElement("p")
    const finalScoreText = document.createElement("p")
    const questionsAnsweredText = document.createElement("p")
    const breakElement = document.createElement("br")
    const breakElement2 = document.createElement("br")
    const breakElement3 = document.createElement("br")
    const playAgain = document.createElement("button")
    playAgain.onclick = function() {window.location.href="index.html"}
    playAgain.textContent = "BACK TO MENU"
    playAgain.classList.add("playAgain")
    loseHeader.textContent = `YOU LOST`
    finalScoreText.textContent = `Final Score: ${finalscore}`
    questionsAnsweredText.textContent = `Questions Answered: ${questionsAnswered}`
    statsPanel.classList.add("statsPanel");
    statsPanel.id="statsPanel";
    console.log(statsPanel.id)
    myOverlay.appendChild(deathPanel);
    myOverlay.appendChild(statsPanel);
    statsPanel.append(loseHeader)
    statsPanel.append(breakElement)
    statsPanel.append(finalScoreText)
    statsPanel.append(breakElement2)
    statsPanel.append(questionsAnsweredText)
    statsPanel.append(breakElement3)
    statsPanel.append(playAgain)
  }
})

/* File 2: Checking
Checks each question, until done
Removes the question once done 
Calls for another question if none are on screen
Tallies score
*/
