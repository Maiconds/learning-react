import React from 'react';
import PropTypes from 'prop-types'

const Product = (props) => {
    const {name, price, description, showPrice} = props;
    return (
        <div>
           Nome:<p className={'product-name'}>{name}</p>
           {showPrice? <p className={'product-price'}>Preço: {price}</p> : null }
           Descrição:  <p className={'product-description'}>{description}</p>
        </div>
    )};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    showPrice: PropTypes.bool
};

export default Product;
