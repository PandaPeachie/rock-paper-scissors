let playerTotal = 0;
let cpuTotal = 0;
document.getElementById("reset").style.display = "none";

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let computerResults = options[Math.floor(Math.random()*options.length)];
    console.log("CPU: " + computerResults);
    return computerResults;
}

function playRound(playerSelection, computerSelection) {
    document.getElementById("CPU").src = computerSelection+".jpg";
    document.getElementById("Player").src = playerSelection+".jpg";
    console.log("User: " + playerSelection)
    if(playerSelection == 'rock' && computerSelection == 'scissors' || 
            playerSelection == 'paper' && computerSelection == 'rock' 
                    || playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Win');
        playerTotal ++;
        document.getElementById("score").innerHTML = "Player: "+playerTotal;
        
    } else if(playerSelection == computerSelection) {
        console.log("Tie!")
    } else {
        console.log('Lose');
        cpuTotal ++;
        document.getElementById("score2").innerHTML = "CPU: "+cpuTotal;
    }    
    
    findWinner();
    
    

}


function findWinner(){

    if(playerTotal >= 5 || cpuTotal >= 5){
        if(playerTotal > cpuTotal) {
            document.getElementById("score3").innerHTML = "You win!";
        } else if (playerTotal < cpuTotal) {   
            document.getElementById("score3").innerHTML = "CPU wins!";  
        }
        document.getElementById("score3").style.display = "block";
        document.getElementById("reset").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
}

function myFunction(section) {
    var x = document.getElementById(section);
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
        
    }
  }

  function resetScores() {
    playerTotal = 0;
    document.getElementById("score").innerHTML = "Player: "+playerTotal;
    cpuTotal = 0;
    document.getElementById("score2").innerHTML = "CPU: "+cpuTotal;
    document.getElementById("reset").style.display = "none";
    document.getElementById("container").style.display = "block";
    document.getElementById("CPU").src = "default.jpg";
    document.getElementById("Player").src = "default.jpg";
    
  }

 document.getElementById("reset").addEventListener("click", function(){myFunction('score3'); resetScores()});
 document.getElementById("scissors").addEventListener("click", function(){playRound("scissors", computerPlay())});
 document.getElementById("paper").addEventListener("click", function(){playRound("paper", computerPlay())});
 document.getElementById("rock").addEventListener("click", function(){playRound("rock", computerPlay())});



