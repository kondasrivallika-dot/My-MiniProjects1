let students = [];

function addStudent(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(name === "" || age === "" || course === ""){
        alert("Enter all details");
        return;
    }

    let student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("course").value="";
}

function displayStudents(){

    let table = document.getElementById("studentTable");
    table.innerHTML="";

    for(let i=0;i<students.length;i++){

        table.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].course}</td>
            <td>
                <button class="delete" onclick="deleteStudent(${i})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
}

function deleteStudent(index){
    students.splice(index,1);
    displayStudents();
}