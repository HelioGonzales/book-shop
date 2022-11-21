export function Popup(prop) {
  const $popup = document.createElement("div");
  const $overlay = document.createElement("div");
  // const $closePopup = document.querySelector("[data-btn-close]");

  $overlay.id = "overlay";
  document.getElementById("main").appendChild($overlay);
  $popup.classList.add("popup");

  document.addEventListener("click", (e) => {
    // e.preventDefault();
    if (e.target.matches(".btn-close-popup")) {
      document.querySelector(".popup").classList.remove("active");
      document.querySelector("#overlay").classList.remove("active");
      location.reload();
    }
  });

  $popup.innerHTML = `
  <p class="popup-des">${prop}</p>
  <div class="popup-header">
    <button data-btn-close class="btn-close-popup">Close</button>
  </div>
  `;

  return $popup;
}
