function generatePassword(){

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";

    let chars = "";

    if(document.getElementById("uppercase").checked){
        chars += upper;
    }

    if(document.getElementById("lowercase").checked){
        chars += lower;
    }

    if(document.getElementById("numbers").checked){
        chars += numbers;
    }

    if(document.getElementById("symbols").checked){
        chars += symbols;
    }

    let length = document.getElementById("length").value;

    if(chars === "" || length <= 0){
        alert("Select options and length");
        return;
    }

    let password = "";

    for(let i=0;i<length;i++){
        let randomIndex = Math.floor(Math.random()*chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword(){

    let passField = document.getElementById("password");

    passField.select();
    document.execCommand("copy");

    alert("Password copied");
}