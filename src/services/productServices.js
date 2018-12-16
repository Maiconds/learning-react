export const getAllProducts = () =>
fetch('http://localhost:3001/products')
  .then(response => response.json());
