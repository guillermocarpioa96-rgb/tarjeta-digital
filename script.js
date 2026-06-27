const cardUrl = "https://guillermocarpioa96-rgb.github.io/tarjeta-digital/";
const whatsappUrl = "https://wa.me/51942960719";

function setPlaceholderLinks() {
  const whatsappLink = document.querySelector('[data-link="whatsapp"]');

  if (whatsappLink) {
    whatsappLink.href = whatsappUrl;
  }
}

function renderQr() {
  const qrImage = document.querySelector("#qrCode");
  if (!qrImage) return;

  const qrApi = new URL("https://api.qrserver.com/v1/create-qr-code/");
  qrApi.searchParams.set("size", "360x360");
  qrApi.searchParams.set("margin", "12");
  qrApi.searchParams.set("color", "090B0C");
  qrApi.searchParams.set("bgcolor", "F3F4EF");
  qrApi.searchParams.set("data", cardUrl);

  qrImage.src = qrApi.toString();
}

window.addEventListener("DOMContentLoaded", function () {
  setPlaceholderLinks();
  renderQr();
});
