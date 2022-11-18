export function Bag() {
  let bookList = JSON.parse(localStorage.getItem("book-list"));
  return bookList.map((book) => {
    console.log(book);

    return `
        <div class="bag">
          <h2>Title: ${book.title}</h2>
          <p>Author: ${book.author}</p>
          <h3>Pricec: ${book.price}</h3>
          <a>x</a>
        </div>
    `;
  });
  //   return `
  //  <section class="bag-page">
  //   <div>
  //     <h2>Title:</h2>
  //     <p>Author:</p>
  //     <span>Pricec:</span>
  //   </div>
  //  </section>
  //  `;
}
