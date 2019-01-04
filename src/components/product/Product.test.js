import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Product component test', () => {

    const productName = 'Itubaina';
    const price = 5;
    const description = 'refrigerante';

    const component = shallow(<Product name={productName} price={price} description={description} showPrice={true}/>);

    describe('Snapshot test', () => {

        it('Should mactch the snapshot', () => {
            expect(component).toMatchSnapshot();
          }); 
    })

    describe('Rendering tests with all props', () => {
        
        it('Should render the name', () => {
            expect(component.find('.product-name').children()).toHaveLength(1);
            expect(component.find('.product-name').props().children).toBe(productName);
        });

        it('Should render the price', () => {
            expect(component.find('.product-price').children()).toHaveLength(2);
            //expect(component.find('.product-price').props().children).toBe(price);
        });

        it('Should render the description', () => {
            expect(component.find('.product-description').children()).toHaveLength(1);
            expect(component.find('.product-description').props().children).toBe(description);
        });
    });

    describe('Rendering tests only required props', () => {

        const productName = 'Itubaina';
        const price = 5;

        const componentRequiredProps = shallow(<Product name={productName} price={price} showPrice={true}/>);
        
        it('Should render the name', () => {
            expect(componentRequiredProps.find('.product-name').children()).toHaveLength(1);
            expect(componentRequiredProps.find('.product-name').props().children).toBe(productName);
        });

        it('Should render the price', () => {
            expect(componentRequiredProps.find('.product-price').children()).toHaveLength(2);
            //expect(component.find('.product-price').props().children).toBe(price);
        });
    });

    describe('Render without price', () => {

        const productName = 'Itubaina';
        const description = 'Refrigerante';

        const componentShowPriceFalse = shallow(<Product name={productName} price={price} description={description} 
            showPrice={false}/>);

        it('Should render the product name', () => {
            expect(componentShowPriceFalse.find('.product-name').props().children).toBe(productName);
        });

        it('Should render the product description', () => {
            expect(componentShowPriceFalse.find('.product-description').props().children).toBe(description);
        });

        it('Should not render the price', () => {
            expect(componentShowPriceFalse.find('.product-price').children()).toHaveLength(0);
        });
    });
});
