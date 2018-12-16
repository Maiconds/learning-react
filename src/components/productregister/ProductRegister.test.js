import React from 'react';
import { shallow } from 'enzyme';
import ProductRegister from './ProductRegister';
import { getAllProducts } from '../../services/productServices';

jest.mock('../../services/productServices');

describe('Testing ProductRegister', () => {

  describe('Testing fetches data with error ', () => {
    getAllProducts.mockImplementation(() => Promise.reject());
    shallow(<ProductRegister />);

    it('Fetches data on componentDidMount', () => {
      expect(getAllProducts).toHaveBeenCalled();
    });

  });

  describe('Testing fetches data with sucess ', () => {

    const productsResponse = [
      {
        "name": "Pão italiano",
        "price": 12.90,
        "description": "Embalagem de 500g"
      },
      {
        "name": "Pão de brioche",
        "price": 15.32,
        "description": "Embalagem de 200g"
      }
    ];

    getAllProducts.mockImplementation(() => Promise.resolve(productsResponse));

    it('Fetches data on componentDidMount and renders 2 <Product />', async () => {
      const wrapper = await shallow(<ProductRegister />);
      expect(getAllProducts).toHaveBeenCalled();

      const products = wrapper.find('Product');
      expect(products).toHaveLength(2);

      expect(products.get(0).props.name).toBe(productsResponse[0].name);
      expect(products.get(0).props.price).toBe(productsResponse[0].price);
      expect(products.get(0).props.description).toBe(productsResponse[0].description);
      expect(products.get(0).props.showPrice).toBe(true);

      expect(products.get(1).props.name).toBe(productsResponse[1].name);
      expect(products.get(1).props.price).toBe(productsResponse[1].price);
      expect(products.get(1).props.description).toBe(productsResponse[1].description);
      expect(products.get(1).props.showPrice).toBe(true);

    });

  });

  describe('Testing onChange functions', () => {

    const wrapper = shallow(<ProductRegister />);

    const newName = 'the-name-value'; 
    const nameEvent = {
      preventDefault() {},
      target: { value: newName }
    };
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', nameEvent);

    it('should change the state', () => {
      expect(wrapper.state().name).toBe(newName);
    });

    const newPrice = 2.25; 
    const priceEvent = {
      preventDefault() {},
      target: { value: newPrice }
    };
    const priceInput = wrapper.find('[name="price"]');
    priceInput.simulate('change', priceEvent);

    it('should change the state', () => {
      expect(wrapper.state().price).toBe(newPrice);
    });

    const newPriceString = 'new-price'; 
    const priceEventString = {
      preventDefault() {},
      target: { value: newPriceString }
    };
    priceInput.simulate('change', priceEventString);

    it('should change the state', () => {
      expect(wrapper.state().price).toBe(newPrice);
    });

    const newDescription = 'new-descr'; 
    const descriptionEvent = {
      preventDefault() {},
      target: { value: newDescription }
    };
    const descriptionInput = wrapper.find('[name="description"]');
    descriptionInput.simulate('change', descriptionEvent);

    it('should change the state', () => {
      expect(wrapper.state().description).toBe(newDescription);
    });

  });

  describe('Testing Adicionar button', async () => {

    const wrapper = await shallow(<ProductRegister />);

    const name = 'Arroz Tio João';
    const price = 10.12;
    const description = '500g';
    const products = [];

    wrapper.setState({ name, price, description, products });

    const button = wrapper.find('button');

    button.simulate('click');

    it('Should add a new product in state');
    const newProducts = wrapper.state().products;
    expect(newProducts).toHaveLength(1);
    expect(newProducts.get(0).name).toBe(name);
    expect(newProducts.get(0).price).toBe(price);
    expect(newProducts.get(0).description).toBe(description);

    const productsComponent = wrapper.find('Product');
    expect(productsComponent).toHaveLength(1);

    expect(productsComponent.get(0).props.name).toBe(name);
    expect(productsComponent.get(0).props.price).toBe(price);
    expect(productsComponent.get(0).props.description).toBe(description);
    expect(productsComponent.get(0).props.showPrice).toBe(true);

  });

  describe('Testing Show Prices checkbox', async () => {
    const wrapper = await shallow(<ProductRegister />);

    expect(wrapper.state().products).toHaveLength(2);
    
    const productsComponent = wrapper.find('Product');
    expect(productsComponent).toHaveLength(2);
    expect(productsComponent.get(0).props.showPrice).toBe(true);
    expect(productsComponent.get(1).props.showPrice).toBe(true);

    const checkbox = wrapper.find('[name="showPrices"]');
    await checkbox.simulate('change');

    expect(productsComponent.get(0).props.showPrice).toEqual(false);
    expect(productsComponent.get(1).props.showPrice).toEqual(false);


  });

});