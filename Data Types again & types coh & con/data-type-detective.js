// Core Sections & Steps

// 1. Data Type Identification Lab

// primitive types

const name = 'Abdiawal'; // strings
console.log(typeof(name));

const age = 21; // number
console.log(typeof(age));

const x = 21;
const y = 50;
const greater = x > y;
console.log(greater);  // boolean 
console.log(typeof(greater));

const coding = null;
console.log(coding); // null
console.log(typeof(coding));

const indiscplined = 'undefined';
console.log(indiscplined); // undefined
console.log(typeof(indiscplined));

const mySymbol = Symbol();
console.log(mySymbol); // symbol
console.log(typeof(mySymbol));

const bigInt = 12345678990n;
console.log(bigInt); // bigInteger

// Non-Primitive types

const obj = {
    name: 'Awaldeen',
    age: 21,
    coding: true,
    eastenBreakFast: true,
}

console.log(obj);  // object


// 2. Explicit Type Conversion Zone

// Strings being converted to numbers

let str1 = "1223";
console.log(typeof(str1));
let str2 = Number(str1);
console.log(typeof(str2));

// converting numbers to strings

let num = 3455;
console.log(typeof(num));
let num2 = String(num);
console.log(typeof(num2));

// converting values to booleans 

const value1 = 'Hello';
console.log(typeof(value1));
const value2 = Boolean(value1);
console.log(typeof(value2));


// converting numbers to BigInt

const myNumber = 123456778;
console.log(typeof(myNumber));
const myNumber2 = BigInt(myNumber);
console.log(typeof(myNumber2));

// converting objects to strings 

const objConversion = {
    name: 'Zakaria',
    age: 18,
    schooling: true,
    mother: 'Deiman',
}
console.log(typeof(objConversion));

const jsonString = JSON.stringify(objConversion);
console.log(typeof(jsonString));



// 3. Implicit Type Coercion Arena

// Adding numbers to strings results in an end result of String

const numebr = 21;
const string = '47';
const result = numebr + string;
console.log(typeof(result));

// Adding Booleans to number

let myNumberB = 12;
let myBooleanTrue = true;
let myBooleanFalse = false;

let results = myNumberB + myBooleanTrue;
console.log(results);
console.log(typeof(results))

let results2 = myNumberB + myBooleanFalse;
console.log(results2);
console.log(typeof(results2));
// what i deduce from here is that when a number is added to a true boolean, the result is that the previous number gets added 1, in other words true in boolean is equal to 1;
// Another case scenario is that when a number gets added to a false boolean , the number gets added a zero , in other words false is the same as false 

// Adding null to Arithmetics

console.log(null + 5);
// output is 5 because null gets treated as zero

console.log(10 + null);
// similarly here the output is 10 because null is being treated as zero

// Adding undefined to Null

console.log(undefined + 20);
// output is NaN, undefined is coerced to NaN and NaN + 20 = NaN;


// 4. Comparison Madness

// Purpose: Show coercion during equality checks.

// Running Comparisons using the loose equality checks 

// loose equality checks ==
// number & string
console.log(5 == "5"); // true, because string 5 is coerced to number
// number and boolean
console.log(0 == false); // true, (false is coerced to number 0)
console.log(1 == true); // true , (true is coerced to number 1)

// Strict Equality ===

console.log(5 === "5"); // false 
console.log(0 === false); // false, because they are different types 


// 5. Type Conversion Challenges

console.log("5" - 3); // 2
console.log(true + 1); // 2

