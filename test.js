//empty array for storing values of object 
const myLib=[]

//making book object
function book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}

//adding the book values to array
function addtoLib(book){
    myLib.push(book)
}

function addEntry(){
    let titleValue=document.getElementById("booktitleinput")
    let authorValue=document.getElementById("authortitleinput")
    title=titleValue.value;
    author=authorValue.value;
    console.log("book added")
    console.log("author added")
}

function cardbanner(){
    document.getElementById("p").innerHTML=(+"testing");
}