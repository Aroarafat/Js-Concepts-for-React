const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 3300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


// 1.MAPPING

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2.FOR-EACH 

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// 3.FILTER

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

//4.FIND

const special = products.find(product => product.name.includes('n'));
console.log(special);

// FIND WILL RETURN FIRST ARRAY OF THE PRODUCTS 