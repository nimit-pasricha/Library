const myLibrary = [];

function Book(title, author, numPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {}
addBookToLibrary();

function displayBooks() {
  for (let oneBook of myLibrary) {
    const book = document.createElement("div");
    book.className = "book";
    document.querySelector(".display-area").appendChild(book);

    const bookTitle = book.appendChild(document.createElement("div"));
    bookTitle.textContent = oneBook.title;

    const bookAuthor = book.appendChild(document.createElement("div"));
    bookAuthor.textContent = oneBook.author;

    const bookNumPages = book.appendChild(document.createElement("div"));
    bookNumPages.textContent = oneBook.numPages;

    const haveReadBook = book.appendChild(document.createElement("div"));
    haveReadBook.textContent = oneBook.haveRead
      ? "Finished Reading"
      : "Not read yet";
  }
}

displayBooks();
