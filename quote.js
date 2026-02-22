const quotes = [
    "Success comes from hard work.",
    "Never stop learning.",
    "Dream big and dare to fail.",
    "Practice makes perfect.",
    "Believe in yourself.",
    "Stay positive and work hard.",
    "Every day is a new opportunity.",
    "Coding is creativity in action."
    ];
    
    function generateQuote(){
    
        let randomIndex =
            Math.floor(Math.random()*quotes.length);
    
        document.getElementById("quote").innerText =
            quotes[randomIndex];
    }