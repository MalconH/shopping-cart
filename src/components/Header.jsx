import { Filters } from "./Filters";
import "./Header.css";

export function Header() {
  return (
    <header>
      <h1 className="title">
        Carrito <span className="jiggle">🛒</span>
      </h1>
      <Filters />
    </header>
  );
}
