// basic for loop challenges 
// level 1
// 👉 Goal: Train your brain to see how initialization → condition → update flow.


// Print numbers 1 → 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print numbers 10 → 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Print even numbers from 0 → 20.

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Print odd numbers from 1 → 19.

for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Print multiples of 5 from 5 → 50.

for (let i = 5; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// LEVEL 2 CONTROL FLOW

// 👉 Goal: Learn how break & continue change loop behavior.

// Loop 1 → 10 but stop at 7.

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// you have to put the console in the for loop block not on the if block

// Loop 1 → 10 but skip even numbers.

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Loop 1 → 20 but only print numbers divisible by 3.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Loop 1 → 100, stop when the total sum goes above 50.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(`i: ${i}, sum: ${sum}`)

    if (sum > 50) {
        console.log(`Stopped at i = ${i}, total sum = ${sum}`)
        break;
    }
}

// Level 3 → Working with Strings

// 👉 Goal: Use loops to process characters.

// printing each character in a word
let word = 'Javascript';
let sentence = word.split(" ");

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// Count how many vowels are in "loop mastery".

let str = 'loop mastery';
let vowels = 'aeiou';
let count = 0;

for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i].toLowerCase())) {
        count++;
    }
}

console.log(`Number of vowels: ${count}`);

// Reverse "hello world".

let string = "hello world";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
}

console.log(`Reversed string: ${reversed}`);

// Check if "madam" is a palindrome (reads same forward/backward).

let stringP = "madam";
let isPalindrome = true;

for (let i = 0; i < stringP.length / 2; i++) {
    if (stringP[i] !== stringP[stringP.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`${stringP} is Palindrome.`)
} else{
    console.log(`${stringP} is NOT Palindrome.`)
}

// Level 4 → Nested Loops

// 👉 Goal: Train logical thinking with multiple dimensions.

// Print a multiplication table (1–5).

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row = row + (i * j) + "\t"
    }
    console.log(row);
}

// Print coordinates (i, j) for i=1–3, j=1–3.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i}  ${j}`);
    }
};

// Printing a pattern *

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "*"
    }
    console.log(row);
}

// printing the 12345678 pattern

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 0; j <= i; j++){
        row = row + j;
    }
    console.log(row);
};

// Level 5 → Arrays with Loops

// 👉 Goal: Connect loops to real data.

// Loop through [2, 4, 6, 8, 10] and print each.

let numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Calculate the sum of [1, 2, 3, 4, 5].

let adding = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < adding.length; i++) {
    sum2 = sum2 + adding[i];
}

console.log(`Sum = ${sum2}`);

//   Find the largest number in [10, 5, 20, 8, 15].

let numbers2 = [10, 5, 20, 8, 15];
let max = numbers2[0]; // assume the fisrt is the largest

for (let i = 1; i < numbers2.length; i ++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}

console.log(`Largest number = ${max}`);

// Reverse the array [1, 2, 3, 4, 5] manually (no .reverse()).

let array = [1, 2, 3, 4 ,5];
let reversed2 = [];

for (let i =  array.length - 1; i >= 0; i--) {
    reversed2.push(array[i]);
}

console.log(`Reversed array = ${reversed2}`);

// Level 6 → Mini Challenges (Mastery)

// 👉 Goal: Use loops to solve real algorithm-like tasks.

// FizzBuzz → Print 1–50. For multiples of 3 print "Fizz", for 5 "Buzz", for both "FizzBuzz".

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`);
    }else {
        console.log(i);
    }
}

// Print all prime numbers between 1–50.

for (let i = 2; i <= 50; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime  = false;
            break;
    }
    }
    if (isPrime) {
    console.log(i);
}
}

// Find factorial of a number (e.g., 5! = 120).

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact = fact * i;
}

console.log(n + "! =", fact);

// Generate Fibonacci sequence up to 20 terms.

let m = 20;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= m; i++){
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

