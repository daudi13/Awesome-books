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
	static listSection = document.querySelector('.list-section');
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

	static addBookItem(bookItem) {
	const bookBlock = document.createElement('div');
	bookBlock.classList.add('bookBlock');

	const removeBtn = document.createElement('button');
	removeBtn.classList.add('remove-btn');
	removeBtn.innerText = 'remove';

	const underLine = document.createElement('hr');

	bookBlock.innerHTML = `<p class="book-title">${bookItem.title}</p>
			<p class="book-Author">${bookItem.author}</p>`
			bookBlock.appendChild(removeBtn);
			bookBlock.appendChild(underLine);
			updateDisplay.listSection.appendChild(bookBlock);
	let x = Array.from(document.querySelectorAll('.bookBlock'));

	document.querySelectorAll('.remove-btn').forEach((btn, i) => {
		btn.addEventListener('click', () => {
			x[i].remove();
		})
	})
}
}


updateDisplay.theForm.addEventListener('submit', updateDisplay.addBookItem);
