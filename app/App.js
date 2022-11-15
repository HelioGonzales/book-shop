import book_api from "./helpers/book_api.js";
import { fetchCB } from "./helpers/fetch.js";

export function App() {
  document.getElementById("root").innerHTML = "<h1>Welcome to book shop</h1>";
  // console.log(book_api);
  fetchCB({
    url: book_api.BOOK_API,
    cbSuccess: (books) => {
      console.log(books);
    },
  });
}
