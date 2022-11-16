import book_api from "../helpers/book_api.js";
import { fetchCB } from "../helpers/fetch.js";
import { BookCard } from "./bookCard.js";

export function Router() {
  const d = document;
  const w = window;

  let { hash } = location;

  d.getElementById("cards").innerHTML = null;

  console.log(hash);

  if (!hash || hash === "#/") {
    fetchCB({
      url: book_api.BOOK_API,
      cbSuccess: (books) => {
        console.log(books);
        let html = "";
        books.forEach((post) => {
          html += BookCard(post);
          d.getElementById("cards").innerHTML = html;
        });
      },
    });
  } else if (hash === "#/bag") {
    d.getElementById("cards").innerHTML = "<h2>Bag</h2>";
  } else if (hash === "#/form") {
    d.getElementById("cards").innerHTML = "<h2>Form</h2>";
  }
}
