//// MAKING SAMPLE DATA
const user1Data = {
    userName: 'BitZin',
    Answered: 186,
    Correct: 163,
    gamesPlayed: 17,
    Won: 10,
    Lost: 7
};

console.log(user1Data);

let dataArray = Object.values(user1Data);

console.log(dataArray);

//// rest of code




function disableButton() {
    genButton = document.getElementById('genCode').onclick=null;
    genButton = document.getElementById('genCode').style.cursor='not-allowed';
}

function generateCode() {
    const validNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let code = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * validNums.length);
        code += validNums[randomIndex];
    }

    codeLabel = document.getElementById('gameCodeLabel').innerHTML = code;
    genButton = document.getElementById('genCode').innerHTML = 'Code Generated!';
    disableButton();

    const button = document.getElementById('genCode');
    button.classList.add('clicked');

    button.addEventListener('mouseenter', () => {
        if (button.classList.contains('clicked')) {
            button.innerHTML = 'Another code cannot be generated';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (button.classList.contains('clicked')) {
            button.innerHTML = 'Code Generated!';
        }
    });
    
    console.log('Game Code:', code);
};

function checkDetails() {
    pwdInput = document.getElementById('password').value;
    usrInput = document.getElementById('username').value;
    userDisplay = document.getElementById('userDisplay');

    if (usrInput === 'BitZin' && pwdInput === 'Password123') {
        userDisplay.innerHTML = 'BitZin'
    };
};

console.log("encryption.js")
