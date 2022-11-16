import book_api from "../helpers/book_api.js";

export function Title() {
  const $h1 = document.createElement("h1");
  $h1.textContent = `${book_api.NAME.toUpperCase()}`;

  return $h1;
}
