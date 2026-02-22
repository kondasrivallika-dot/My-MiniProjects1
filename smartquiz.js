let quiz = [
    {
    q:"Java is used for?",
    o:["Programming","Cooking","Driving","Drawing"],
    a:0
    },
    {
    q:"HTML is?",
    o:["Language","Database","Game","Server"],
    a:0
    },
    {
    q:"CSS controls?",
    o:["Style","Hardware","Internet","CPU"],
    a:0
    }
    ];
    
    let index = 0;
    let score = 0;
    let time = 10;
    let timerInterval;
    
    function loadQuestion(){
    
    clearInterval(timerInterval);
    time = 10;
    document.getElementById("timer").innerText = time;
    
    let q = quiz[index];
    document.getElementById("question").innerText = q.q;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.o.forEach((opt,i)=>{
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = ()=>checkAnswer(i);
    optionsDiv.appendChild(btn);
    });
    
    updateProgress();
    startTimer();
    }
    
    function checkAnswer(choice){
    
    if(choice === quiz[index].a){
    score++;
    }
    
    nextQuestion();
    }
    
    function nextQuestion(){
    
    index++;
    
    if(index < quiz.length){
    loadQuestion();
    }
    else{
    finishQuiz();
    }
    }
    
    function startTimer(){
    
    timerInterval = setInterval(()=>{
    time--;
    document.getElementById("timer").innerText = time;
    
    if(time === 0){
    nextQuestion();
    }
    },1000);
    }
    
    function updateProgress(){
    let percent = ((index)/quiz.length)*100;
    document.getElementById("bar").style.width = percent + "%";
    }
    
    function finishQuiz(){
    
    clearInterval(timerInterval);
    
    document.querySelector(".quiz-box").innerHTML =
    "<h2>Quiz Finished</h2>" +
    "<h3>Score: "+score+" / "+quiz.length+"</h3>";
    }
    
    loadQuestion();