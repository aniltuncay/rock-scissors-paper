const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
let userSelection = 0;
let computerSelection = 0;
document.getElementById("computerChoice").style.display = "none";
document.getElementById("result").style.display = "none";
document.getElementById("afterUserChoice").style.display = "none";
let winner = null;
let resultMessage = null;
let userImgLink = null;

const firstDisplay = () => {
    rockButton.addEventListener("click", () => {
        showHideElements();
        userSelection = 1;
        userImgLink = "img/rock.png"
        randomComputerChoice(userSelection, userImgLink);
    })
    paperButton.addEventListener("click", () => {
        showHideElements();
        userSelection = 2;
        userImgLink = "img/paper.png"
        randomComputerChoice(userSelection, userImgLink);
    })
    scissorsButton.addEventListener("click", () => {
        showHideElements();
        userSelection = 3;
        userImgLink = "img/scissors.png"
        randomComputerChoice(userSelection, userImgLink);
    })
}
firstDisplay();
const showHideElements = () => {
    document.getElementById("userChoice").style.display = "none";
    document.getElementById("computerChoice").style.display = "inline";
    document.getElementById("result").style.display = "flex";
    document.getElementById("afterUserChoice").style.display = "inline";
}
const randomComputerChoice = (userSelection, userImgLink) => {
    computerSelectionArr = ["img/rock.png", "img/paper.png", "img/scissors.png"]
    computerSelectionIndex = Math.floor((Math.random() * 3))

    if (computerSelectionArr[computerSelectionIndex] === "img/rock.png") {
        computerSelection = 1;
    }
    else if (computerSelectionArr[computerSelectionIndex] === "img/paper.png") {
        computerSelection = 2;
    }
    else {
        computerSelection = 3;
    }

    compareChoices(userSelection, computerSelectionArr[computerSelectionIndex], computerSelection, userImgLink);
}
const compareChoices = (userSelection, computerChoiceImg, computerSelection, userImgLink) => {
    if (userSelection === computerSelection) {
        winner = "Nobody";
        resultMessage = "Same choice,Draw"
        console.log("computer selection : " + computerSelection)
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 1 && computerSelection === 2) {
        winner = "Computer";
        resultMessage = "paper wraps the rock"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 1 && computerSelection === 3) {
        winner = "User";
        resultMessage = "rock broke the scissors"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 2 && computerSelection === 3) {
        winner = "Computer";
        resultMessage = "Scissors cut the paper"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 2 && computerSelection === 1) {
        winner = "User";
        resultMessage = "paper wraps the rock"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 3 && computerSelection === 1) {
        winner = "Computer";
        resultMessage = "rock broke the scissors"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
    if (userSelection === 3 && computerSelection === 2) {
        winner = "User";
        resultMessage = "Scissors cut the paper"
        resultHtml(resultMessage, winner, computerChoiceImg, userImgLink)
    }
}
const resultElement = document.getElementById("result");
const resultUserChooseElement = document.getElementById("resultUserChoose");
const resultComputerChooseElement = document.getElementById("resultComputerChoose");

const resultHtml = (resultMessage, winner, computerChoiceImg, userImgLink) => {

    const computerChooseHeaderElement = document.createElement("h1");
    const computerChooseImgElement = document.createElement("img");
    const userChooseHeaderElement = document.createElement("h1");
    const userChooseImgElement = document.createElement("img");
    const winnerText = document.createElement("p");
    const resultMessageText = document.createElement("p");
    const restartButton = document.createElement("button");

    computerChooseHeaderElement.textContent="COMPUTER CHOOSE"
    computerChooseImgElement.src = computerChoiceImg;
    resultComputerChooseElement.appendChild(computerChooseHeaderElement);
    resultComputerChooseElement.appendChild(computerChooseImgElement)
    userChooseHeaderElement.textContent="USER CHOOSE"
    resultUserChooseElement.appendChild(userChooseHeaderElement);
    userChooseImgElement.src = userImgLink;
    resultUserChooseElement.appendChild(userChooseImgElement);
    winnerText.textContent = "WINNER : " + winner;
    resultMessageText.textContent = resultMessage;
    resultMessageText.className="resultMessageStyle"
    resultElement.appendChild(resultMessageText);
    resultElement.appendChild(winnerText);
    restartButton.textContent="RESTART GAME";
    console.log(resultElement);
    console.log(resultUserChooseElement);
    console.log( resultComputerChooseElement)
    restartButton.addEventListener("click",function(){
        window.location.reload()
    })
    resultElement.appendChild(restartButton)
}
