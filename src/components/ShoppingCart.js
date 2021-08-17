import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({ products, shoppingCart, removeProduct }) {
  return (
    <div>
      <h3>Shopping Cart</h3>
      {shoppingCart?.length > 0 ? (
        <ul>
          {shoppingCart.map((product, index) => {
            return (
              <li key={index}>
                <span>{products[product].name}</span>&nbsp;
                <button onClick={() => removeProduct(index)}>X</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No products in the cart</p>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.object,
  shoppingCart: PropTypes.array,
  removeProduct: PropTypes.func,
};

export default React.memo(ShoppingCart);
