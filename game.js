// var gamePattern = [];
// var buttonColors = ["red", "blue", "green", "yellow"];
// var userClickedPattern = [];



// function nextSequence(){
//     var randomNumber = Math.floor(Math.random() * 4);
//     console.log(randomNumber);

// }

// function makeButtonSound(){
//     switch (buttonColour) {
//         case "red":
//             var sound = new Audio("./sounds/red.mp3");
//             break;
//         case "blue":
//             var sound = new Audio("./sounds/blue.mp3");
//             break;
//         case "green":
//             var sound = new Audio("./sounds/green.mp3");
//             break;
//         case "yellow":
//             var sound = new Audio("./sounds/yellow.mp3");
//             break;
//         default:
//             break;
//     }
//     sound.play();
// }


// function whichButtonClicked(){
//     var buttonColour = $(this).attr('id');
//     userClickedPattern.push(buttonColour);
//     console.log(userClickedPattern);
//     return buttonColour;
// }

// var randomChosenColour = "red";

// // var randomNumber = Math.floor(Math.random() * 4);
// // var randomChosenColour = buttonColors[randomNumber];
// // $("#" + randomChosenColour).fadeOut("fast").fadeIn("fast");

// // gamePattern.push(randomChosenColour);


// $("div[type='button']").on("click", whichButtonClicked);




// ------------------------------------- my code --------------------------------------------------------------


var gamePattern = [];
var playerPattern = [];
var buttonColours = ["green", "red", "yellow", "blue"];
var button = $("div[type='button']");
var gameOn = false;


function generateRandNumber(){
    var randNumber = Math.floor(Math.random() * 4);
    return randNumber;
}


/**
 * Generates random colour string from buttonColours array
 * @returns {string} one of the colours of simon
 */
function generateRandColour(){
    return buttonColours[generateRandNumber()];
}

function nextSequence(){
    var nextButton = generateRandColour();
    gamePattern.push(nextButton);
    makeSound(nextButton);
    $("#" + nextButton).fadeOut("fast").fadeIn("fast");
    $('h1').text("Level " + gamePattern.length);
    console.log("Game sequence: " + gamePattern);
}


function makeSound(buttonColor){
    var sound = new Audio("./sounds/" + buttonColor + ".mp3")
    sound.play();
}

function buttonPressed(){
    var button = $(this);
    var buttonColor = button.attr('id');
    button.addClass("pressed"); 

    setTimeout(function(){
        button.removeClass("pressed");
    }, 200);

    makeSound(buttonColor);
    playerPattern.push(buttonColor);
    console.log("Player sequence: " + playerPattern);

    checkAnswer();
}

function compareArrays(){
    for (i=0; i<playerPattern.length; i++){
        if (gamePattern[i] !== playerPattern[i]){
            return false;
        }
    }
    return true;
}

function checkAnswer(){
    console.log(compareArrays());
    if (compareArrays() === false){
        gamePattern = [];
        playerPattern = [];
        var sound = new Audio("./sounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
    

        $("h1").text("Game Over, Press Any Key to Restart");
        // $(document).on("keypress", game);

        console.log(gamePattern);
        gameOver();
    }

    else if (playerPattern.length === gamePattern.length){
        playerPattern = [];
        setTimeout(function(){
            nextSequence();
        }, 1000);
    };
    

}




function gameStart(){
    if (!gameOn){
        gameOn = true;
        $(document).off("keypress", gameStart);
        button.on("click", buttonPressed);
        nextSequence();
    }
}

function gameOver(){
    if (gameOn){
        gameOn = false;
        $(document).on("keypress", gameStart);
        button.off("click", buttonPressed);
    }
}



// button event listener


// keypress event listener
$(document).on("keypress", gameStart);





//---------------------

// function simonSaysAnimation(){
//     for (i=0; i<gamePattern.length; i++){
//         var button = $("#" + gamePattern[i]);
//         button.delay(500).fadeOut("fast").fadeIn("fast");

//     }
//     console.log(gamePattern);
// }