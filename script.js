function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const bookOne = new Book('The Catcher in the Rye', 'J.D. Salinger', 455, false);
const bookTwo = new Book(
	"Harry Potter and the Sorcerer's Stone",
	'J.K. Rowling',
	685,
	false
);
const bookThree = new Book('Where the Crawdads Sing', 'Delia Owens', 295, true);
const bookFour = new Book('Atomic Habits', 'James Clear', 295, true);

let myLibrary = [bookOne, bookTwo, bookThree, bookFour];

const form = document.querySelector('form');
const table = document.querySelector('table');

function addBookToLibrary(e) {
	let readStatus;
	e.preventDefault();
	const title = document.querySelector('input[name="title"]').value;
	const author = document.querySelector('input[name="author"]').value;
	const pages = document.querySelector('input[name="pages"]').value;
	const read = document.querySelector('input[name="read"]');

	let delButton = document.createElement('button');
	delButton.type = 'button';
	delButton.className = 'deleteBtn';
	delButton.innerText = 'x';

	if (read.checked) {
		readStatus = true;
	} else {
		readStatus = false;
	}

	const newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
	form.reset();
	displayBooks();
}

function displayBooks() {
	let myLibraryLength = myLibrary.length;
	for (let i = 0; i < myLibraryLength; i++) {
		if (myLibrary[i].added) {
			console.log('this book has already been added');
			continue;
		}

		let title = myLibrary[i].title;
		let author = myLibrary[i].author;
		let pages = myLibrary[i].pages;
		let read = myLibrary[i].read;

		if (read === true) {
			read = 'Read';
		} else {
			read = 'Not Read';
		}

		let delButton = document.createElement('button');
		delButton.type = 'button';
		delButton.className = 'deleteBtn';
		delButton.innerText = 'x';
		delButton.dataset.bookNumber = i;
		myLibrary[i].bookNumber = i;

		let newRow = table.insertRow(table.rows.length);

		let cell1 = newRow.insertCell(0);
		let cell2 = newRow.insertCell(1);
		let cell3 = newRow.insertCell(2);
		let cell4 = newRow.insertCell(3);
		let cell5 = newRow.insertCell(4);

		cell1.innerText = title;
		cell2.innerText = author;
		cell3.innerText = pages;
		cell4.innerText = read;
		cell5.appendChild(delButton);
		myLibrary[i].added = true;
	}
}

function deleteBook(e) {
	if (!e.target.classList.contains('deleteBtn')) {
		return;
	}
	const btn = e.target;

	let myLibraryLength = myLibrary.length;

	for (let i = 0; i < myLibraryLength; i++) {
		if (btn.dataset.bookNumber == myLibrary[i].bookNumber) {
			console.log(
				`You just removed ${myLibrary[i].title} from your library`
			);
			btn.closest('tr').remove();
			myLibrary.splice(i, 1);
			return myLibrary;
		}
	}
}

form.addEventListener('submit', addBookToLibrary);
table.addEventListener('click', deleteBook);

displayBooks();
