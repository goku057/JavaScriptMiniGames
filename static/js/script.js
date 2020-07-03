                                                    //Game 1 Age into Days

function ageInDays(){
 
    var year = prompt("Enter your birth Year!");
    var d = new Date();
    var curYear = d.getFullYear();
    var age = (curYear - year) * 365;
    var h1 = document.createElement("h1");
    var text = document.createTextNode("You are "+ age + " days old");

    //h1.setAttribute("id","ageInDays");
    h1.id = "ageInDays";
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){

    document.getElementById("ageInDays").remove();
}


                                                    //Game 2 Cat generator
function genCatto() {
    var image = document.createElement("img");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.height = 200;
    image.width = 200;
    image.className = "gg";
    var div = document.getElementById("cat-gen");
    div.appendChild(image);
}

function resetCatto() {
    var div = document.getElementById("cat-gen");
    div.remove();
    div = document.getElementById("con-2");
    var newDiv = document.createElement("div");
    newDiv.className = "flex-box-container-2";
    newDiv.id ="cat-gen";
    div.appendChild(newDiv);
    console.log("YEP");
}


                                                    //Game 3 Rock Paper Scissor

function rps(choice)
{
    playerC = choice.id;
    botC = botChoice();
    if(playerC == botC)
    {
        console.log("DRAW");
        var msg = "DRAW";
        var color = "yellow";
        printResult(playerC,botC,msg,color);
    }
    else
    {
        if(playerC == "rock" && botC == "scissor"){
            console.log("Player won");
            var msg = "Player won";
            var color = "green";
            printResult(playerC,botC,msg,color);

        }
        else if(playerC == "paper" && botC == "rock"){
            console.log("Player Won");
            var msg = "Player Won";
            var color = "green";
            printResult(playerC,botC,msg,color);
        }
        else if(playerC == "scissor" && botC == "paper") {
            console.log("Player Won");
            var msg = "Player Won";
            var color = "green";
            printResult(playerC,botC,msg,color);
        }
        else{
            console.log("Player Lost");
            var msg = "Player Lost";
            var color = "red";
            printResult(playerC,botC,msg,color);
        }
    }

}

function botChoice()
{
    var a = Math.floor(Math.random()*3);
    if(a == 0)
    {
        return "rock";
    }
    else if (a == 1)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}

function printResult(playerChoice, botChoice, msg, color)
{
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissor = document.getElementById('scissor');

    var hum = document.getElementById(playerChoice);
    var bot = document.getElementById(botChoice);
    
    rock.remove();
    paper.remove();
    scissor.remove();
    //console.log(hum);

    var humDiv = document.createElement("div");
    var msgDiv = document.createElement("div");
    var botDiv = document.createElement("div");

    humDiv.innerHTML = "<img src='"+hum.src+"' height='150' widhth='150' style='box-shadow: 0px 10px 50px rgb(58, 76, 233,1);'>";
    botDiv.innerHTML = "<img src='"+bot.src+"' height='150' widhth='150' style='box-shadow: 0px 10px 50px rgb(233, 49, 49); '>";
    msgDiv.innerHTML = "<h1 style='color:"+color+"'>"+msg+"</h1>";

    var div = document.getElementById("flex-box-rps-id");
    div.appendChild(humDiv);
    div.appendChild(msgDiv);
    div.appendChild(botDiv);

}

                                                //Game 4 Change the colour of buttons!!!

var but = document.getElementsByTagName("button");
console.log(but[0]);
var cBut = [];
//cBut[0] = "gg";
//console.log(cBut[0]);
for (var i = 0; i <but.length; i++)
{
    cBut.push(but[i].classList[1]);
}
//cBut[0] = "ez";

console.log(cBut);

//cBut[0].classList[1].remove;
function buttonColorChange(btn){
    if(btn.value === "blue"){
        makeBlue();
    }
    else if(btn.value == "green"){
        makeGreen();
    }
    else if(btn.value == "random"){
        makeRandom();
    }
    else{
        makeReset();
    }
}

function makeBlue(){
    for(var i = 0; i < but.length; i++){
        but[i].classList.remove(but[i].classList[1]);
        but[i].classList.add("btn-primary");
    }
}

function makeGreen(){
    for(var i = 0; i < but.length; i++){
        but[i].classList.remove(but[i].classList[1]);
        but[i].classList.add("btn-success");
    }
}
function makeReset(){
    for(var i = 0; i < but.length; i++){
        but[i].classList.remove(but[i].classList[1]);
        but[i].classList.add(cBut[i]);
    }
}
function makeRandom(){
    for(var i = 0; i < but.length; i++){
        but[i].classList.remove(but[i].classList[1]);
        but[i].classList.add(getRandomValue());
    }
}

function getRandomValue(){
    var val = Math.floor(Math.random() * 4);
    if(val == 0){
        return "btn-primary";
    }
    else if(val == 1){
        return "btn-success";
    }
    else if(val == 2){
        return "btn-warning";
    }
    else{
        return "btn-danger";
    }
}


                                                //Game 5: BlackJack 21

document.querySelector("#hit-button").addEventListener("click",hit);
document.querySelector("#stall-button").addEventListener("click",stall);
document.querySelector("#deal-button").addEventListener("click",deal);
//sound attributes
const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/awww.mp3");
//game attributes
const PLAYER = { div: "#player-box", scoreSpan:"#player-blackjack-result", score:0};
const DEALER = { div: "#dealer-box", scoreSpan:"#dealer-blackjack-result", score:0};
const CARD = ['2',"3","4","5","6","7","8","9","10","J","Q","K","A"];
const CVAL = {'2':2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":10,"Q":10,"K":10,"A":[1,11]}
let playerStatus = true;
let botStatus = true;
let wins = 0, loss = 0, draws = 0;
function hit()
{   
    if(PLAYER.score<=21 && playerStatus ){
        serveCard(PLAYER);
        printScore(PLAYER);
    }
    console.log(PLAYER.score);
}

async function stall(){
   if(botStatus){
        while(DEALER.score <=16){
            await sleep(500);
            //setTimeout(this,500);
            serveCard(DEALER);
            printScore(DEALER);
            //lossSound.play();
        }
        botStatus = false;
        playerStatus = false;
        winner();
    }
}

function deal(){
    if(!playerStatus && !botStatus){
        playerStatus = true;
        botStatus  = true;
        clearImages();
        resetScore(PLAYER);
        resetScore(DEALER);
        printWinner("Let's PLAY!!!","black");
    }
}


function serveCard(activePlayer){
    let card = getCard();
    let image = document.createElement('img');
    image.src = `static/images/${card}.png`;
    image.height = 100;
    image.width  = 100;
    document.querySelector(activePlayer.div).appendChild(image);
    hitSound.play();
    updateScore(activePlayer,card);
}

function getCard(){
    let val = Math.floor(Math.random() * 13);
    return CARD[val];
}

function updateScore(activePlayer, card){
    if(card === "A"){
        if(activePlayer.score+CVAL[card][1]<=21){
            activePlayer.score+=CVAL[card][1];
        }
        else{
            activePlayer.score+=CVAL[card][0];
        }
    }
    else{
        activePlayer.score+=CVAL[card];
    }
     
}

function printScore(activePlayer){
    if(activePlayer.score<=21){
        document.querySelector(activePlayer.scoreSpan).textContent = activePlayer.score;
    }
    else{
        document.querySelector(activePlayer.scoreSpan).textContent = "BUSTED!!!";
        document.querySelector(activePlayer.scoreSpan).style.color = "red";
    }
}

function clearImages(){
    let img = document.querySelector(".flex-blackjack-row-1").querySelectorAll("img");
    //console.log(img);
    for(let i = 0; i<img.length; i++){
        img[i].remove();
    }
}

function resetScore(activePlayer){
    activePlayer.score = 0;
    document.querySelector(activePlayer.scoreSpan).textContent = activePlayer.score;
    document.querySelector(activePlayer.scoreSpan).style.color = "white";
}

function sleep(ms){
   return new Promise(resolve => setTimeout(resolve,ms));
    
}

function printWinner(msg,color){
    document.querySelector("#blackjack-result").textContent = msg;
    document.querySelector("#blackjack-result").style.color = color;
}

function winner(){
    if(PLAYER.score>21 && DEALER.score> 21){
        console.log("DRAW");
        printWinner("DRAW","blue");
        draws++;
        updateScoreBoard();
    }
    else if(PLAYER.score >21){
        console.log("LOSE");
        printWinner("YOU LOSE","red");
        loss++;
        lossSound.play();
        updateScoreBoard();
    }
    else if(DEALER.score>21){
        console.log("WIN");
        printWinner("YOU WIN","GREEN");
        wins++;
        updateScoreBoard();
        winSound.play();
    }
    else if(PLAYER.score == DEALER.score){
        console.log("DRAW");
        printWinner("DRAW","blue");
        draws++;
        updateScoreBoard();
    }
    else if(PLAYER.score > DEALER.score){
        console.log("WIN");
        printWinner("YOU WIN","GREEN");
        wins++;
        updateScoreBoard();
        winSound.play();
    }
    else if(PLAYER.score < DEALER.score){
        console.log("LOSE");
        printWinner("YOU LOSE","red");
        loss++;
        lossSound.play();
        updateScoreBoard();
    }
}

function updateScoreBoard(){
    document.querySelector("#wins").textContent = wins;
    document.querySelector("#loss").textContent = loss;
    document.querySelector("#draws").textContent = draws;
}