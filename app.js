function saveNote(){
    let note = document.getElementById("note").value;
    localStorage.setItem("note", note);
    document.getElementById("output").innerText = note;
}

window.onload = function(){
    let saved = localStorage.getItem("note");
    if(saved){
        document.getElementById("output").innerText = saved;
    }
}