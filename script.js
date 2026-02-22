function register(){

    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if(username === "" || password === ""){
        alert("Enter username and password");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");
}

function login(){

    let username = document.getElementById("logUser").value;
    let password = document.getElementById("logPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === savedUser && password === savedPass){
        document.getElementById("message").innerText = "Login Success";
        window.location.href = "home.html";
    }
    else{
        document.getElementById("message").innerText = "Invalid Login";
    }
}