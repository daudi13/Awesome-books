"use strict";
let books = [];
const listSection = document.querySelector(".list-section");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const theForm = document.querySelector("form");

// adding items in the books array

function addBookItem(bookItem) {
  const bookBlock = document.createElement("div");
  bookBlock.classList.add("bookBlock");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerText = "remove";

  const underLine = document.createElement("hr");

  bookBlock.innerHTML = `<p class="book-title">${bookItem.title}</p>
			<p class="book-Author">${bookItem.author}</p>`;
  bookBlock.appendChild(removeBtn);
  bookBlock.appendChild(underLine);
  listSection.appendChild(bookBlock);
  let x = Array.from(document.querySelectorAll(".bookBlock"));

  document.querySelectorAll(".remove-btn").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      x[i].remove();
    });
  });
}

function addBooks(item) {
  addBookItem(item);
  books.push({
    title: bookTitle.value,
    author: bookAuthor.value,
  });
  localStorage.setItem("CollectedBooks", JSON.stringify(books));
  bookTitle.value = "";
  bookAuthor.value = "";
}

theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBooks({
    title: bookTitle.value,
    author: bookAuthor.value,
  });
});

