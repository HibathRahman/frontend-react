

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorbtn = document.querySelector("#scissor");
const level = document.querySelector(".level");
const playerChoose = document.querySelector(".player-choose");
const playerScore = document.querySelector(".player-score");
const computerChoose = document.querySelector(".computer-choose");
const computerScore = document.querySelector(".computer-score");


    let pScore = 0;
    let cScore=0;
    let text =0;     
    

rockbtn.addEventListener("click" , function(){ 
    const names = ["Rock" , "Paper" , "Scissor"];
    const computerRandom = Math.floor(Math.random()*names.length);
    
    
    text = text + 1;
    level.textContent = text;
    playerChoose.textContent ="Rock";
    computerChoose.textContent = names[computerRandom];
    
 
    if("Rock"===names[computerRandom]){
        alert("Match Tie");
       
        pScore=pScore+1;
        cScore=cScore+1;
        playerScore.textContent = pScore;
        computerScore.textContent= cScore;
    }else if("Scissor"===names[computerRandom]){
        alert("Player Win");
        pScore=pScore+1;
        playerScore.textContent = pScore;
        
    }else if("Paper"===names[computerRandom]){
        alert("Computer Win")
        cScore=cScore+1;
        computerScore.textContent= cScore;
        
    }
    let resetText = text===5? (text=0 ,level.textContent = 0,
                   pScore = 0,playerScore.textContent = 0,
                   cScore=0,computerScore.textContent=0,
                   alert("Game over"))
                   :level.textContent=text ;            
})

paperbtn.addEventListener("click" , function(){ 
    const names = ["Rock" , "Paper" , "Scissor"];
    const computerRandom = Math.floor(Math.random()*names.length);
    
    
    text = text + 1;
    level.textContent = text;
    playerChoose.textContent ="Paper";
    computerChoose.textContent = names[computerRandom];

    if("Paper"===names[computerRandom]){
        alert("Match Tie");
       
        pScore=pScore+1;
        cScore=cScore+1;
        playerScore.textContent = pScore;
        computerScore.textContent= cScore;
    }else if("Scissor"===names[computerRandom]){
        alert("Computer Win");
        cScore=cScore+1;
        computerScore.textContent= cScore;
        
    }else if("Rock"===names[computerRandom]){
        alert("Player Win");
        pScore=pScore+1;
        playerScore.textContent = pScore;
        
    }
    let resetText = text===5? (text=0 ,level.textContent = 0,
        pScore = 0,playerScore.textContent = 0,
        cScore=0,computerScore.textContent=0,
        alert("Game over"))
        :level.textContent=text ;   
  
})

scissorbtn.addEventListener("click" , function(){ 
    const names = ["Rock" , "Paper" , "Scissor"];
    const computerRandom = Math.floor(Math.random()*names.length);
    
    
    text = text + 1;
    level.textContent = text;
    playerChoose.textContent ="Scissor";
    computerChoose.textContent = names[computerRandom];

    if("Scissor"===names[computerRandom]){
        alert("Match Tie");
       
        pScore=pScore+1;
        cScore=cScore+1;
        playerScore.textContent = pScore;
        computerScore.textContent= cScore;
    }else if("Paper"===names[computerRandom]){
        alert("Player Win");
        pScore=pScore+1;
        playerScore.textContent = pScore;
        
    }else if("Rock"===names[computerRandom]){
        alert("Computer Win");
        cScore=cScore+1;
        computerScore.textContent= cScore;
        
    }
    let resetText = text===5? (text=0 ,level.textContent = 0,
        pScore = 0,playerScore.textContent = 0,
        cScore=0,computerScore.textContent=0,
        alert("Game over"))
        :level.textContent=text ;   
 
})
// setTimeout(location.reload(),5000);


























// paperbtn.addEventListener("click" , function(){
//     text = text + 1;
//     level.textContent = text;
//     playerChoose.textContent = "Paper";

//     const computerRandom = Math.floor(Math.random()*names.length);  
//     computerChoose.textContent = names[computerRandom];

//     if(text===10){
//         alert("Game Over");
//         level.textContent = 0;

//     }
// })
// scissorbtn.addEventListener("click" , function(){
//     text = text + 1;
//     level.textContent = text;
//     playerChoose.textContent = "Scissor";

//     const computerRandom = Math.floor(Math.random()*names.length);
//     computerChoose.textContent = names[computerRandom];


//     if(text===10){
//         alert("Game Over");
//         level.textContent = 0;
//     }
// })








