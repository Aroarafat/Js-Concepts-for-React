// 1. JSON => STRINGIFY,PARSE

const student = {
    name: 'Arafat Hossain',
    age: 24,
    movies: ['Three-idiots', 'Pk']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2.FETCH
const url = `https://www.themealdb.com/api.php`;
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


//2.KEYS,VALUES

const student = {
    name: 'Arafat Hossain',
    age: 24,
    movies: ['Three-idiots', 'Pk']
}

const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student);
console.log(values)


//3.FOR 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
// numbers.map(num => num * 2);

//we will use for of on array like object
//we will use loop on an object using for in 


// ADD OR REMOVE FROM AN ARRAY 

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
console.log(newProduct);

// create a new array without one specific item 
// remove phone means create a new array without the phone
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
