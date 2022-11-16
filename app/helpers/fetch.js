export function fetchCB(props) {
  let { url, cbSuccess } = props;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      cbSuccess(data);
    })
    .catch((err) => {
      let message = "Error";
      document.getElementById("cards").innerHTML = `
      <div class="error">
      <p>Error ${err}: ${message}</p>
      </div>
      `;

      console.log(err);
    });
}
