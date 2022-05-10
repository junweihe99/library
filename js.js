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

