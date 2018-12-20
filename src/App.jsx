import React, { Component } from 'react';
import Product from './components/product/Product';
import ProductRegister from './components/productregister/ProductRegister';

class App extends Component {
  render() {
    return (
      <div>
        <ProductRegister/>
      </div>
    );
  }
}

export default App;
