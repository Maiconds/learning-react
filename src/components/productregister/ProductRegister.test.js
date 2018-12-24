import React from 'react';
import { shallow } from 'enzyme';
import Product from './ProductRegister';
import ProductRegister from './ProductRegister';

describe('ProductRegister component test', () => {
    
    describe('Snapshot test', () => {
        
        const component = shallow(<ProductRegister/>);

        it('Should mactch the snapshot', () => {
            expect(component).toMatchSnapshot();
          }); 
    })
});