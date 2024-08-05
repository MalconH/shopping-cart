import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/products";

export function useProducts(page) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(page).then((responseProducts) => setProducts(responseProducts));
  }, [page]);

  return { products };
}
