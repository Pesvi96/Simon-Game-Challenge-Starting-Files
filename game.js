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
