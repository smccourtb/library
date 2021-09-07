function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        if(this.read) {
            this.read=true
        }
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`
    }
};

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')


let myLibrary = [];

function addBookToLibrary() {
    let title = document.getElementById("bookTitle").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").value
    const book1 = new Book(title, author, pages, read)
    console.log(book1.info())
  }

const addBookButton = document.getElementById("addBook")
const submitNewBook = document.getElementById("newBookSubmit")
const addBookForm = document.getElementById("addBookForm")

addBookButton.addEventListener('click', () => {
    openForm();
})
submitNewBook.addEventListener('click', () => {
    addBookToLibrary();
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