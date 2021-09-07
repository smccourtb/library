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


let myLibrary = [];

function addBookToLibrary() {
    pass
  }

const addBookButton = document.getElementById("addBook")

addBookButton.addEventListener('click', () => {
    openForm();
})

// functions to show/hide form on button press
function openForm() {
    document.getElementById("addBookForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("addBookForm").style.display = "none";
  }
// 1. get input from user using addBookToLibrary function
// 2. store that input as a BOOK object (using Object.create()?)
// 3. function to shows all book in the library with the relative info.
// loop through my library and display the info