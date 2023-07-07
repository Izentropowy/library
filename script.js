const addBookButton = document.querySelector('.add-book');
const insideModal = document.querySelector('.adding-box');
const outsideModal = document.querySelector('.modal');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit');

let myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title,
    this.author  = author,
    this.pages = pages,
    this.isRead = isRead
}

Book.prototype.toggleStatus = function() {
    this.isRead = !this.isRead;
}

function openModal() {
    form.classList.add('form-visible');
}

function closeModal() {
    form.classList.remove('form-visible');
    form.reset();
}

function insideModalClicked(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
}

function outsideModalClicked() {
    closeModal();
}

function addBookToLibrary(e) {
    form.reportValidity();
    if (form.reportValidity()){
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isRead = document.getElementById('check').checked;
        const newBook = new Book(title, author, pages, isRead);
        myLibrary.push(newBook);
    }
}

function createCard(book) {
    var cardDiv = document.createElement("div");
    let statusClass = book.isRead ? "read" : "not-read";
    cardDiv.classList.add("card");
    const cardContent =  `<h2>${book.title}</h2>
                        <h3>${book.author}</h3>
                        <h4>${"Pages: " + book.pages} </h4>
                        <div id="${book.index}">
                            <button class="status ${statusClass}"></button>
                            <button class="remove">Remove</button>
                        </div>`
    cardDiv.innerHTML = cardContent;
    main.appendChild(cardDiv);
}

function displayBooks() {
    main.innerHTML = "";
    myLibrary.forEach(element => createCard(element));
}

function setIndexes() {
    myLibrary.forEach(element => {
        element.index = myLibrary.indexOf(element);
    });
}

function removeCard(e) {
    if (e.target.classList.contains('remove')) {
        myLibrary.splice(e.target.parentNode.id, 1);
        setIndexes();
        displayBooks();
    }
}

function markStatus(e) {
    if (e.target.classList.contains('status')) {
        let currentBook = myLibrary[e.target.parentNode.id]
        currentBook.toggleStatus();
        displayBooks();
    }
}

addBookButton.addEventListener('click', openModal);
insideModal.addEventListener('click', insideModalClicked);
outsideModal.addEventListener('click', outsideModalClicked);
submitButton.addEventListener('click', addBookToLibrary);
submitButton.addEventListener('click', setIndexes);
submitButton.addEventListener('click', displayBooks);
submitButton.addEventListener('click', () => {
    if (form.reportValidity()) closeModal();
});
document.body.addEventListener('click', removeCard);
document.body.addEventListener('click', markStatus);



