export function FormOrder() {
  const $form = document.querySelector(".form-order");
  let $inputs = document.querySelectorAll(".form-order [required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-error", "show-error-form");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".form-order [required]")) {
      let $input = e.target;
      let pattern = $input.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? document.getElementById($input.name).classList.add("is-active")
          : document.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  const form = document.getElementById("form");
  form.addEventListener("change", (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = !form.checkValidity();
  });
}
