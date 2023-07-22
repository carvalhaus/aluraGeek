async function listProducts() {
  try {
    const connection = await fetch("http://localhost:3000/products");
    const connectionJson = await connection.json();
    return connectionJson;
  } catch {
    alert("Erro ao carregar dados!");
  }
}

async function uploadProduct(
  url_image,
  categories,
  productName,
  price,
  description
) {
  const connection = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url_image: url_image,
      categories: categories,
      product_name: productName,
      price: price,
      description: description,
    }),
  });

  if (!connection.ok) {
    throw new Error("Não foi possível enviar o vídeo!");
  }

  const connectionJSON = await connection.json();

  return connectionJSON;
}

async function userLogin() {
  try {
    const connection = await fetch("http://localhost:3000/users");
    const connectionJson = await connection.json();
    return connectionJson;
  } catch {
    alert("Erro ao conectar com servidor!");
  }
}

export const connectApi = {
  listProducts,
  uploadProduct,
  userLogin,
};
