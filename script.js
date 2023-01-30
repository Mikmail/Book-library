let books = [];

document.getElementById("add-book-button").addEventListener("click", function() {
  document.getElementById("book-form").style.display = "block";
});

document.getElementById("book-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let pages = document.getElementById("pages-input").value;
  let read = document.getElementById("read-input").checked;

  let newBook = {
    title: title,
    author: author,
    pages: pages,
    read: read
  };

  books.push(newBook);
  displayBooks();
  document.getElementById("book-form").style.display = "none";
});

function displayBooks() {
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    let bookItem = document.createElement("li");
    bookItem.classList.add("book-card");

    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = book.title;
    bookItem.appendChild(title);

    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "by " + book.author;
    bookItem.appendChild(author);

    let pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = book.pages + " pages";
    bookItem.appendChild(pages);

    let read = document.createElement("p");
    read.classList.add(book.read ? "read" : "not-read");
    read.textContent = book.read ? "Read" : "Not Read";
    bookItem.appendChild(read);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    bookItem.appendChild(removeBtn);

    bookList.appendChild(bookItem);

    bookItem.addEventListener("click", function() {
      book.read = !book.read;
      displayBooks();
    });

    removeBtn.addEventListener("click", function() {
      books.splice(i, 1);
      displayBooks();
    });
  }
}
