import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Product component test', () => {

    describe('Snapshot test', () => {
        const productName = 'Itubaina';
        const price = 5;
        const description = 'refrigerante';

        const component = shallow(<Product name={productName} price={price} description={description}/>);

        it('Should mactch the snapshot', () => {
            expect(component).toMatchSnapshot();
          }); 
    })

});
