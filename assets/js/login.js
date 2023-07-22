import { connectApi } from "./connectApi.js";

const formLogin = document.querySelector("[data-form-login]");

async function logUser(e) {
  e.preventDefault();

  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  const users = await connectApi.userLogin();

  users.forEach(function (user) {
    if (email === user.email && password === user.password) {
      alert("Login realizado com sucesso!");
      window.location.href = "../pages/products.html";
    } else {
      alert("E-mail ou senha inválidos!");
    }
  });
}

formLogin.addEventListener("submit", (e) => logUser(e));
