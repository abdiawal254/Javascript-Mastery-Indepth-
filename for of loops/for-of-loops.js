// looping over an array
const numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num)
}

//looping over a string
const word = "hello";
for (let char of word) {
    console.log(char);
}

// with sets
const unique = new Set([1, 2, 3]);
for (let val of unique) {
    console.log(val);
}

// with maps
const map = new Map([
["name", "Abdiawal"],
["role", "developer"]
]);

for (let [key, value] of map) {
    console.log(key, value);
}

/////////////////////////////////////////////////////////////////////

// Drills to cement mastery

//Level 1 → Arrays
//Print each element in [5, 10, 15, 20].
const numbers = [5, 10, 15, 20];
for (let num of numbers) {
    console.log(num)
}
// done 

//Find the sum of [1, 2, 3, 4, 5].
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let  num of numbers) {
    sum = sum + num;
}
console.log("The sum is:", sum)


//Multiply all numbers in [2, 3, 4].
const numbers = [2, 3, 4];
let product = 1;

for (let num of numbers) {
    product = product * num;
}

console.log("The product is:", product);




//Print only even numbers in [1, 2, 3, 4, 5, 6].

const numbers = [1, 2, 3, 4, 5, 6];
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}




Level 2 → Strings
Print each character in "JavaScript".

const word = "Javascript";
for (let char of word) {
    console.log(char);
}


// Count vowels in "for of loop mastery".
const text = "for of loop mastery";
const vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Number of Vowels:", count);



// Reverse "hello world" using for...of.
const text = "hello world";
let reversed = "";

for (let char of text) {
    reversed = char + reversed; // put each char infront 
}
console.log(reversed);




//Count how many times "a" appears in "banana".
const word = "banana";
let count = 0;

for (let char of word) {
    if (char === "a") {
        count++
    }
}

console.log(count);





//Level 3 → Sets & Maps
//Loop through a Set of [1, 2, 3, 3, 4] and print values (notice uniqueness).
const numbers = new Set([1, 2, 3, 3, 4, 4, 4, 4, 4,]);
for (let num of numbers) {
    console.log(num);
}


//Loop through a Map of students:
const students = new Map([
    ["Ali", 85],
    ["Sara", 92],
    ["John", 78]
]);

for (let [name, score] of students) {
    console.log(`${name} scored ${score}`);
}


//Find the student with the highest score in the Map.

const students = new Map([
    ["Ali", 85],
    ["Sara", 90],
    ["Awaldeen", 99]
]);

let topStudent = "";
let highestScore = -Infinity;

for (let [name, score] of students) {
    if (score > highestScore) {
        highestScore = score;
        topStudent = name;
    }
}

console.log(`${topStudent} has the highest score: ${highestScore}`);





//Level 4 → Mini Challenges
Given [10, 20, 30, 40], calculate the average.
const numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

let average = sum / numbers.length;

console.log(`The average is: ${average}`);



// Given "racecar", check if it’s a palindrome using for...of.
let word = "racecar";
let reversed = "";

// build the reversed string
for (let char of word) {
    reversed = char + reversed;
}

if (word === reversed) {
    console.log(`${word} is a palindrome`);
}else {
    console.log(`${word} is not a palindrome`);
}



//Loop through [1, 2, 3, 4, 5, 6, 7] and separate even/odd numbers into two arrays.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = [];
let odds = [];

for (let num of numbers) {
    if (num % 2 === 0 ) {
        evens.push(num);
    }else {
        odds.push(num)
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);




//Loop through [1, 2, 3, 4, 5, 6, 7] and separate even/odd numbers into two arrays.
const nestedArrray = [[1, 2], [3, 4], [5]];
const flatArray = [];

for (const subArray of nestedArrray) {
    for (const num of subArray) {
        flatArray.push(num);
    }
}

console.log(flatArray);




