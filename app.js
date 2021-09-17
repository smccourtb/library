let myLibrary = [];

class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    };
    info() { return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`};
};

// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`
// };

function addBookToLibrary() {
    let title = document.getElementById("bookTitle").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked
    
    const book1 = new Book(title, author, pages, read)
    reloadLibrary(book1)
    myLibrary.push(book1)
   // localStorage.setItem("library", [myLibrary])
  }

const addBookButton = document.getElementById("addBook")
const submitNewBook = document.getElementById("newBookSubmit")
const addBookForm = document.getElementById("addBookForm")
const library = document.querySelector("table")
addBookButton.addEventListener('click', () => {
    openForm();
})

submitNewBook.addEventListener('click', () => {
    addBookToLibrary();
    closeForm();
    clearForm();
})

// functions to show/hide form on button press
function openForm() {
    document.getElementById("addBookForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("addBookForm").style.display = "none";
  }

function clearForm() {
    const inputs = document.querySelectorAll(".formInput")
    for(i of inputs){
        i.value = "";
        if(i.type === "checkbox") {
            console.log(i);
            i.checked = false;
        };
    };
};

function reloadLibrary(book) {
    const entry = document.createElement('tr')
    entry.setAttribute("data-index", myLibrary.length)
    for(let i in book) {
        const data = document.createElement('td');
        // add a checkbox and apply 'read' status
        if(i === 'read') {
            const check = document.createElement('input');
            check.addEventListener('click', () => {
                updateRead(book)
                console.log(this)
            })
            check.setAttribute('type', 'checkbox')
            check.checked = book[i]
            data.appendChild(check)
            const remove = document.createElement('button')
            remove.textContent= "Delete"
            remove.addEventListener('click', () => {
                removeBookFromLibrary(book)
            })
            data.appendChild(remove)
        }
        else {
            data.textContent = book[i]
        }
        entry.appendChild(data)
    };
    library.appendChild(entry)
};

function removeBookFromLibrary(book) {
    const x = myLibrary.indexOf(book)
    myLibrary.splice(x,1)
    const y = document.getElementsByTagName("TR")
    for(let i of y) {
        if(i.hasAttribute("data-index")) {
            i.remove();
        };
    };
};

function updateRead(book) {
    if(book.read) {
        book.read = !book.read;
    }
    else {
        book.read = !book.read;
    }
}