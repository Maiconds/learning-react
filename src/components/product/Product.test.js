import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Testing Product rendering', () => {
  
  describe('All props', () => {
    const productName = 'Rice';
    const productPrice = 2.25;
    const productDescription = '500g';

    const wrapper = shallow(<Product name={productName} price={productPrice} description={productDescription} showPrice={true} />);

    it('Should render product name', () => {
      expect(wrapper.find('.product-name')).toHaveLength(1);
      expect(wrapper.find('.product-name').props().children).toBe(productName);
    });

    it('Should render product price', () => {
      expect(wrapper.find('.product-price')).toHaveLength(1);
      expect(wrapper.find('.product-price').props().children).toBe(productPrice);
    });

    it('Should render product description', () => {
      expect(wrapper.find('.product-description')).toHaveLength(1);
      expect(wrapper.find('.product-description').props().children).toBe(productDescription);
    });

    it('Should mactch the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('No description', () => {
    const productName = 'Rice';
    const productPrice = 2.25;

    const wrapper = shallow(<Product name={productName} price={productPrice} showPrice={true} />);

    it('Should render product name', () => {
      expect(wrapper.find('.product-name')).toHaveLength(1);
      expect(wrapper.find('.product-name').props().children).toBe(productName);
    });

    it('Should render product price', () => {
      expect(wrapper.find('.product-price')).toHaveLength(1);
      expect(wrapper.find('.product-price').props().children).toBe(productPrice);
    });

    it('Should not render product description', () => {
      expect(wrapper.find('.product-description')).toHaveLength(1);
      expect(wrapper.find('.product-description').props().children).toBeUndefined();
    });

    it('Should mactch the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('Hiding price', () => {
    const productName = 'Rice';
    const productPrice = 2.25;
    const productDescription = '500g';

    const wrapper = shallow(<Product name={productName} price={productPrice} description={productDescription} showPrice={false} />);

    it('Should render product name', () => {
      expect(wrapper.find('.product-name')).toHaveLength(1);
      expect(wrapper.find('.product-name').props().children).toBe(productName);
    });

    it('Should not render product price', () => {
      expect(wrapper.find('.product-price')).toHaveLength(0);
    });

    it('Should render product description', () => {
      expect(wrapper.find('.product-description')).toHaveLength(1);
      expect(wrapper.find('.product-description').props().children).toBe(productDescription);
    });

    it('Should mactch the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});