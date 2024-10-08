import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";
import { Pagination } from "./components/Pagination";
import { useState } from "react";

function App() {
  const { filterProducts } = useFilters();
  const DEFAULT_PAGE = 1;
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { products, maxPages } = useProducts(page);

  const filteredProducts = filterProducts(products);

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <main>
          <Products products={filteredProducts} />
        </main>
        {maxPages > 1 && <Pagination page={page} changePage={setPage} maxPages={maxPages} />}
      </CartProvider>
    </>
  );
}

export default App;
