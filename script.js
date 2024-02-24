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

  const titleValue = document.getElementById("bookTitle").value;
  const authorValue = document.getElementById("bookAuthor").value;
  const cardBookPagesValue = document.getElementById("totalPages").value;
  const pagesReadValue = document.getElementById("pagesRead").value;

  //container div
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  const cardBookTitle = document.createElement("p");
  cardBookTitle.classList.add("book-title");
  const cardBookAuthor = document.createElement("p");
  cardBookAuthor.classList.add("book-author");
  //completed info div
  const completionInfo = document.createElement("div");
  completionInfo.classList.add("completion-info");
  const cardBookPages = document.createElement("p");
  cardBookPages.classList.add("card-book-pages");
  const cardPagesRead = document.createElement("p");
  cardPagesRead.classList.add("card-pages-read");
  const cardPercentRead = document.createElement("p");
  cardPercentRead.classList.add("card-percent-read");

  //initialize progress bar and set the attributes
  const progressBar = document.createElement("progress");
  progressBar.setAttribute("value", pagesReadValue);
  progressBar.setAttribute("max", cardBookPagesValue);

  //append
  mainContainer.append(cardContainer);
  cardContainer.append(cardBookTitle, cardBookAuthor, completionInfo, progressBar);
  completionInfo.append(cardPagesRead, cardBookPages, cardPercentRead);

  cardBookTitle.textContent = titleValue;
  cardBookAuthor.textContent = authorValue;
  cardPagesRead.textContent = pagesReadValue + "/";
  cardBookPages.textContent = cardBookPagesValue;

  // cardBookTitle.textContent = "Harry Potter and the Sorcerer's Stone";
  // cardBookAuthor.textContent = "J.K. Rowling";
  // cardPagesRead.textContent = "238";
  // cardBookPages.textContent = "309";

  //adds symbol if percent completed is 100%
  cardPercentRead.textContent = "(" + Math.round((pagesReadValue / cardBookPagesValue) * 100) + "%)";
  if (cardPercentRead.textContent === "(100%)") {
    cardPercentRead.textContent = "(100% ✯)";
  }

  addBookToLibrary();
});

const addBookToLibrary = () => {
  const titleValue = document.getElementById("bookTitle").value;
  const authorValue = document.getElementById("bookAuthor").value;
  const cardBookPagesValue = document.getElementById("totalPages").value;
  const pagesReadValue = document.getElementById("pagesRead").value;
  myLibrary.push([titleValue, authorValue, cardBookPagesValue, pagesReadValue]);

  console.table(myLibrary);
};

// const Book = () => {
//   myLibrary.forEach(addBookToLibrary);
// };

// Book();

// const login = document.querySelector(".login");
// login.addEventListener("click", () => {});
