import React from "react";
import PropTypes from "prop-types";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {Object.keys(products).map((productKey) => (
          <li key={productKey}>
            <span>
              {products[productKey].name} - {products[productKey].price * 100}c
            </span>{" "}
            &nbsp;
            <button onClick={() => addToCart(productKey)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.object,
  addToCart: PropTypes.func,
};

export default React.memo(ProductList);
