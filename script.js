const addBookButton = document.querySelector('.add-book');
const insideModal = document.querySelector('.adding-box');
const outsideModal = document.querySelector('.modal');





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

addBookButton.addEventListener('click', openModal);
insideModal.addEventListener('click', insideModalClicked);
outsideModal.addEventListener('click', outsideModalClicked);
