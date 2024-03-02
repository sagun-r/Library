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
  //removes all child from the main container
  while (mainContainer.firstChild) {
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

    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      // Find the index of the book in the myLibrary array
      const index = Array.from(mainContainer.children).indexOf(cardContainer);

      // Remove the book from the myLibrary array
      myLibrary.splice(index, 1);

      // Remove the cardContainer from the DOM
      cardContainer.remove();
    });

    //append to parent
    mainContainer.append(cardContainer);
    cardContainer.append(cardBookTitle, cardBookAuthor, completionInfo, progressBar);
    completionInfo.append(cardPagesRead, cardBookPages, cardPercentRead);
    cardContainer.append(deleteBtn);

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
