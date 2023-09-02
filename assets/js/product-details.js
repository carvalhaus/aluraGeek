function buildProductDetails(image, title, price, description) {
  const productDetails = document.querySelector("[data-product-details]");

  productDetails.innerHTML = `
    <img
          src="${image}"
          alt="${title}"
          class="product-img"
        />

        <div class="selected-product">
          <h3 class="product-title">${title}</h3>
          <p class="product-price">R$ ${price}</p>
          <p class="product-description">${description}</p>
        </div>
    `;

  return productDetails;
}

async function listProductDetails(productId) {
  try {
    const connection = await fetch(
      `http://localhost:3000/products/${productId}`
    );
    const connectionJson = await connection.json();
    return connectionJson;
  } catch {
    alert("Erro ao carregar dados!");
  }
}

async function showProductDetailed() {
  const productId = localStorage.getItem("productId");
  const product = await listProductDetails(productId);
  buildProductDetails(
    product.url_image,
    product.product_name,
    product.price,
    product.description
  );
}

showProductDetailed();
