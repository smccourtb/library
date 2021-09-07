function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${numPages} pages, ${this.read}`
    }
};

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')

console.log(book1.info())
console.log(book1.prototype.title)