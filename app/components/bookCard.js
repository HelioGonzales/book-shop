import { Cart } from "./cart.js";
import { Popup } from "./popup.js";

export function BookCard(props) {
  let { title, author, price, imageLink, description } = props;
  let quantity = 1;

  document.addEventListener("click", (e) => {
    if (e.target.dataset.id === author) {
      e.preventDefault();
      const bookList = JSON.parse(localStorage.getItem("book-list")) || [];

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
            location.reload();
            return bookList;
          }
        });
      } else {
        bookList.push({ title, author, price, quantity });
      }

      localStorage.setItem("book-list", JSON.stringify(bookList));
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.dataset.des === author) {
      console.log(description);
      document.getElementById("main").appendChild(Popup(description));
      document.querySelector(".popup").classList.add("active");
      document.querySelector("#overlay").classList.add("active");
    }
  });

  return `
  <article class="card">
    <img src="${imageLink}" alt="${title}">
    <h2>Book title: ${title}</h2>
    <p>Author: ${author}</p>
    <span>Price: ${price}</span>
    <div>
     <a href="/#" data-des="${author}" class="show-more">Show More</a>
     <a href="/#" class="add-to-bag" data-id="${author}">Add to bag</a>
    </div>
  </article>`;
}
