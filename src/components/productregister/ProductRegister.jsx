import React, { Component } from 'react';

class ProductRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: '',
      products: []
    };
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

  render() {
    const { name, price, description } = this.state;
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
      </div>
    );
  }

 }

 export default ProductRegister;
