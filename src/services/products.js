export const PRODUCTS_LIMIT = 18;
const API = "https://dummyjson.com";

export function fetchProducts(page, category) {
  let categoryEndpoint = "";
  const productsSkip = (page - 1) * PRODUCTS_LIMIT;
  const hasCategory = category !== "all";

  if (hasCategory) {
    categoryEndpoint = `category/${category}`;
  }

  if (page === undefined || page === null) {
    throw new Error(`Page number cannot be ${page}`);
  }

  return fetch(`${API}/products/${categoryEndpoint}?limit=${PRODUCTS_LIMIT}&skip=${productsSkip}`)
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

export function getCategories() {
  return fetch(`${API}/products/category-list`)
    .then((res) => res.json())
    .then((json) => {
      return json.filter((a, b) => a.localeCompare(b));
    });
}
