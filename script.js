const myLibrary = [];
const p = document.querySelector("p");
const addBtn = document.querySelector(".add-btn");
const mainContainer = document.querySelector(".main-container");

addBtn.addEventListener("click", () => {
  p.remove();
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  mainContainer.append(cardContainer);
});

const Book = () => {
  for (book of myLibrary) {
    p.textContent += book + " ";
  }
};

const addBookToLibrary = () => {};
Book();

const login = document.querySelector(".login");
// login.addEventListener("click", () => {});
