import { connectApi } from "./connectApi.js";
import { buildProduct, getProductId } from "./main.js";

const allProducts = document.querySelector("[data-products]");

async function showProducts() {
  const products = await connectApi.listProducts();

  products.forEach((product) => {
    allProducts.appendChild(
      buildProduct(
        product.product_name,
        product.price,
        product.url_image,
        product.id
      )
    );
  });

  const productsList = document.querySelectorAll(".product");

  getProductId(productsList);
}

showProducts();
