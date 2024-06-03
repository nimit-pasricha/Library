const myLibrary = [];
let index;

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
    dialog.close();
    displayBooks();
    document.querySelector("form").reset();
  });
}

addBookToLibrary();

function displayBooks() {
  const displayArea = document.querySelector(".display-area");
  displayArea.innerHTML = "";

  index = 0;
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

    const deleteButton = book.appendChild(document.createElement("button"));
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("data-index", index);
    index++;
    deleteButton.textContent = "Delete";
  }
  deleteBook();
}

function deleteBook() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  console.log(deleteButtons);
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const indexToDelete = +deleteButton.getAttribute("data-index");
      myLibrary.splice(indexToDelete, 1);
      console.log(myLibrary);
      displayBooks();
    });
  });
}
