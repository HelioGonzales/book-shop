import book_api from "../helpers/book_api.js";

export function Title() {
  const $titleLink = document.createElement("a");
  const $h1 = document.createElement("h1");
  $titleLink.appendChild($h1);
  $titleLink.href = "/book-shop/#/";
  // $titleLink.href = "/#" || "book-shop/#/";
  $titleLink.classList.add("title-link");
  $h1.textContent = `${book_api.NAME.toUpperCase()}`;

  return $titleLink;
}
