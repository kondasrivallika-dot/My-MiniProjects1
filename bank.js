let balance = 1000;

function updateBalance(){
document.getElementById("balance").innerText = balance;
}

function addHistory(text){
let li = document.createElement("li");
li.innerText = text;
document.getElementById("history").prepend(li);
}

function deposit(){

let amount = Number(document.getElementById("amount").value);

if(amount <= 0) return;

balance += amount;

updateBalance();
addHistory("Deposited ₹" + amount);

document.getElementById("amount").value="";
}

function withdraw(){

let amount = Number(document.getElementById("amount").value);

if(amount <= 0 || amount > balance){
alert("Invalid Amount");
return;
}

balance -= amount;

updateBalance();
addHistory("Withdrawn ₹" + amount);

document.getElementById("amount").value="";
}