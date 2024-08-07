export const PRODUCTS_LIMIT = 18;
export async function fetchProducts(page) {
  const productsSkip = (page - 1) * PRODUCTS_LIMIT;
  const API = "https://dummyjson.com/products";

  if (page === undefined || page === null) {
    throw new Error(`Page number cannot be ${page}`);
  }

  /*   return await products; */

  return fetch(`${API}?limit=${PRODUCTS_LIMIT}&skip=${productsSkip}`)
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

      // total of products to calculate pages in pagination
      const total = json.total;
      return { products: mappedProducts, total };
    });
}
