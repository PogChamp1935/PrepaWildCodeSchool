const message =
  "Merci de votre message, nous répondrons à vos attentes dans de brefs délais.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
