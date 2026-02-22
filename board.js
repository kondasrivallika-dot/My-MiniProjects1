let id = 0;

function addTask(){

let text = document.getElementById("taskInput").value;

if(text === "") return;

let task = document.createElement("div");
task.className="task";
task.draggable=true;
task.id="task"+id++;
task.innerText=text;

task.addEventListener("dragstart",drag);

document.getElementById("todo").appendChild(task);

document.getElementById("taskInput").value="";
}

function allowDrop(event){
event.preventDefault();
}

function drag(event){
event.dataTransfer.setData("text",event.target.id);
}

function drop(event){
event.preventDefault();

let data = event.dataTransfer.getData("text");
event.target.appendChild(document.getElementById(data));
}