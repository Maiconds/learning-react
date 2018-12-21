import  React, { Component }  from 'react';
import Product from '../product/Product';
import { getAllProducts } from '../../services/productServices';

class ProductRegister extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            price: 0,
            description: '',
            products: []
        }
        
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);

    }

    componentDidMount(){
        getAllProducts().then( 
            json => this.setState({
                products: json
            })
        ).catch(window.console.log("Erro ao carregar dados"))
    }

    change(e, field) {
        e.preventDefault();
        const value = e.target.value;
        const isPrice = field === 'price';
        if(!(isNaN(value) && isPrice)){
            this.setState({
                [field]: field==='price'? value==='' ? 0 : parseFloat(value) : value         
            })
        }      
    }

    save(){
        const {name, price, description} = this.state;

        if(name !== '' && price!==0){
            this.setState(state => ({
                name: '',
                price: 0,
                description: '',
                products: [...state.products, { name, price, description }]
              }));
        }
    }

    render(){
        const {name, price, description, products} = this.state;
        return(
            <div>
               Nome: <input type="text" name="name" value={name} onChange={e => this.change(e, 'name')} />
               Price: <input type="text" value={price} name="price" onChange={e => this.change(e, 'price')}/>
               Description: <input type="text" value={description} name="description" onChange={e => this.change(e, 'description')}/><br/><br/>
               <button onClick={this.save}>Salvar</button>
               <h1>Products List:</h1>
               {products.map(product => <Product name={product.name} price={product.price} description={product.description}/>)}
            </div>
        );
    }
}

export default ProductRegister;
