function search(){

    let query = document.getElementById("searchBox").value;
    
    if(query==="") return;
    
    window.location.href =
    "https://www.google.com/search?q=" + query;
    }
    
    document.getElementById("searchBox")
    .addEventListener("keypress",function(e){
    
    if(e.key==="Enter"){
    search();
    }
    });