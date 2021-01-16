
const Author = "Mehul";
let  userScore = 0;
let compScore = 0;
const user = document.getElementById('user');
const computer = document.getElementById('comp');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('Result');
let options = ['rock','paper','scissors'];
result.style.textAlign = "center";
let answer = [
    "You and the computer play the same! Draw.",
    "You play rock and computer plays paper! You loose",
    "You play paper and computer plays scissors! You loose",
    "You play scissors and computer plays rock! You loose",
    "You Play rock and computer plays scissors!You Win",
    "You play paper and computer plays rock! You Win",
    "You play scissors and computer plays paper! You Win"
];


//main function
function mainGame(){
    rock.addEventListener('click',function() {
        toDo('rock');
    });
    paper.addEventListener('click',function() {
        toDo('paper');
    });
    scissors.addEventListener('click',function() {
        toDo('scissors');
    });
}
mainGame();
//user
function toDo(chooseWhat) {
    
    console.log(chooseWhat);
    computerPlays();
    
    //computer
    function computerPlays() {
      
        let random = Math.floor(Math.random() * 3);
        console.log("Conputer plays",options[random]);
        winner();
        //winner
        function winner() {
            if(chooseWhat == "rock" && options[random] == "paper") {
                compScore++;
                computer.innerHTML = compScore;
                result.innerHTML = answer[1];
                
            }else if(chooseWhat == "paper" && options[random] == "scissors") {
                compScore++;
                computer.innerHTML = compScore;
                result.innerHTML = answer[2];
            }else if(chooseWhat == "scissors" && options[random] == "rock") {
                compScore++;
                computer.innerHTML = compScore;
                result.innerHTML = answer[3];
            }else if(chooseWhat == "rock" && options[random] == "scissors") {
                userScore++;
                user.innerHTML = userScore;
                result.innerHTML = answer[4];
            }
            else if (chooseWhat == "paper" && options[random] == "rock") {
                userScore++;
                user.innerHTML = userScore;
                result.innerHTML = answer[5];
            }
            else if(chooseWhat == "scissors" && options[random] == "paper") {
                userScore++;
                user.innerHTML = userScore;
                result.innerHTML = answer[6];
            }
            else {
                result.innerHTML = answer[0];
            }
        }
    
    
    }



        
}
function reset(){
    userScore = 0;
    compScore = 0;
    result.innerHTML = null;
    user.innerHTML = userScore;
    computer.innerHTML = compScore;
}























