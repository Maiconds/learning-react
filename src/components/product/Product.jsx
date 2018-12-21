import React from 'react';
import PropTypes from 'prop-types'

const Product = (props) => {
    const {name, price, description, showPrice} = props;
    return (
        <div>
           <p>Nome: {name}</p>
           {showPrice? <p>Preço: {price}</p> : null }
           <p>Descrição: {description}</p>
        </div>
    )};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    showPrice: PropTypes.bool
};

export default Product;
