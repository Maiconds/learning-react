import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, description, showPrice }) => (
  <div>
    <p>{name}</p>
    { showPrice ? <p>{price}</p> : null}
    <p>{description}</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  showPrice: PropTypes.bool.isRequired
};

export default Product; 
