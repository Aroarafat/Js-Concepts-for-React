//1. How to declare a variable using let and const
const myFathersName = 'Amir Uddin';
let age = 50;
age = 51;

// 2. Six basic conditions we have to know
// conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

// USING OR OPERATOR ||

if (myFathersName === 'Amir Uddin' || age === 58) {
    console.log('my fathers name and age is right')
}
else if (myFathersName === 'amir uddin' || age === 56) {
    console.log('my fathers name and age is wrong')
}
else (
    console.log('Banan thik kor hala naileto wrong e dekhabe')
)

// USING AND OPERATOR &&

if (myFathersName === 'Amir Uddin' && age === 50) {
    console.log('my fathers name and age is right')
}
else if (myFathersName === 'amir uddin' && age === 56) {
    console.log('my fathers name and age is wrong')
}
else (
    console.log('Banan thik kor hala naileto wrong e dekhabe')
)

// 3. array declare
// index, 
// length,
// push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;
// 56 will go in the first index 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length
// return will be 4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.indexOf("Apple")
// return will be 2

// 4. for loop 
const numbers = [89, 35, 98, 12];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output)


// 6. Object
// Three ways to access property by name 

const student = {
    name: 'Fazlur Rahman Babu Sir',
    age: 32,
    movies: ['Daruchini Dip', 'Monpura']
}

//  OUTPUT SHOWN BY THIS WAY 
const student1 = student.name;
console.log(student1)

const student2 = student.age;
console.log(student2)

const student3 = student.movies;
console.log(student3)

// OR YOU CAN SHOW OUTPUT BY THIS WAY 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
const myVariable = 'age';
console.log(student[myVariable]); // access via property name in a variable
