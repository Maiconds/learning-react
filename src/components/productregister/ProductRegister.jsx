import { React, Component }  from 'react';
import { isNaN } from 'lodash';

class ProductRegister extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            price: 0,
            description: '',
            products: []
        }
    }

    changeName(name){
        this.setState({
            name: this.name
        });
    }

    changePrice(price){
        if(isNaN(price)){
            this.setState({
                price: 0
            });
        }
        else {
            this.setState({
                price: this.price
            });
        }
    }

    changeDescription(description){
        this.setState({
            description: description.push(this.description)
        });
    }

    changeProduct(products){
        this.setState({
            products: this.products
        });
    }

    change(e, field) {
        const {value} = e.target.value;      
        if(field === 'name' && value != ''){
            this.setState({
                [field]: value 
             });
        }

        if(field === 'price' && value != 0){
            this.setState({
               [field]: value 
            });
        }

        else {
            this.setState({
                description: value 
             });
        }
    }

    save(){
        const {name, price, description} = this.state;

        this.setState({
            products: [{name, price, description}]
        });

        this.state = {
            name: '',
            price: 0,
            description: ''
        }
    }

    render(){
        const {name, price, description} = this.state;
        return(
            <div>
               Nome: <input type="text" value={name} onChange={e => this.change(e, 'name')} />
               Price: <input type="text" value={price} onChange={e => this.change(e, 'price')}/>
               Description: <input type="text" value={description} onChange={e => this.change(e, 'description')}/>
               <button onClick={this.save}>Salvar</button>
            </div>
        );
    }
}

export default ProductRegister;
