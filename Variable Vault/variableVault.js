// Structure iverview 
// i will be building this mini scenarios like levels in a game each one focused on a specific variable concept

// EACH LEVEL

// 1. Create a variable 
// 2. Mutate and access them
// 3. Log result
// 4. Predict the result before running it 
// 5. Then comapare the prediction vs the reality



// LEVEL 1: Declaring with Var, Let , and Const

// Challenge: Declare 3 variables using var, let, and const. Log them, reassign them, and try redeclaring.

var user = 'Awal';
var user = 'Husen';
user = 'baba'
console.log(user);

// var can be re-declared easily just like that
// also variables declared with var can be re-assigned

let coding = 'js';
// let coding = 'py';
coding = 'java';

console.log(coding);

// Variables declared with let cannot be re declared at all 
// but they can be re-assigned 

const now = 'coding';
// now = 'sleeping';

console.log(now);


// variables declared with const cannot be re-declared and re-assigned 


// ✅ Level 2: Variable Reassignment Test

// note that this variables can be re-assigned 
// 1. VAR
var later = 'sleeping';
later = 'praying';

console.log(later);

// 2. LET
let yesterday = 'notion';
yesterday = 'variables';

console.log(yesterday);
// note that this variable cannot be re assigned 
// CONST
const Awal = 'coding';
// Awal = 'sleeping';

console.log(Awal);


// ✅ Level 3: Scope Challenge: Function vs Block vs Global

const mama = 'deiman';
let dad = 'adan';
var sister = 'siham';

function scopeBattle(){
    var mimi = 'awale';
    let yeye = 'walking';
    const us = 'coding';

    if (scopeBattle === true) {
        console.log('Good work');
        // console.log(mimi);
    } else{
        console.log('try it again');
    }

    console.log(mimi);
    console.log(yeye);
    console.log(us);

    console.log(mama);
    console.log(dad);
    console.log(sister);
}

scopeBattle();

// console.log(mimi);
// console.log(yeye);
// console.log(us);

// what i have learnt here is that , when variables are declared outside and are called inside a function they work but when they are being declared inside a function and are being called from outside they dont work , they bring an error



// ✅ Level 4: Shadowing Game

// Challenge: Create a global variable called weapon, then create a function that declares a new weapon inside it.

var weapon = 'Ak 47';

function funWeapon () {
    var weapon = 'gun';
    console.log(weapon);
}

console.log(weapon);
funWeapon();


// ✅ Level 5: The Hoisting Lab

// Challenge: Write code where you log a variable before declaring it.

console.log(huyu)

var huyu = 'enda';

// for with var it brings undefined, it does not bring an error; this is because var is hoisted to the top

// console.log(ndugu);

let ndugu = 'abdikhalid';

// for with let, it brings an error because let is not hoisted whilst var is hoisted

// console.log(dadangu);

const dadangu = 'siyaam';

// for with const as well it brings and error because let and const are not hoisted like var


// ✅ Level 6: Temporal Dead Zone Trap

// Challenge: Declare a let inside a block but try logging it before declaration.


function temperalDeadZone () {
    // console.log(shimoLaTewa);
    let shimoLaTewa = 'my primary school';
    console.log(shimoLaTewa);
}

// console.log(shimoLaTewa);
temperalDeadZone();

// when i log a variables declared with let before declaring it brings an error also when i log from outside the block , it also brings an error , this is because let is block scoped likewise when i log it after declaring it, it does not bring an error at all .

// ✅ Level 7: Mutation vs Reassignment with const

// Challenge: Declare const name = "Ali" and try reassigning → ❌
// Then declare const hero = { power: "speed" } and mutate the property → ✅

// Log the object and explain why it worked.

const name = 'Ali';
// const name = 'abdi';
// when i try to re-assign it , it does not work at all, this is because variables declared with const cannot be re-declared

const hero = { power: "speed", strenght: "talking"};

console.log(hero);
console.log(hero.power);
console.log(hero.strenght);

// this works because const can be binded with objects

// ✅ Level 8: Variable Lifespan & Death Simulation

let age = 21;

if (age >= 20 ) {
    console.log('You can start a company');
} else if (age <= 18) {
    console.log('You can nearly start a company but with no big authority');
} else {
    console.log('You are not meant to start any sort of business or comapny');
}

for (let i = 0; i < 3; i++) {
    let insideLet = `i am created using let ${i}`;
    var insideVar = `i am created using var ${i}`;

    console.log(`the loop created with let: ${insideLet}`);
    console.log(`the loop created with var: ${insideVar}`);
}

console.log("\n--- Outside loop ---");

try {
    console.log("Outside let", insideLet);
} catch (err) {
    console.log("Outside let:, ❌ DEAD — ReferenceError")
}

console.log("Outside var:", insideVar);

// What’s happening:
//let (block scope):
//Lives only in its curly-brace block. Once the loop iteration finishes, that version of the variable is gone. Outside the loop, it’s completely inaccessible.

//var (function scope):
//Declared inside the loop but lives through the entire function (or global scope if not inside a function). So after the loop, it’s still accessible.

//Variables declared outside the loop will survive unless overwritten or explicitly deleted.

