//Assignment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//products.forEach((product) => console.log(product.name, product.price));
//Part 1a

//products.forEach((product) => console.log(product.name, product.price * 1.1));
//Part 1b

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);
//Part 1c

const accessories = products.filter(
  (product) => product.category === "Accessories"
);
console.log("Accessories:", accessories);
// Part 2a

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);
// Part 2b

const highratedproducts = products.filter((product) => product.rating >= 4.5);
console.log("Highly Rated Products:", highratedproducts);
// Part 2c

highratedproducts
  .filter((highratedproducts) => highratedproducts.rating < 4.5)
  .forEach((highratedproducts) => console.log(highratedproducts.name));
