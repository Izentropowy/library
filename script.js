const addBookButton = document.querySelector('.add-book');
const insideModal = document.querySelector('.adding-box');
const outsideModal = document.querySelector('.modal');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit');
const resetButtons = [];


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
                            <button class="remove" id="${book.index}">Remove</button>
                        </div>`
    cardDiv.innerHTML = cardContent;
    main.appendChild(cardDiv);
    resetButtons.push(document.getElementById(`${book.index}`));
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

function removeCard() {

}

addBookButton.addEventListener('click', openModal);
insideModal.addEventListener('click', insideModalClicked);
outsideModal.addEventListener('click', outsideModalClicked);
submitButton.addEventListener('click', addBookToLibrary);
submitButton.addEventListener('click', setIndexes);
submitButton.addEventListener('click', displayBooks);
submitButton.addEventListener('click', closeModal);
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        myLibrary.splice(e.target.id, 1);
        setIndexes();
        displayBooks();
        console.log(myLibrary);
    }
})



