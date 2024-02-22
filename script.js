const myLibrary = [["Harry Potter and the Sorcerer's Stone"], ["J.K. Rowling"], ["309"], ["238"]];
[["Life of Pi"], ["Yann Martel"], ["352"], ["352"]];
[["Daughter of Fortune"], ["Isabel Allende"], ["496"], ["72"]];

const p = document.querySelector(".empty-msg");
const addBtn = document.querySelector(".add-btn");
const mainContainer = document.querySelector(".main-container");
const submitBtn = document.querySelector("#submit");
const addBookWrapper = document.querySelector(".add-book-wrapper");

addBtn.addEventListener("click", () => {
  if (addBookWrapper.style.display != "") {
    addBookWrapper.style.display = "";
  } else {
    addBookWrapper.style.display = "flex";
  }
});

submitBtn.addEventListener("click", () => {
  p.remove();
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const bookTitle = document.createElement("p");
  bookTitle.classList.add("book-title");
  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  const totalPage = document.createElement("p");
  totalPage.classList.add("total-page");
  const pageRead = document.createElement("p");
  pageRead.classList.add("page-read");
  const progressBar = document.createElement("progress");

  const titleValue = document.getElementById("bookTitle").value;
  const authorValue = document.getElementById("bookAuthor").value;
  const totalPagesValue = document.getElementById("totalPages").value;
  const pagesReadValue = document.getElementById("pagesRead").value;

  progressBar.setAttribute("value", pagesReadValue);
  progressBar.setAttribute("max", totalPagesValue);

  mainContainer.append(cardContainer);
  cardContainer.append(bookTitle, bookAuthor, totalPage, pageRead, progressBar);

  bookTitle.textContent = "Book: " + titleValue;
  bookAuthor.textContent = "Author: " + authorValue;
  totalPage.textContent = "Total Pages: " + totalPagesValue;
  pageRead.textContent = "Pages Read: " + pagesReadValue;
});

// const Book = () => {
//   for (book of myLibrary) {
//     p.textContent += book + " ";
//   }
// };

// const addBookToLibrary = () => {};
// Book();

const login = document.querySelector(".login");
// login.addEventListener("click", () => {});
