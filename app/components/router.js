import book_api from "../helpers/book_api.js";
import { fetchCB } from "../helpers/fetch.js";
import { Bag } from "./bag.js";
import { BookCard } from "./bookCard.js";
import { FormOrder } from "./form-order.js";
import { OrderConfirmation } from "./order-confirmation.js";
import { Total } from "./total.js";

export function Router() {
  const d = document;
  const w = window;
  const $form = d.querySelector(".form-order");

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
    $form.classList.add("show-form");
  } else if (hash === "#/bag") {
    const $sectionBag = d.createElement("div");
    $sectionBag.classList.add("bag-container");

    const $confirmBtn = d.createElement("a");
    $confirmBtn.classList.add("confirm-btn");
    $confirmBtn.href = "#/form-order";
    $confirmBtn.textContent = "CONFIRM ORDER";

    d.getElementById("main").appendChild($sectionBag);
    $sectionBag.innerHTML = Bag();
    $sectionBag.appendChild(Total());
    $sectionBag.appendChild($confirmBtn);

    $form.classList.add("show-form");
  } else if (hash === "#/form-order") {
    $form.classList.remove("show-form");
    FormOrder();
  } else if (hash === "#/order-confirmation") {
    d.getElementById("main").appendChild(OrderConfirmation());
  }
}
