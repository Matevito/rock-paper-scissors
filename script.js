//variables to follow the game through the rounds
let game_round = 0;
let player_points = 0;
let machine_points = 0;

//selector to show the player how the game is being played

const game_message = document.querySelector("#round_message");
const round_counter = document.querySelector("#round_counter");
const human_counter =  document.querySelector("#human_counter");
const machine_counter = document.querySelector("#machine_counter");

const player_rock = document.querySelector("#rock");
const player_paper = document.querySelector("#paper");
const player_scissors = document.querySelector("#scissors");


//FUNCTIONS...

function computer_play(){
    random_num = Math.floor(Math.random()*3)+1;
    switch (true) {
        case random_num == 1:
            return "rock"
        case random_num == 2:
            return "paper"
        case random_num == 3:
            return "scissors"
    }
}

function play_round (player_selection){
    let computer_selection = computer_play();
    console.log ("p: "+ player_selection);
    console.log ("pc: "+ computer_selection);

    switch (true) {
        case player_selection == computer_selection:
            game_message.textContent = "it's a draw";
            return "it's draw"
        case (player_selection == "rock" && computer_selection == "paper"):
            game_message.textContent = "you lose!";
            return false

        case (player_selection == "rock" && computer_selection == "scissors"):
            game_message.textContent = "you win!";
            return true
         
        case (player_selection == "paper" && computer_selection == "rock"):
            game_message.textContent = "you win!";
            return true

        case (player_selection == "paper" && computer_selection == "scissors"):
            game_message.textContent = "you lose!";
            return false

        case (player_selection == "scissors" && computer_selection == "rock"):
            game_message.textContent = "you lose!";
            return false

        case (player_selection == "scissors" && computer_selection == "paper"):
            game_message.textContent = "you win!";
            return true
    }
}

function change_message (round_result){
    game_round ++;
    round_counter.textContent = game_round;
    if (round_result == true) {
        player_points += 1;
        human_counter.textContent = player_points;
        if (player_points == 5){
            game_message.textContent = "The human wins!";
        }
        
    }
    else if (round_result == false){
        machine_points += 1;
        machine_counter.textContent = machine_points;
        if (machine_points == 5){
            game_message.textContent = "The machine wins!";
        }
        
    }
    else {
        return
    }
}

//Events with the buttons.

player_rock.addEventListener("click", function(e){
    let result = play_round("rock");
    change_message (result);
});

player_paper.addEventListener("click", function(e){
    let result = play_round("paper");
    change_message (result);
});

player_scissors.addEventListener("click", function(e){
    let result = play_round ("scissors");
    change_message (result);
})

//todo: stop the game when a palyer has 5 points.

if (player_points == 5 || machine_points == 5){
    player_rock = "nothing";
    player_scissors = "nothing";
    player_paper = "nothing";
}