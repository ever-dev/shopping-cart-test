import { useCallback, useState, useMemo } from "react";

import { Products } from "./constants";
import { ProductList, ShoppingCart } from "./components";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = useCallback((newProduct) => {
    setShoppingCart((productsInCart) => [...productsInCart, newProduct]);
  }, []);

  const removeProduct = useCallback((index) => {
    setShoppingCart((productsInCart) =>
      productsInCart.filter((_product, i) => i !== index)
    );
  }, []);

  const totalCost = useMemo(() => {
    return shoppingCart.reduce(
      (sum, product) => sum + Products[product].price,
      0
    );
  }, [shoppingCart]);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <ProductList products={Products} addToCart={addToCart} />

      <h3>
        Total Cost: <strong>${totalCost.toFixed(2)}</strong>
      </h3>

      <ShoppingCart
        products={Products}
        shoppingCart={shoppingCart}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
