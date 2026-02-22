let books = [];

function addBook(){

    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    if(bookName === "" || author === ""){
        alert("Enter all details");
        return;
    }

    let book = {
        name: bookName,
        author: author,
        status: "Available"
    };

    books.push(book);

    displayBooks();

    document.getElementById("bookName").value="";
    document.getElementById("author").value="";
}

function displayBooks(){

    let table = document.getElementById("bookTable");
    table.innerHTML="";

    for(let i=0;i<books.length;i++){

        table.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${books[i].name}</td>
            <td>${books[i].author}</td>
            <td>${books[i].status}</td>
            <td>
                <button class="issue" onclick="issueBook(${i})">Issue</button>
                <button class="delete" onclick="deleteBook(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
}

function issueBook(index){

    if(books[index].status === "Available"){
        books[index].status = "Issued";
    }else{
        books[index].status = "Available";
    }

    displayBooks();
}

function deleteBook(index){
    books.splice(index,1);
    displayBooks();
}