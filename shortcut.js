// ''(empty-string), 0, FALSE, NULL,UNDEFINED(ALL ARE FALSY)
// 'ANY NAME(ARAFAT)',5(ANY NUMBER), true, {}, [](ALL ARE TRUTHY)

// CHECK TRUTHY 

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}
console.log(myVar)

// FALSE BUT TRUE 
let myMoney = 50;
if (!myMoney) {

}
console.log(myMoney)

// YOU CAN CHECK NEGATIVE OR FALSY OR ANYTHING
const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}
console.log(food)

// YOU CAN WRITE IF ELSE CONDITION WITHIN ONE LINE USING TERNARY OPERATOR
// TERNARY OPERATOR
const money = 80;
let food1;
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1);

// OR YOU CAN WRITE MANY CONDITION
const money = 800;
let myVar = 5;
let drink = (money > 100 && myVar < 100) ? 'coke' : 'filter water';
console.log(drink);

//NUMBER TO STRING CONVERSION
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr)


//STRING TO NUMBER
const input = '560';
const inputNum = +input;
console.log(inputNum);


// FUNCTION TRUTHY FALSY 

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
// OUTPUT WILL BE DISPLAY USER

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
// OUTPUT WILL BE HIDE USER

// OR

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// use && if the left side is true then right side will be executed
isActive && showUser();
// NOTHING WIIL BE OUTPUT BEACAUSE isACTIVE is false and show user is display user 
// use || if the left side is false then right side will be executed
isActive || hideUser();


// toggle boolean

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive = !isActive;
// ANSWER IS TRUE BEACAUSE ISACTIVE FALSE AND CONDITION ALSO FALSE THATS WHY IT IS TRUE