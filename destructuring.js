// 1.ARRAY DESTRUCTURING
// THREE WAYS TO SOLVE DESTRUCTURING 

const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];
console.log(x, y)

// OR 
const numbers = [42, 65];
const [x, y] = [42, 65]
console.log(x, y)

// OR 
const numbers = [42, 65];
const [x, y] = numbers;
console.log(x, y)

// FUNCTIONAL WAY DESTRUCTURING (TWO WAY)

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(90, 67))

// OR 
const student = {
    name: 'Arafat Hossain',
    age: 24,
    movies: ['Three-idiots', 'Pk']
}

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie)


// 2.OBJECT DESTRUCTURING

const { name, age } = { name: 'lebu', age: 24 };
const { name, age } = { id: 12, name: 'ayon', salary: 10000, age: 25 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 5000000,
            brand: 'hublot'
        }
    }
}
const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;



