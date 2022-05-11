//Constructor for Book objects
function Book(title, author, page){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = false;
}

//defining function on prototype so only single instance is shared between all obj
Book.prototype.info = function(){
    //returns information on the book object
    if(this.read){
        return `${this.title} by ${this.author}, ${this.page} pages, read`;
    }
    else{
        return `${this.title} by ${this.author}, ${this.page} pages, not yet read`;
    }
}

//Declaring an empty array with no book objects
let myLibrary = [];

//Add click functionality to "+Add Book" button
const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', () => {
    addBookToLibrary();
});

function addBookToLibrary(){
    //Prompts user for book info 
    let title = prompt("Please enter book title", "No Title");
    let author = prompt("Please enter book title", "No Author");
    let page = prompt("Please enter page number", 0);

    //adds the new book object to myLibrary array
    let book = new Book(title,author,page);
    myLibrary.push(book);

    //display contents of myLibrary array
    displayArray();
}

//DOM selector for the start of the library
const library = document.querySelector('.library');

function displayArray(){
    //Clear all prexisting DOM elements for each Book
    while(library.firstChild)
    {
        library.removeChild(library.firstChild);
    }
    //Create new DOM instances for each Book using information from myLibrary array
    for(let i=0; i <myLibrary.length; i++)
    {
        //create new div element with classes of "book" and associated array index
        let book = document.createElement("div");
        book.classList.add("book", `${i}`);

        //create div elements for title, author, pages
        let title = document.createElement("div");
        title.textContent = `Title: ${myLibrary[i].title}`;
        let author = document.createElement("div");
        author.textContent = `Author: ${myLibrary[i].author}`;
        let page = document.createElement("div");
        page.textContent = `Pages: ${myLibrary[i].page} pages`;

        //create new button element to toggle read status
        let read = document.createElement("button");
        read.classList.add("notread");
        read.textContent = "Not yet read";

        //create new button element to allow for deletion of book objects
        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove Book";

        //Append all newly created elements to the Book
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(page);
        book.appendChild(read);
        book.appendChild(remove);

        //Append new Book to the Library
        library.appendChild(book);
    }

    //Add click functionality to toggle read status for each book
    const toggle = document.querySelectorAll(".notread");
    toggle.forEach((button) => {
        button.addEventListener('click', () => {
            //Change read status to read if book was originally not read
            if(button.classList.contains("notread"))
            {
                button.classList.replace("notread", "read");
                button.textContent = "Read";
                //set this.read of associated book object to true;
                myLibrary[button.parentNode.classList[1]].read = true;
            }
            //Change read status to not read if book was originally read
            else{
                button.classList.replace("read", "notread");
                button.textContent = "Not yet read";
                //set this.read of associated book object to false;
                myLibrary[button.parentNode.classList[1]].read = false;
            }
        });
    });

    //Add click functionality to remove book from myLibrary
    const remove = document.querySelectorAll(".remove");
    remove.forEach((button) => {
        button.addEventListener('click', () => {
            //Find index of book object being removed and remove it from the array
            let index = button.parentNode.classList[1];
            myLibrary.splice(index,1);
            //Display updated myLibrary array contents
            displayArray();
        });
    });
}