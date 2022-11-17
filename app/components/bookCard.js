export function BookCard(props) {
  let { title, author, price } = props;

  document.addEventListener("click", (e) => {
    // if (e.target.matches(".card .add-to-bag"))
    if (e.target.dataset.id === author) {
      e.preventDefault();
      const bookList = JSON.parse(localStorage.getItem("book-list")) || [];
      // bookList.push(e.target.dataset.id);
      bookList.push({ title, author, price });
      localStorage.setItem("book-list", JSON.stringify(bookList));
    }
  });

  return `
  <article class="card">
    <img src="" alt="${title}">
    <h2>Book title: ${title}</h2>
    <p>Author: ${author}</p>
    <span>Price: ${price}</span>
    <div>
     <a href="#" class="show-more">Show More</a>
     <a href="/#" class="add-to-bag" data-id="${author}">Add to bag</a>
    </div>
  </article>`;
}
