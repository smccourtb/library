let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
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
    // clearForm();
})

// functions to show/hide form on button press
function openForm() {
    document.getElementById("addBookForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("addBookForm").style.display = "none";
  }

function clearForm() {
    const inputs = document.querySelectorAll("input")
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
    for(let i in book) {
        const data = document.createElement('td');
        
        if(i === 'read') {
            console.log(book[i])
            const check = document.createElement('input');
            check.setAttribute('type', 'checkbox')
            check.checked = book[i]
            data.appendChild(check)
        }
        else {
            data.textContent = book[i]
        }
        
        entry.appendChild(data)
    };
    library.appendChild(entry)
};