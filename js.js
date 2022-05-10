function Book(title, author, page){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = false;
}

Book.prototype.info = function(){
    if(this.read){
        return `${this.title} by ${this.author}, ${this.page} pages, read`;
    }
    else{
        return `${this.title} by ${this.author}, ${this.page} pages, not yet read`;
    }
}

const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', () => {
    addBookToLibrary();
});



function addBookToLibrary(){
    let title = prompt("Please enter book title", "No Title");
    let author = prompt("Please enter book title", "No Author");
    let page = prompt("Please enter page number", 0);

    let book = new Book(title,author,page);
    myLibrary.push(book);
}

let myLibrary = [];
const library = document.querySelector('.library');

let firstBook = new Book("First Book", "Me", 100);
let secondBook = new Book("Second Book", "Me", 200);
myLibrary.push(firstBook);
myLibrary.push(secondBook);

for(let i=0; i <myLibrary.length; i++)
{
    let book = document.createElement("div");
    book.classList.add("book");

    let title = document.createElement("div");
    title.textContent = `Title: ${myLibrary[i].title}`;
    let author = document.createElement("div");
    author.textContent = `Author: ${myLibrary[i].author}`;
    let page = document.createElement("div");
    page.textContent = `Pages: ${myLibrary[i].page} pages`;
    let read = document.createElement("button");
    read.classList.add("read");
    read.textContent = "Not yet read";

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(page);
    book.appendChild(read);
    library.appendChild(book);
}