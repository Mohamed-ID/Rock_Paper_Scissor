let [paper, rock, scissor] = ["fa-solid fa-hand", "fa-solid fa-hand-back-fist", "fa-solid fa-hand-scissors"];
let myCard = [paper, rock, scissor];
let iconCard = document.querySelector("#bot i");
let boxWinLose = document.getElementById("stat");

function autoSelect(random) {
    if(random === rock) {
        document.getElementById("bot").className = "mybot rock";
    } else if(random === paper) {
        document.getElementById("bot").className = "mybot paper";
    } else if(random === scissor) {
        document.getElementById("bot").className = "mybot scissor";
        iconCard.style.cssText = "transform: rotate(-95deg);"
    }
    iconCard.className = `${random}`
}

function checkWin(optionPlayer, target, random) {
    let botCard = document.getElementById("bot");
    let optionBot = botCard.className.split('mybot').join("").trim();
    switch (optionPlayer) {
        case "paper":
            if(optionBot === "rock") {
                showWin("You Win", target, random);
            } else if(optionBot === "paper") {
                showWin("Draw", target, random);
            } else if(optionBot === "scissor") {
                showWin("You Lose", target, random);
            }
            break;
        case "rock":
            if(optionBot === "rock") {
                showWin("Draw", target, random);
            } else if(optionBot === "paper") {
                showWin("You Lose", target, random);
            } else if(optionBot === "scissor") {
                showWin("You Win", target, random);
            }
            break;
        case "scissor":
            if(optionBot === "rock") {
                showWin("You Lose", target, random);
            } else if(optionBot === "paper") {
                showWin("You Win", target, random);
            } else if(optionBot === "scissor") {
                showWin("Draw", target, random);
            }
            break;
    }
}

function showWin(winlose, target, random) {
    setTimeout(() => {
        boxWinLose.children[0].innerHTML = `${winlose}`;
        boxWinLose.style.display = "flex";
    }, 500);
    setTimeout(() => {
        // If random was scissor
        if(random === scissor) {
            iconCard.style.cssText = "transform: rotate(0deg);"
        }


        // Reset Stryling
        boxWinLose.style.display = "none";
        iconCard.className = "fa-solid fa-question"
        document.getElementById("bot").className = "mybot";
        target.style.cssText = `      transition: all 0.3s ease;
                                        transform: translateY(0px);`;
    }, 2000);
}

onclick = (e) => {
    if(e.target.className === "playerCard") {
        let random = myCard[Math.floor(Math.random() * 3)];
        let target = e.target;
        e.target.style.cssText = `      transition: all 0.3s ease;
                                        transform: translateY(-30px);`;
        autoSelect(random);
        checkWin(e.target.id, target, random);
    }
}
