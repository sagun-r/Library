const myLibrary = [
  ["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "309", "238"],
  ["Life of Pi", "Yann Martel", "352", "352"],
  ["Daughter of Fortune", "Isabel Allende", "496", "72"],
];

const addBtn = document.querySelector(".add-btn");

const addBookWrapper = document.querySelector(".add-book-wrapper");
const submitBtn = document.querySelector("#submit");

const mainContainer = document.querySelector(".main-container");
const p = document.querySelector(".empty-msg");

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

  const completionInfo = document.createElement("div");
  completionInfo.classList.add("completion-info");
  const totalPage = document.createElement("p");
  totalPage.classList.add("total-page");
  const pageRead = document.createElement("p");
  pageRead.classList.add("page-read");
  const percentRead = document.createElement("p");
  percentRead.classList.add("percentRead");

  const progressBar = document.createElement("progress");

  const titleValue = document.getElementById("bookTitle").value;
  const authorValue = document.getElementById("bookAuthor").value;
  const totalPagesValue = document.getElementById("totalPages").value;
  const pagesReadValue = document.getElementById("pagesRead").value;

  progressBar.setAttribute("value", pagesReadValue);
  progressBar.setAttribute("max", totalPagesValue);

  mainContainer.append(cardContainer);
  cardContainer.append(bookTitle, bookAuthor, completionInfo, progressBar);
  completionInfo.append(pageRead, totalPage, percentRead);

  bookTitle.textContent = titleValue;
  bookAuthor.textContent = authorValue;
  pageRead.textContent = pagesReadValue + "/";
  totalPage.textContent = totalPagesValue;

  // bookTitle.textContent = "Harry Potter and the Sorcerer's Stone";
  // bookAuthor.textContent = "J.K. Rowling";
  // pageRead.textContent = "238";
  // totalPage.textContent = "309";

  percentRead.textContent = "(" + ((pagesReadValue / totalPagesValue) * 100).toFixed(2) + "%)";
  if (percentRead.textContent === "(100.00%)") {
    percentRead.textContent = "(100% ✯)";
  }
});

const Book = () => {
  myLibrary.forEach(addBookToLibrary);
};

/* const addBookToLibrary = () => {

};*/
Book();

const login = document.querySelector(".login");
// login.addEventListener("click", () => {});
