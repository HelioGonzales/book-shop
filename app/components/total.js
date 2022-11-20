export function Total() {
  const $total = document.createElement("div");
  $total.classList.add("total");
  // $total.textContent = "TOTAL";

  const bookList = JSON.parse(localStorage.getItem("book-list"));
  let totalSum = [];

  if (bookList) {
    bookList.map((e) => {
      let subTotalSum = e.price * e.quantity;
      totalSum.push(subTotalSum);
    });
    $total.textContent = totalSum.reduce((acc, curr) => acc + curr, 0);
  } else {
    return 0;
  }

  return $total;
}
