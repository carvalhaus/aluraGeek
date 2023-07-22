import { connectApi } from "./connectApi.js";

const starWarsList = document.querySelector("[data-starwars-list]");
const consoleList = document.querySelector("[data-console-list]");
const diversosList = document.querySelector("[data-diversos-list]");

function buildProduct(name, price, image) {
  const product = document.createElement("div");
  product.className = "product";

  product.innerHTML = `
      <img
        src = ${image}
        alt = ${name}
        class="product__img"
      />
      <p class="description">${name}</p>
      <p class="price">R$ ${price}</p>
      <a class="more" href="#">
        Ver produto
      </a>
    `;

  return product;
}

async function showProducts() {
  const products = await connectApi.listProducts();
  products.forEach((element) => {
    switch (element.categories) {
      case "starwars":
        starWarsList.appendChild(
          buildProduct(element.product_name, element.price, element.url_image)
        );
        break;
      case "console":
        consoleList.appendChild(
          buildProduct(element.product_name, element.price, element.url_image)
        );
        break;
      case "diversos":
        diversosList.appendChild(
          buildProduct(element.product_name, element.price, element.url_image)
        );
        break;
    }
  });
}

showProducts();
