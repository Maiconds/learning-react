import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, description, showPrice }) => (
  <div>
    <p className="product-name">{name}</p>
    { showPrice ? <p className="product-price">{price}</p> : null}
    <p className="product-description">{description}</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  showPrice: PropTypes.bool.isRequired
};

export default Product; 
