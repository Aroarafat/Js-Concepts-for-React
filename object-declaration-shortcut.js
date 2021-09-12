const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};

//SHORTCUT
const obj1 = { x, y }

const name = 'Solimullah';
const area = 'Dhaka';

const nobab = {
    name: name,
    area: area
}
const nobab2 = { name, area };
console.log(nobab2)

// or
const name = 'Hero';
const age = 34;
const person = { name, age };
console.log(person);

// or 
const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log(ratName)

// or
let person = null;
console.log(person ? person : "person is null");
