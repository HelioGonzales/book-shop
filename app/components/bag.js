export function Bag() {
  let bookList = JSON.parse(localStorage.getItem("book-list"));

  return bookList.map((book) => {
    // Remove item
    document.addEventListener("click", (e) => {
      if (e.target.dataset.id === book.author) {
        const newBookList = bookList.filter(
          (item) => item.author !== book.author
        );

        bookList = newBookList;
        location.reload();
      }

      localStorage.setItem("book-list", JSON.stringify(bookList));
    });

    return `
        <div class="bag">
          <h2>Title: ${book.title}</h2>
          <p>Author: ${book.author}</p>
          <h3>Price: ${book.price}</h3>
          <h3>Quantity: ${book.quantity}</h3>
          <h3>Sub-Total: ${Number(book.price * book.quantity)}</h3>
          <a class="delete-book" data-id="${book.author}">x</a>
        </div>
    `;
  });
}
