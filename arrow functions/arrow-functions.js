// Basics
function square(n) {
    return n * n;
}
//arrow function
const square = (n) => n * n;

function sayHello (name) {
    return "Hello, " + name;
}
// arrow function
const sayHello = (name) => "Hello, " + name;

function isEven(num) {
    return num % 2 === 0;
}
//arrow function
const isEven = (num) => num % 2 === 0;


//Parameters and return

//A function that takes 2 numbers and returns their sum.


// arrow function
const add = (a, b) => a + b;
console.log(add(10, 10));

//A function that takes no arguments and returns "Locked in!".


const arrgs = () => "Locked in";
console.log(arrgs());


//A function that takes a string and returns its length.


const stringLength = (str) => str.length;
console.log(stringLength("Welcome Abdiawal as a software Engineer 1"));