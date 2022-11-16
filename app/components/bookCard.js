export function BookCard(props) {
  let { title, author, price } = props;

  return `
  <article class="card">
    <img src="" alt="${title}">
    <h2>Book title: ${title}</h2>
    <p>Author: ${author}</p>
    <span>Price: ${price}</span>
    <div>
     <a href="#">Show More</a>
     <a href="#">Add to bag</a>
    </div>
  </article>`;
}
