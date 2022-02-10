let books = [];
const listSection = document.querySelector('.list-section');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const theForm = document.querySelector('form');

// adding items in the books array

function removeBook(bookitem, i) {
  const bookBlock = document.getElementById(i);
  books = books.filter((item) => item !== bookitem);
  localStorage.setItem('collectedBooks', JSON.stringify(books));
  listSection.removeChild(bookBlock);
}

function addBookItem(bookItem, i) {
  const bookBlock = document.createElement('div');
  bookBlock.classList.add('bookBlock');
  bookBlock.id = i;

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerText = 'remove';

  const underLine = document.createElement('hr');

  bookBlock.innerHTML = `<p class="book-title">${bookItem.title}</p>
<p class="book-Author">${bookItem.author}</p>`;
  bookBlock.appendChild(removeBtn);
  bookBlock.appendChild(underLine);
  listSection.appendChild(bookBlock);

  removeBtn.onclick = () => {
    removeBook(bookItem, i);
  };
}

function addBooks(item) {
  books.push({
    title: bookTitle.value,
    author: bookAuthor.value,
  });

  localStorage.setItem('collectedBooks', JSON.stringify(books));
  bookTitle.value = '';
  bookAuthor.value = '';
  addBookItem(item, (books.length - 1));
}

function updateUi() {
  if (localStorage.getItem('collectedBooks')) {
    books = JSON.parse(localStorage.getItem('collectedBooks'));
    books.forEach((bookItem, i) => {
      addBookItem(bookItem, i);
    });
  } else {
    localStorage.setItem('collectedBooks', '');
    books = [];
  }
}

updateUi();

theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBooks({
    title: bookTitle.value,
    author: bookAuthor.value,
  });
});