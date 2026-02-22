function generateResume(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    
    document.getElementById("rname").innerText = name;
    document.getElementById("remail").innerText = email;
    document.getElementById("rphone").innerText = phone;
    document.getElementById("rskills").innerText = skills;
    
    }