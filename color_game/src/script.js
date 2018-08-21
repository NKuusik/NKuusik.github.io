import './styles.scss';

let guessThisColor = $("#guess-color");
let easyMode = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function pickColor()    {
    $("td").on("click", function () {
        if ($(this).css("background-color") === guessThisColor.text())  {
            $("td").removeClass("wrong-answer");
            $("td, h1").css("background-color", $(this).css("background-color"));
            $("#message").text("Correct!");
            $("#new-colors").text("Play again?");
        } else {
            $(this).addClass("wrong-answer");
            $("#message").text("Try again");
        }
      })
}

function setNewColors() {
    let randomPickedColor;
    $("td").each(function () {
        let colorValue = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
        $(this).css("background-color", colorValue);
      })
    if (easyMode = true) {
        randomPickedColor = $("td").eq(getRandomInt(3)).css("backgroundColor");
    } else {
        randomPickedColor = $("td").eq(getRandomInt(6)).css("backgroundColor"); 
    }   
    $("h1").css("backgroundColor", "");
    $("#message").text("");
    $("#new-colors").text("New game");
    guessThisColor.text(randomPickedColor);      
}

function launchButtons()  {
    $("button").on("click", function () {
        $("button").removeClass("button-active");
        $(this).addClass("button-active");
      })
    
    // Button-specific event listener
    $("#easy").on("click", function () {
        $(".optional-colors").addClass("easy-mode-on");
        easyMode = true;
        setNewColors();
      })
    
    $("#hard").on("click", function () {
        $(".optional-colors").removeClass("easy-mode-on");
        easyMode = true;
        setNewColors();
      }) 
    $("#new-colors").on("click", setNewColors);
}


pickColor();
setNewColors();
launchButtons();



