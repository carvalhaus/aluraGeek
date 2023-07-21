import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {
  event.preventDefault();

  const url_image = document.querySelector("[data-url-image]").value;
  const categories = document.querySelector("[data-categories]").value;
  const productName = document.querySelector("[data-product-name]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;

  try {
    await connectApi.uploadProduct(
      url_image,
      categories,
      productName,
      price,
      description
    );

    window.location.href = "../pages/products.html";
  } catch (e) {
    alert(e);
  }
}

form.addEventListener("submit", (event) => createProduct(event));
