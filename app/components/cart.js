export function Cart() {
  const $cart = document.createElement("a");
  $cart.href = "#/bag";
  $cart.classList.add("cart");
  $cart.innerHTML = `
  <span class="material-symbols-outlined">
shopping_bag
</span>
`;
  return $cart;
}
