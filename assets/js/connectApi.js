async function listProducts() {
  try {
    const connection = await fetch("http://localhost:3000/products");
    const connectionJson = await connection.json();
    return connectionJson;
  } catch {
    alert("Erro ao carregar dados!");
  }
}

export const connectApi = {
  listProducts,
};
