import { Cart } from "./cart.js";
import { Title } from "./title.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(Cart());

  return $header;
}
