import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

function CartItem({ title, price, thumbnail, quantity, addToCart, removeFromCart }) {
  return (
    <li className="product flex justify-start gap-2 mb-5">
      <img className="w-[7rem] aspect-square h-auto object-contain" src={thumbnail} alt={price} />
      <div className>
        <div className="flex justify-center">
          <h3>{title}</h3> - <span>${price}</span>
        </div>

        <footer>
          <p>Cantidad: {quantity}</p>
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>X</button>
        </footer>
      </div>
    </li>
  );
}

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <Sheet>
        <SheetTrigger className="cart-button">
          <CartIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Tu carrito</SheetTitle>
            <SheetDescription>
              Aquí puedes añadir y quitar productos de tu carrito.
            </SheetDescription>
          </SheetHeader>

          <div>
            <ul>
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  removeFromCart={() => removeFromCart(product)}
                  {...product}
                />
              ))}
            </ul>
          </div>
          <SheetFooter>
            <button onClick={clearCart}>
              <ClearCartIcon />
            </button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
