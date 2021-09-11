// 1.TEMPLATE STRING

const numbers = [89, 35, 98, 12];
const actor = {
    name: 'Fazlur Rahman Babu Sir',
    age: 45,
    movies: ['Daruchini Dip', 'Monpura']
}
const about = `Actor Name is ${actor.name} age  ${actor.age} has number ${numbers[2]} movies ${actor.movies[0]}`;
console.log(about)

// 2. ANONYMOUS ARROW FUNTION

const getFiftyFive = () => 55;
const output = getFiftyFive()
console.log(output)
// IT WILL RETURN 55

const addSixtyFive = num => num + 65;
const output = addSixtyFive(34)
console.log(output)
// IT WILL RETURN 99

const isEven = x => x % 2 == 0;
const output = isEven(45)
console.log(output)
// IT WILL RETURN FALSE BECAUSE 45 IS NOT AN EVEN NUMBER

const isEven = x => x % 2 == 0;
const output = isEven(46)
console.log(output)
// IT WILL RETURN TRUE BECAUSE 46 IS AN EVEN NUMBER


const addThree = (x, y, z) => x + y + z;
const output = addThree(4, 5, 6)
console.log(output)
// IT WILL RETURN 15

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const output = doMath(78, 32)
console.log(output)
// IT WILL RETURN 110

// 3.SPREAD OPERATOR

const numbers = [89, 35, 98, 12];
console.log(numbers)

const newNumbers = [...numbers]
newNumbers.push(133, 122, 1222)
console.log(newNumbers)

// CREATE A NEW ARRAY FROM AN OLDER ARRAY AND ADD AN ELEMENT 

const currentNumbers = [...numbers, 88];
console.log(currentNumbers)