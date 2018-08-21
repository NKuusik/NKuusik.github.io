import './styles.scss';

// //--//

// let leGreen = document.querySelector("#hplogo");
// leGreen.setAttribute("src","https://i.ytimg.com/vi/hvKBlIyeTOE/hqdefault.jpg");

// let pureCash = 72;
// let urRichMotherFucker = 272;

// function winMoney() {
    
//     setInterval(function()  {
        
// 		urRichMotherFucker = urRichMotherFucker + 5;
//         pureCash = pureCash + 5;
//         leGreen.style.height = `${pureCash}px`;
//         leGreen.style.width = `${urRichMotherFucker}px`;
//     }, 100);
// }

// winMoney();
'use strict'

let playerButtons = document.querySelectorAll(".playerButton");
let resultValues = document.querySelectorAll(".results");
let playingTo = document.querySelector("#playing-to");

function manipulateScore() {
    let gameOver = false;
    for (let i = 0; i < playerButtons.length; i++)  {
        playerButtons[i].addEventListener("click", function(){
            if (!gameOver)  {
                    for (let b = 0; b < resultValues.length; b++)   {
                        console.log(playerButtons[i]); //resultValues[b]);
                        if (checkForClassMatch(playerButtons[i], resultValues[b]))  {
 //                       if (playerButtons[i].classList[0] === resultValues[b].classList[0]) { // checkWhetherClassesMatch(object1, object2) {} vt https://stackoverflow.com/questions/28069638/check-if-function-returns-true-to-execute-another-function
                            let score = Number(resultValues[b].textContent);
                            score++;
                            resultValues[b].textContent = score;
                            if (score >= Number(playingTo.textContent)) {
                                resultValues[b].style.color = "green";
                                gameOver = true;
                            }
                        }
                    }
                }

            })

        }

    }


function resetScore()   {
    document.querySelector("#reset").addEventListener("click", function () {
        for (let i = 0; i < resultValues.length; i++)  {
              resultValues[i].textContent = 0;
              resultValues[i].style.color = "black";
        }
        manipulateScore();  
    })
}

function setMaxScore()  {
    let inputField = document.querySelector("input[type=number]"); 
    inputField.addEventListener("change", function () {
        playingTo.textContent = inputField.value;
      })
}

function checkForClassMatch(dom1, dom2) {
    for (let i = 0; i < dom1.classList.length; i++)   {
        for (let b = 0; b < dom2.classList.length; b++)    {
            console.log(dom1.classList);
            if (dom1.classList[i] === dom2.classList[b])    {
                return true;
            }
        }
    }
    return false;
}


// Funktsiooni mõtte: function checkWhetherClassesMatch(object1, object2) {}

setMaxScore();
manipulateScore();
resetScore();


