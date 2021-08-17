import React from "react";
import PropTypes from "prop-types";

function OffersList({ offers, selectedOffers, toggleOffer }) {
  return (
    <div>
      <h3>Offers List</h3>
      <ul>
        {Object.keys(offers).map((offerKey) => (
          <li key={offerKey}>
            <input
              type="checkbox"
              checked={selectedOffers[offerKey]}
              onChange={() => toggleOffer(offerKey)}
            />{" "}
            {offers[offerKey].name}
          </li>
        ))}
      </ul>
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.object,
  selectedOffers: PropTypes.object,
  toggleOffer: PropTypes.func,
};

export default React.memo(OffersList);
