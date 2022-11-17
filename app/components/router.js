import book_api from "../helpers/book_api.js";
import { fetchCB } from "../helpers/fetch.js";
import { Bag } from "./bag.js";
import { BookCard } from "./bookCard.js";

export function Router() {
  const d = document;
  const w = window;

  let { hash } = location;

  d.getElementById("main").innerHTML = null;

  console.log(hash);

  if (!hash || hash === "#/") {
    fetchCB({
      url: book_api.BOOK_API,
      cbSuccess: (books) => {
        console.log(books);
        let html = "";
        books.map((book) => {
          html += BookCard(book);
          d.getElementById("main").innerHTML = html;
        });
      },
    });
  } else if (hash === "#/bag") {
    d.getElementById("main").innerHTML = Bag();
  } else if (hash === "#/form") {
    d.getElementById("main").innerHTML = "<h2>Form</h2>";
  }
}
