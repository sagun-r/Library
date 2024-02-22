const myLibrary = [
  ["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "309", "238"],
  ["Life of Pi", "Yann Martel", "352", "352"],
  ["Daughter of Fortune", "Isabel Allende", "496", "72"],
];

const p = document.querySelector(".empty-msg");
const addBtn = document.querySelector(".add-btn");
const mainContainer = document.querySelector(".main-container");
const submitBtn = document.querySelector("#submit");
const addBookWrapper = document.querySelector(".add-book-wrapper");

//gets rid of add book section if open when clicked on main body
mainContainer.addEventListener("click", () => {
  if (addBookWrapper.style.display == "flex") {
    addBookWrapper.style.display = "";
  }
});

//opens or closes add book section
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

  bookTitle.textContent = titleValue;
  bookAuthor.textContent = authorValue;
  totalPage.textContent = totalPagesValue;
  pageRead.textContent = pagesReadValue;

  // bookTitle.textContent = "Harry Potter and the Sorcerer's Stone";
  // bookAuthor.textContent = "J.K. Rowling";
  // totalPage.textContent = "309";
  // pageRead.textContent = "238";
});

const Book = () => {
  myLibrary.forEach(addBookToLibrary);
};

/* const addBookToLibrary = () => {

};*/
Book();

const login = document.querySelector(".login");
// login.addEventListener("click", () => {});
