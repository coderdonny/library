function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const bookOne = new Book('The Catcher in the Rye', 'J.D. Salinger', 455, true);
const bookTwo = new Book('Harry Potter', 'J.D. Salinger', 455, true);
const bookThree = new Book('Book #3', 'J.D. Salinger', 455, true);

function addBookToLibrary() {}

let myLibrary = [bookOne, bookTwo, bookThree];
