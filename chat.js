function sendMessage(){

    let input = document.getElementById("messageInput");
    let messageText = input.value.trim();

    if(messageText === ""){
        return;
    }

    let chatBox = document.getElementById("chatBox");

    let message = document.createElement("div");
    message.classList.add("message","user");
    message.innerText = messageText;

    chatBox.appendChild(message);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


document.getElementById("messageInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }
});