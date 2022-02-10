// Initialize the books
let books;

// create the book class

class updateDisplay {
		constructor(author, title) {
		this.title = title
		this.author = author
		}
	
	static listSection = document.querySelector('.list-section')
	static bookTitle = document.querySelector('#title');
	static formBtn = document.querySelector('.btn-submit');
	static bookAuthor = document.querySelector('#author');

	// create new book
  static addBooks() {
		const bookItem = new updateDisplay(updateDisplay.bookTitle.value, updateDisplay.bookAuthor.value);
		books = [];
		books.push(bookItem);
		updateDisplay.bookAuthor.value = '';
		updateDisplay.bookTitle.value = '';
		updateDisplay.addBookItem(bookItem, (books.length -1));
	}
	
	static delBook(bookItem, pos) {
		const bookBlock = document.getElementById(pos);
		books = books.filter((item) => item !== bookItem);
		updateDisplay.listSection.removeChild(bookBlock);
	}

	static addBookItem(bookItem, pos) {
	const bookBlock = document.createElement('div');
		bookBlock.classList.add('bookBlock');
		bookBlock.id = pos;

	const removeBtn = document.createElement('button');
	removeBtn.classList.add('remove-btn');
	removeBtn.innerText = 'remove';

	const underLine = document.createElement('hr');

	bookBlock.innerHTML = `<p class="book-title">${bookItem.title}</p>
			<p class="book-Author">${bookItem.author}</p>`
			bookBlock.appendChild(removeBtn);
			bookBlock.appendChild(underLine);
			updateDisplay.listSection.appendChild(bookBlock);

		removeBtn.onClick = () => {
			updateDisplay.delBook(bookItem, pos)
		}
}
}

updateDisplay.formBtn.addEventListener('click', updateDisplay.addBooks);