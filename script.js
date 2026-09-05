const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();

    navMenu.classList.toggle("show-menu");
  });

  navMenu.addEventListener("click", function (event) {
    event.stopPropagation();

    if (event.target.tagName === "A") {
      navMenu.classList.remove("show-menu");
    }
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("show-menu");
    }
  });
}

const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const service = document.querySelector("#service").value;
    const property = document.querySelector("#property").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const message = document.querySelector("#message").value;

    const whatsappMessage =
      `Hello Protos Group, I would like to make a service booking.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Service: ${service}%0A` +
      `Property Type: ${property}%0A` +
      `Preferred Date: ${date}%0A` +
      `Preferred Time: ${time}%0A` +
      `Additional Details: ${message}`;

    const whatsappNumber = "2347063300548";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });
}
