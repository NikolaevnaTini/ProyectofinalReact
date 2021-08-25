export async function getProductsJSON() {
    const response = await fetch('/assets/productos.json');
    const data = await response.json();
    return data;
  }
  