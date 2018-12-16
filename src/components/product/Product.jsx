import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price, description }) => (
  <div>
    <p>{name}</p>
    <p>{price}</p>
    <p>{description}</p>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

export default Product; 
