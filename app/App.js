import { Main } from "./components/main.js";
import { Header } from "./components/header.js";
import { Router } from "./components/router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;

  $root.appendChild(Header());
  $root.appendChild(Main());

  Router();
}
