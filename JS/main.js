


// Initialize the books
let books;


// create the book class

class Book {
	constructor(author, title) {
		this.title = title
		this.author = author
	}
}

class updateDisplay {
	static listSection = document.querySelector('container')
	static bookTitle = document.querySelector('#title');
	static theForm = document.querySelector('form');
	static bookAuthor = document.querySelector('#author');

	// create new book
	static addBookItem() {
		const bookItem = new Book(updateDisplay.bookAuthor.value, updateDisplay.bookTitle.value);

		books.push(bookItem);
		localStorage.setItem('collection', JSON.stringify(books));

		updateDisplay.bookAuthor.value = '';
		updateDisplay.bookTitle.value = '';
	}
}
