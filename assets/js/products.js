import { connectApi } from "./connectApi.js";

const allProducts = document.querySelector("[data-products]");

function buildProduct(name, price, image, id) {
  const product = document.createElement("div");
  product.className = "product";

  product.innerHTML = `
      <img
        src = ${image}
        alt = ${name}
        class="product__img"
      />
      <div class="icons">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-icon">
        <g clip-path="url(#clip0_166_3499)">
        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_166_3499">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-icon">
        <g clip-path="url(#clip0_166_3484)">
        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_166_3484">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </div>
      <p class="description">${name}</p>
      <p class="price">R$ ${price}</p>
      <p class="id">#${id}</p>
    `;

  return product;
}

async function showProducts() {
  const products = await connectApi.listProducts();
  products.forEach((element) => {
    allProducts.appendChild(
      buildProduct(
        element.product_name,
        element.price,
        element.url_image,
        element.id
      )
    );
  });
}

showProducts();
