export function Bag() {
  const newList = [];
  const bookList = JSON.parse(localStorage.getItem("book-list"));
  bookList.map((book) => {
    console.log(book);
  });
  return `
 <section class="bag-page">
  <div>
    <h2>Title:</h2>
    <p>Author:</p>
    <span>Pricec:</span>
  </div>
 </section>
 `;
}
