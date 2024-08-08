import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/products";
import { PRODUCTS_LIMIT as PRODUCTS_PER_PAGE } from "@/services/products";
import { useContext } from "react";
import { useFilters } from "./useFilters";

export function useProducts(page) {
  const { filters } = useFilters();
  const [products, setProducts] = useState([]);
  const [maxPages, setMaxPages] = useState();

  useEffect(() => {
    fetchProducts(page, filters.category).then((response) => {
      setProducts(response.products);
      setMaxPages(Math.ceil(response.total / PRODUCTS_PER_PAGE));
    });
  }, [page, filters]);

  return { products, maxPages };
}
