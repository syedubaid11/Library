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

function addBook(){
    let titleValue=document.getElementById("booktitleinput")
    title=titleValue.value;
    console.log("book added")
}