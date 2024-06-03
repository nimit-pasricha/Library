const myLibrary = [];

function Book(title, author, numPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {
  const dialog = document.querySelector("dialog");
  const newBookButton = document.querySelector(".new-book");
  newBookButton.addEventListener("click", () => {
    dialog.showModal();
  });

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newBookTitle = document.querySelector("#title").value;
    const newBookAuthor = document.querySelector("#author").value;
    const newBookPages = document.querySelector("#pages").value;
    const newBookStatus = document.querySelector("#have-read").checked;
    const newBook = new Book(
      newBookTitle,
      newBookAuthor,
      newBookPages,
      newBookStatus
    );
    myLibrary.push(newBook);
    console.log(myLibrary);
    dialog.close();
    displayBooks();
  });
}

addBookToLibrary();

function displayBooks() {
  const displayArea = document.querySelector(".display-area");
  displayArea.innerHTML = "";

  for (let oneBook of myLibrary) {
    const book = document.createElement("div");
    book.className = "book";
    displayArea.appendChild(book);

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
