export function Cart() {
  let bookList = JSON.parse(localStorage.getItem("book-list")).length;
  const $cart = document.createElement("a");
  $cart.href = "#/bag";
  $cart.classList.add("cart");
  $cart.innerHTML = `
  <span class="material-symbols-outlined">
shopping_bag
</span><span>${bookList}</span>
`;
  return $cart;
}
