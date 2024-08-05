export async function fetchProducts(page) {
  const API = "https://dummyjson.com/products";
  const PRODUCTS_LIMIT = 18;
  const PRODUCTS_SKIP = (page - 1) * PRODUCTS_LIMIT;

  if (page === undefined || page === null) {
    throw new Error(`Page number cannot be ${page}`);
  }

  /*   return await products; */

  return fetch(`${API}?limit=${PRODUCTS_LIMIT}&skip=${PRODUCTS_SKIP}`)
    .then((r) => r.json())
    .then((json) => {
      const mappedProducts = json.products?.map((product) => {
        return {
          id: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
          category: product.category,
        };
      });

      return mappedProducts;
    });
}
