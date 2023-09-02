import { connectApi } from "./connectApi.js";

const contactForm = document.querySelector("[data-contact-form]");

async function contactUs(event) {
  event.preventDefault();

  const contactName = document.querySelector("[data-name]").value;
  const message = document.querySelector("[data-message]").value;

  try {
    await connectApi.sendMessage(contactName, message);
    alert("Mensagem enviada com sucesso!");
    window.location.reload();
  } catch {
    alert("Não foi possível salva sua mensagem!");
  }
}

contactForm.addEventListener("submit", (event) => contactUs(event));
