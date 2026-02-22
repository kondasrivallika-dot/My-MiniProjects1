let time = 30;
let timer;
let started = false;

function startTest(){

    document.getElementById("input").value="";
    time = 30;
    document.getElementById("time").innerText=time;

    started = true;

    timer = setInterval(updateTimer,1000);
}

function updateTimer(){

    if(time > 0){
        time--;
        document.getElementById("time").innerText=time;
    }
    else{
        clearInterval(timer);
        calculateSpeed();
    }
}

function calculateSpeed(){

    let text =
        document.getElementById("input").value;

    let words = text.trim().split(" ").length;

    let wpm = words * 2; 

    document.getElementById("wpm").innerText=wpm;
}