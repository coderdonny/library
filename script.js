let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const newBook = new Book('MyBook', 'Me', 455, true);

function addBookToLibrary() {}
