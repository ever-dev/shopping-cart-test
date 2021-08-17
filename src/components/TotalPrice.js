import React, { useMemo } from "react";
import PropTypes from "prop-types";

function TotalPrice({ products, offers, shoppingCart, selectedOffers }) {
  const totalCost = useMemo(() => {
    const productCount = shoppingCart.reduce(
      (acc, product) => ({
        ...acc,
        [product]: (acc[product] || 0) + 1,
      }),
      {}
    );

    const offersApplied = Object.keys(selectedOffers)
      .filter((offerKey) => selectedOffers[offerKey])
      .reduce(
        (acc, offerKey) => ({
          ...acc,
          [offers[offerKey].productType]: offerKey,
        }),
        {}
      );

    return Object.keys(productCount).reduce((sum, productKey) => {
      const offerApplied = offersApplied[productKey];
      const appliedProductCount = offerApplied
        ? Math.floor(
            productCount[productKey] / offers[offerApplied].totalCount
          ) *
            offers[offerApplied].priceCount +
          (productCount[productKey] % offers[offerApplied].totalCount)
        : productCount[productKey];
      const productPrice = appliedProductCount * products[productKey].price;
      return sum + productPrice;
    }, 0);
  }, [shoppingCart, selectedOffers, products, offers]);

  return (
    <h3>
      Total Cost: <strong>${totalCost.toFixed(2)}</strong>
    </h3>
  );
}

TotalPrice.propTypes = {
  products: PropTypes.object,
  offers: PropTypes.object,
  shoppingCart: PropTypes.array,
  selectedOffers: PropTypes.object,
};

export default React.memo(TotalPrice);
