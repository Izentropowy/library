const addBookButton = document.querySelector('.add-book');
const insideModal = document.querySelector('.adding-box');
const outsideModal = document.querySelector('.modal');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit');


function openModal() {
    outsideModal.style.display = 'flex';
}

function closeModal() {
    outsideModal.style.display = 'none';
}

function insideModalClicked(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
}

function outsideModalClicked() {
    closeModal();
}

let myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title,
    this.author  = author,
    this.pages = pages,
    this.isRead = isRead
}

function addBookToLibrary(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('check').checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function createCard(book) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const cardContent =  `<h2>${book.title}</h2>
                        <h3>${book.author}</h3>
                        <h4>${"Pages: " + book.pages} </h4>
                        <div>
                            <button class="read">Not read</button>
                            <button class="remove">Remove</button>
                        </div>`
    cardDiv.innerHTML = cardContent;
    main.appendChild(cardDiv);
}

function displayBooks() {
    main.innerHTML = "";
    myLibrary.forEach(element => createCard(element));
}

addBookButton.addEventListener('click', openModal);
insideModal.addEventListener('click', insideModalClicked);
outsideModal.addEventListener('click', outsideModalClicked);
submitButton.addEventListener('click', addBookToLibrary);
submitButton.addEventListener('click', displayBooks);

// function createCard() {
//     var cardDiv = document.createElement("div");
//     var titleHeading = document.createElement("h2");
//     var authorHeading = document.createElement("h3");
//     var pagesHeading = document.createElement("h4");
//     var buttonsDiv = document.createElement("div");
//     var readButton = document.createElement("button");
//     var removeButton = document.createElement("button");
    
//     cardDiv.classList.add("card");
//     removeButton.classList.add("remove")
//     main.appendChild(cardDiv);
//     cardDiv.appendChild(titleHeading);
//     cardDiv.appendChild(authorHeading);
//     cardDiv.appendChild(pagesHeading);
//     cardDiv.appendChild(buttonsDiv);
//     buttonsDiv.appendChild(readButton);
//     buttonsDiv.appendChild(removeButton);
// }

