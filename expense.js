let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");

function addTransaction(){

    const text=document.getElementById("text").value;
    const amount=parseFloat(document.getElementById("amount").value);

    if(text==="" || isNaN(amount)) return;

    const transaction={
        id:Date.now(),
        text,
        amount
    };

    transactions.push(transaction);
    update();
}

function deleteTransaction(id){
    transactions=transactions.filter(t=>t.id!==id);
    update();
}

function update(){

    list.innerHTML="";

    let total=0;
    let inc=0;
    let exp=0;

    transactions.forEach(t=>{

        total+=t.amount;

        if(t.amount>0) inc+=t.amount;
        else exp+=t.amount;

        const li=document.createElement("li");

        li.innerHTML=
        `${t.text} ₹${t.amount}
        <button onclick="deleteTransaction(${t.id})">X</button>`;

        list.appendChild(li);
    });

    balance.innerText=total;
    income.innerText=inc;
    expense.innerText=Math.abs(exp);

    localStorage.setItem("transactions",
        JSON.stringify(transactions));
}

update();