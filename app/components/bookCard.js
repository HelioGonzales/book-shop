import { Cart } from "./cart.js";

export function BookCard(props) {
  let { title, author, price } = props;
  let quantity = 1;

  document.addEventListener("click", (e) => {
    if (e.target.dataset.id === author) {
      e.preventDefault();
      const bookList = JSON.parse(localStorage.getItem("book-list")) || [];

      let updateBook = Boolean;
      const bookExist = bookList.find(
        (auth) => auth.author.toString() === author
      );

      if (bookExist) {
        bookList.map((auth) => {
          if (auth.author === author) {
            // updateBook
            if (auth.quantity) {
              auth.quantity += quantity;
            } else {
              auth.quantity = quantity;
            }

            return bookList;
          }
        });
      } else {
        bookList.push({ title, author, price, quantity });
      }

      // bookList.push({ title, author, price, quantity });
      localStorage.setItem("book-list", JSON.stringify(bookList));

      //  Needs refator
      location.reload();
    }
  });

  return `
  <article class="card">
    <img src="" alt="${title}">
    <h2>Book title: ${title}</h2>
    <p>Author: ${author}</p>
    <span>Price: ${price}</span>
    <div>
     <a href="#" class="show-more">Show More</a>
     <a href="/#" class="add-to-bag" data-id="${author}">Add to bag</a>
    </div>
  </article>`;
}
