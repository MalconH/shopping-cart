import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/products";
import { PRODUCTS_LIMIT as PRODUCTS_PER_PAGE } from "@/services/products";

export function useProducts(page) {
  const [products, setProducts] = useState([]);
  const [maxPages, setMaxPages] = useState();

  useEffect(() => {
    fetchProducts(page).then((response) => {
      setProducts(response.products);
      setMaxPages(Math.ceil(response.total / PRODUCTS_PER_PAGE));
    });
  }, [page]);

  return { products, maxPages };
}
