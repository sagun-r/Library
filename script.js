const myLibrary = [];

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
  if (myLibrary.length === 0) {
    p.remove();
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
  Book();
};

//display all books in library
const Book = () => {
  while (mainContainer.firstChild) {
    //removes all child from the main container
    mainContainer.removeChild(mainContainer.lastChild);
  }

  myLibrary.forEach((book) => {
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
    progressBar.setAttribute("value", book[3]);
    progressBar.setAttribute("max", book[2]);

    //append to parent
    mainContainer.append(cardContainer);
    cardContainer.append(cardBookTitle, cardBookAuthor, completionInfo, progressBar);
    completionInfo.append(cardPagesRead, cardBookPages, cardPercentRead);

    //assigns the values to display on card
    cardBookTitle.textContent = book[0];
    cardBookAuthor.textContent = book[1];
    cardPagesRead.textContent = book[3] + "/";
    cardBookPages.textContent = book[2];

    //calculates percent read
    cardPercentRead.textContent = "(" + Math.round((book[3] / book[2]) * 100) + "%)";
    if (cardPercentRead.textContent === "(100%)") {
      cardPercentRead.textContent = "(100% ✯)";
    }
  });
};
