import { ProductList } from "./ProductList";
import { Cart } from "./Cart";
import "./Cart.css";

export function ShoppingCart() {
  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart Example</h2>
      <div className="shopping-cart-layout">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
