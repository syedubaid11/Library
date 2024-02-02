//empty array for storing values of object 
const myLib=[]
let title=0;
let author=0
let pages=0
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
    document.getElementById("p").innerHTML=("Book Title:"+title+"<br />"+"Book Author:"+author+"<br />"+"Book pages:"+pages+"<br />");
}