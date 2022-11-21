export function fetchCB(props) {
  let { url, cbSuccess } = props;
  let responseClone;

  fetch(url)
    .then((response) => {
      responseClone = response.clone();
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      cbSuccess(data);
    })
    .catch((err) => {
      let message = "Error";
      document.getElementById("main").innerHTML = `
      <div class="error">
      <p>Error ${err}: ${message}</p>
      </div>
      `;

      console.log(err);
    });
}
