export function OrderConfirmation() {
  const $orderConfirmation = document.createElement("div");
  $orderConfirmation.classList.add("order-confirmation");

  $orderConfirmation.textContent = "ORDER CONFIRMATION";

  let url_string = window.location;
  let url = new URL(url_string);

  const sumaryObj = {
    name: url.searchParams.get("name"),
    surname: url.searchParams.get("surname"),
    date: url.searchParams.get("date"),
    street: url.searchParams.get("street"),
    house: url.searchParams.get("house"),
    flat_number: url.searchParams.get("flat_number"),
    radio_input: url.searchParams.get("radio-input"),
  };

  $orderConfirmation.innerHTML = `
  <ul class"ul-summary">
    <li>Name: ${sumaryObj.name}</li>
    <li>Surname: ${sumaryObj.surname}</li>
    <li>Delivery date: ${sumaryObj.date}</li>
    <li>Street: ${sumaryObj.street}</li>
    <li>House: ${sumaryObj.house}</li>
    <li>Flat number: ${sumaryObj.flat_number}</li>
    <li>Payment method${sumaryObj.radio_input}</li>
  </ul>
  `;

  // let name = url.searchParams.get("name");
  // let surname = url.searchParams.get("surname");
  // let date = url.searchParams.get("date");
  // let street = url.searchParams.get("street");
  // let house = url.searchParams.get("house");
  // let flat_number = url.searchParams.get("flat_number");
  // let radio_input = url.searchParams.get("radio-input");

  return $orderConfirmation;
}
