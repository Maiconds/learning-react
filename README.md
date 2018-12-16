# learning-react
Project to learn basic React JS concepts.

To start the application, on `src` directory:
- run `npm start` to start the application;
- In another terminal, run `npx json-server db.json --watch --port 3001` to start the mock server

## Basics

Before start, take a look at React docs to understand all the main concepts https://reactjs.org/docs/hello-world.html

## Steps

### 1) Props and Typechecking
- Create a new file in `src/components/product` directory named `Product.jsx`;
- In `Product.jsx` create and export a new functional component (stateless component) named `Product` that receives 3 props (tip: install, save and use `prop-types` library for typechecking):
  - name: String and required;
  - price: Number and required;
  - description: String not required.
- `Product` component must return a div containing the name, price and description in differents paragraphs;
- In `App.jsx`, import and render `Product` component (you can remove all current code on render function before adding the new component and make `<App />` a stateless component).
- Check if the information you passed as props are rendering correctly.

### 2) State and Events
- Create a new file in `src/components/productregister` directory named `ProductRegister.jsx`;
- In `ProductRegister.jsx` create and export a new react component (stateful component) named `ProductRegister`;
- This component should has the following state:
  - name: String and default '';
  - price: Number and default 0;
  - description: String and default '';
  - products: Array and default empty [].
- In render method this component must return a div containing:
  - One `<input />` for product name: Type text, value = `this.state.name`;
  - One `<input />` for product price: Type text, value = `this.state.price`;
  - One `<input />` for product description: Type text, value = `this.state.description`;
  - One `<button />` to add a new product;
- Implement the `onChange` methods for all inputs, each input must change its corresponding state;
  - Price `onChange` method must check if the value is a number, if it's not the value 0 must be used.
- Implement the button `onClick` method:
  - This method should check if name imput is not empty and price inputs is not 0, if so the method must add the following javascript object in `products` state:
    - name = this.state.name;
    - price = this.state.price;
    - description = this.state.description.
  - After adding, the method must clean the name, price and description state.
- Import `ProductRegister` component to `<App />` component and check if it works (you should be able to edit all fields and when the button is clicked all fields must be cleared);

### 3) Rendering Lists
- In `<ProductRegister />`, on render method, for each object in `this.state.products`, render a `<Product />` component;
- Check if there is any error messages in console.

### 4) Component Lifecycle and Promise
- Read about React Component Lifecycle and Promise;
- In `ProductRegister` component, after it's loaded call `getAllProducts` method that is exported in `src/services/productServices.js` file;
- Set the response in `productsState`;

### 5) Conditional Rendering
- Add a Checkbox named 'Show prices' in `ProductRegister.jsx`, when it's checked all the `<Product />` components must hide the price information (price should not be rendered);
- Tip: You will need to change `<Product />` and `<ProductRegister />` components.

### 6) Unit Tests
- Read about Jest and Enzyme;
- Testing `<Product />`:
  - Create a new file in `src/components/product` directory named `Product.test.js`;
  - Create:
    - Units tests to check the component rendering;
    - Snapshot tests;
- Testing `<ProductRegister />`:
  - Create a new file in `src/components/productregister` directory named `ProductRegister.test.js`;
  - Create:
    - Rendering tests;
    - Snapshot tests;
    - Check mocking `getAllProducts` call (empty, many products, error);
    - Check 'Show prices' checkbox behavior.