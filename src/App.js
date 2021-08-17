import { useCallback, useState } from "react";

import { Products, Offers } from "./constants";
import {
  ProductList,
  ShoppingCart,
  OffersList,
  TotalPrice,
} from "./components";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState(
    Object.keys(Offers).reduce(
      (acc, offerKey) => ({ ...acc, [offerKey]: false }),
      {}
    )
  );

  const addToCart = useCallback((newProduct) => {
    setShoppingCart((productsInCart) => [...productsInCart, newProduct]);
  }, []);

  const removeProduct = useCallback((index) => {
    setShoppingCart((productsInCart) =>
      productsInCart.filter((_product, i) => i !== index)
    );
  }, []);

  const toggleOffer = useCallback((offerKey) => {
    setSelectedOffers((oldOffers) => ({
      ...oldOffers,
      [offerKey]: !oldOffers[offerKey],
    }));
  }, []);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <ProductList products={Products} addToCart={addToCart} />

      <OffersList
        offers={Offers}
        setOffers={Offers}
        selectedOffers={selectedOffers}
        toggleOffer={toggleOffer}
      />

      <TotalPrice
        products={Products}
        offers={Offers}
        shoppingCart={shoppingCart}
        selectedOffers={selectedOffers}
      />

      <ShoppingCart
        products={Products}
        shoppingCart={shoppingCart}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
