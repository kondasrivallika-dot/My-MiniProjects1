function sendMessage(){

    let input = document.getElementById("userInput");
    let text = input.value.trim();
    
    if(text==="") return;
    
    addMessage(text,"user");
    
    input.value="";
    
    setTimeout(()=>{
    let reply = generateReply(text);
    addMessage(reply,"ai");
    },800);
    }
    
    function addMessage(text,type){
    
    let chatBox = document.getElementById("chatBox");
    
    let div = document.createElement("div");
    div.className="message "+type;
    div.innerText=text;
    
    chatBox.appendChild(div);
    
    chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function generateReply(msg){
    
    msg = msg.toLowerCase();
    
    if(msg.includes("hello")) return "Hello. How can I help you?";
    if(msg.includes("java")) return "Java is a powerful programming language.";
    if(msg.includes("html")) return "HTML builds webpage structure.";
    if(msg.includes("bye")) return "Goodbye.";
    
    return "I am learning new things every day.";
    }