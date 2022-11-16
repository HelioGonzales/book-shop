import { Cards } from "./components/cards.js";
import { Header } from "./components/header.js";
import { Router } from "./components/router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Cards());

  Router();
}
