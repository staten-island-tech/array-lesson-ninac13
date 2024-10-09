const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
  ];

  //logs the product name and price
const productDetails = products
  .forEach((product)=>console.log(product.name, product.price));

console.log(productDetails);

products.forEach((product) => {
  product.price *= 1.1; // changed the price
});

console.log(products); // logged products

//console.logs the categories in the array (without repetition)
const categories = [];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('Unique Categories:', categories);

//filter electronics
const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);

//filter products over $300
const expensiveProducts = products.filter(product => product.price > 300);
console.log('Expensive Products:', expensiveProducts);

//filters products with a rating>=4.5

const highlyRatedProducts = products
    .filter((product)=>product.rating>=4.5)
    .forEach((product)=>console.log("Highly rated product:", product.name));

    
//filters electronics that are cheaper than $1000

const affordableElectronics = products
    .filter((product)=>product.category==='Electronics'&& product.price<1000);

affordableElectronics.forEach((product) => {
  console.log("Affordable Electronic Product:", product.name, product.price, product.rating);
});