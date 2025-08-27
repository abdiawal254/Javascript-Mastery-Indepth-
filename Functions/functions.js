// Function Declarations
// Basic use cases of function declaration
//(a) Grouping Code into Reusable Blocks
function greetUser (name) {
    console.log(`Hello ${name}!`);
}

greetUser("Ali");
greetUser("Amina");
// instead fof repeating console.log("hello ..."). we use a function

//(b) Returning Values
function add (a, b) {
    return a + b;
}

let result = add(5, 10);
console.log(result);


//(c) Default Parameters
//If a parameter isn’t passed, you can give it a default:
function greet (name = "Guest"){
    console.log(`Welcome ${name}`)
}

greet("Fatima");
greet();

//3. Intermediate Use Cases
//(a) Functions Calling Other Functions
function multiply(a, b) {
    return a * b;
}

function square(num) {
    return multiply(num , num);
}

console.log(square(5));
//(b) Returning Booleans (Decision-Making)
function isEven (num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// advanced use cases
//(c) Functions as Callbacks
function processUserInput (Callback) {
    let name = "Ahmed";
    Callback(name);
}
function greetName (name) {
    console.log(`Hello ${name}`)
}

processUserInput(greetName);

///////////////////////////////////////////////////////////////////////////////////
// DRILLS
//Write a function that:
// Takes two numbers and returns their sum.
function add (a, b) {
    return a + b
}
console.log(add(50, 50));

//Takes a string and logs its length.
function logStringLength (str) {
    console.log("Length of the string is:", str.length)
}

logStringLength("Abdiawal Aden Siad");

//Greets a user with their name, defaulting to "Guest" if no name is provided.
function greeUserOne (name = "Guest") {
    console.log(`Hello ${name}!`);
}

greeUserOne("Abdiawal")
greeUserOne("Hussein");

//isOdd(num) → returns true if odd.
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(9));
console.log(isOdd(12));


//max(a, b, c) → returns the largest number.
function max (a, b , c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    }else {
        return c;
    }
}

console.log(max(6, 8, 10));
console.log(max(9, 30, 1));

//// 3. Function to reverse a string

function reverseString (str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverseString("Hello"));
console.log(reverseString("Javascript"));

