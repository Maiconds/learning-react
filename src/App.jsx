import React, { Component } from 'react';
import Product from './components/product/Product';
import ProductRegister from './components/product/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Product name={"KITKAT"} price={2} description={"chocolate"} />
        <ProductRegister/>
      </div>
    );
  }
}

export default App;
