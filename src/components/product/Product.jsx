import React from 'react';
import PropTypes from 'prop-types'

const Product = (props) => {
    const {name, price, description} = props;
    return (
        <div>
           <p>Nome: {name}</p>
           <p>Preço: {price}</p>
           <p>Descrição: {description}</p>
        </div>
    )};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
};

export default Product;
