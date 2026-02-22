const values = ["1","2","3","4","5","6","7","8"];
let cards = [...values, ...values];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let matches = 0;
let score = 0;
let moves = 0;

const board = document.getElementById("board");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const movesDisplay = document.getElementById("moves");

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

function createBoard(){
    board.innerHTML="";
    message.innerText="";

    matches=0;
    score=0;
    moves=0;

    scoreDisplay.innerText=score;
    movesDisplay.innerText=moves;

    shuffle(cards);

    cards.forEach(value=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.dataset.value=value;
        card.innerText="?";

        card.addEventListener("click",flipCard);

        board.appendChild(card);
    });
}

function flipCard(){

    if(lockBoard || this===firstCard) return;

    this.innerText=this.dataset.value;
    this.classList.add("flipped");

    if(!firstCard){
        firstCard=this;
        return;
    }

    secondCard=this;
    lockBoard=true;

    moves++;
    movesDisplay.innerText=moves;

    checkMatch();
}

function checkMatch(){

    if(firstCard.dataset.value===secondCard.dataset.value){

        score += 10;
        matches++;
        scoreDisplay.innerText=score;

        if(matches===values.length){
            message.innerText="🏆 Congratulations! You Won! Final Score: "+score;
        }

        resetCards();

    }else{

        score -= 2;
        if(score<0) score=0;
        scoreDisplay.innerText=score;

        setTimeout(()=>{
            firstCard.innerText="?";
            secondCard.innerText="?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetCards();
        },800);
    }
}

function resetCards(){
    firstCard=null;
    secondCard=null;
    lockBoard=false;
}

function restartGame(){
    createBoard();
}

createBoard();