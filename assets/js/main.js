import { connectApi } from "./connectApi.js";

const starWarsList = document.querySelector("[data-starwars-list]");
const consoleList = document.querySelector("[data-console-list]");
const diversosList = document.querySelector("[data-diversos-list]");

export function buildProduct(name, price, image, id) {
  const product = document.createElement("li");
  product.className = "product";
  product.setAttribute("id", `${id}`);

  product.innerHTML = `
      <img
        src = ${image}
        alt = ${name}
        class="product__img"
      />
      <p class="description">${name}</p>
      <p class="price">R$ ${price}</p>
      <p class="more" href="/pages">
        Ver produto
      </p>
    `;

  return product;
}

async function showProducts() {
  const products = await connectApi.listProducts();

  products.forEach((element) => {
    switch (element.categories) {
      case "starwars":
        starWarsList.appendChild(
          buildProduct(
            element.product_name,
            element.price,
            element.url_image,
            element.id
          )
        );
        break;
      case "console":
        consoleList.appendChild(
          buildProduct(
            element.product_name,
            element.price,
            element.url_image,
            element.id
          )
        );
        break;
      case "diversos":
        diversosList.appendChild(
          buildProduct(
            element.product_name,
            element.price,
            element.url_image,
            element.id
          )
        );
        break;
    }
  });

  const productsList = document.querySelectorAll(".product");

  getProductId(productsList);
}

showProducts();

export function getProductId(productsList) {
  for (const product of productsList) {
    product.addEventListener("click", (e) => {
      let productId = e.currentTarget.id;
      localStorage.setItem("productId", productId);

      window.location.href = "/pages/product-details.html";
    });
  }
}
