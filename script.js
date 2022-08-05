function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const bookOne = new Book('The Catcher in the Rye', 'J.D. Salinger', 455, false);
const bookTwo = new Book('Harry Potter', 'J.D. Salinger', 685, false);
const bookThree = new Book('Book #3', 'J.D. Salinger', 295, true);

let myLibrary = [bookOne, bookTwo, bookThree];

const form = document.querySelector('form');
const table = document.querySelector('table');

function addBookToLibrary(e) {
	let readStatus;
	e.preventDefault();
	const title = document.querySelector('input[name="title"]').value;
	const author = document.querySelector('input[name="author"]').value;
	const pages = document.querySelector('input[name="pages"]').value;
	const read = document.querySelector('input[name="read"]');
	if (read.checked) {
		readStatus = 'Read';
	} else {
		readStatus = 'Not Read';
	}
	table.innerHTML += `
    <tr>
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td>${readStatus}</td>
        <td><button class="deleteBtn">x</button></td>
    <tr>
    `;

	const newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
	form.reset();
}

function displayBooks() {
	let myLibraryLength = myLibrary.length;
	for (let i = 0; i < myLibraryLength; i++) {
		let title = myLibrary[i].title;
		let author = myLibrary[i].author;
		let pages = myLibrary[i].pages;
		let read = myLibrary[i].read;

		if (read === true) {
			read = 'Read';
		} else {
			read = 'Not Read';
		}

		table.innerHTML += `
    <tr>
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td>${read}</td>
        <td><button class="deleteBtn">x</button></td>
    <tr>
    `;
	}
}

displayBooks();

function deleteBook(e) {
	if (!e.target.classList.contains('deleteBtn')) {
		return;
	}
	console.log(e.target);

	const btn = e.target;
	btn.closest('tr').remove();
}

form.addEventListener('submit', addBookToLibrary);
table.addEventListener('click', deleteBook);
