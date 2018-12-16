import React, { Component } from 'react';
import Product from '../product/Product';
import { getAllProducts } from '../../services/productServices';

class ProductRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: '',
      products: [],
      showPrices: true
    };
  }

  componentDidMount() {
    getAllProducts()
      .then(products => this.setState({
        products
      }));
  }

  change = (e, field) => {
    const value = e.target.value;
    e.preventDefault();
    const isPrice = field === 'price';
     if (!(isPrice && isNaN(value))) {
       this.setState({
        [field]: isPrice ? parseFloat(value) : value
      });
     }
  }

   addProduct = () => {
    const { name, price, description } = this.state;

    if (name !== '' && price !== 0) {
      this.setState(state => ({
        name: '',
        price: 0,
        description: '',
        products: [...state.products, { name, price, description }]
      }));
    }

  }

  changeShowPrice = () => {
    this.setState(state => ({
      showPrices: !state.showPrices
    }));
  }

  render() {
    const { name, price, description, products, showPrices } = this.state;
    return(
      <div>
        <p>
          Nome: <input type="text" value={name} onChange={e => this.change(e, 'name')} />
        </p>
        <p>
          Preço: <input type="text" value={price.toString()} onChange={e => this.change(e, 'price')} />
        </p>
        <p>
          Descrição: <input type="text" value={description} onChange={e => this.change(e, 'description')} />
        </p>
        <p>
          <button type="button" onClick={this.addProduct} >Adicionar</button>
        </p>
        <p>
          <input type="checkbox" checked={showPrices} onChange={this.changeShowPrice} />Show Prices
        </p>
        {
          products.map(({ name, price, description }, index) => (
            <Product key={index} name={name} price={price} description={description} showPrice={showPrices} />
          ))
        }
      </div>
    );
  }

 }

 export default ProductRegister;
