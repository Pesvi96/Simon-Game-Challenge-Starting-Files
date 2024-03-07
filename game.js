var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];



// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4);
//     alert(randomNumber);
// }

function makeButtonSound(){
    switch (randomChosenColour) {
        case "red":
            var sound = new Audio("./sounds/red.mp3");
            break;
        case "blue":
            var sound = new Audio("./sounds/blue.mp3");
            break;
        case "green":
            var sound = new Audio("./sounds/green.mp3");
            break;
        case "yellow":
            var sound = new Audio("./sounds/yellow.mp3");
            break;
        default:
            break;
    }
    sound.play();
}

var randomChosenColour = "red";

// var randomNumber = Math.floor(Math.random() * 4);
// var randomChosenColour = buttonColors[randomNumber];
// $("#" + randomChosenColour).fadeOut("fast").fadeIn("fast");

// gamePattern.push(randomChosenColour);

alert("hi");

$("button").on("click", )