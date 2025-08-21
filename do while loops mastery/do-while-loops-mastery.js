// 1. Beginner Level → Understand the Skeleton
// the structure of do while 
do {
   // body (runs at least once)
} while (condition);



// Print numbers from 1 → 5 with a do...while.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

// Print numbers 10 → 1.

let i = 10; 

do {
    console.log(i);
    i--;
} while( i >= 1);

// Print even numbers between 0 → 20.

let i = 0;

do {
    if (i % 2 === 0) {
        console.log(i)
    }
    i++
} while(i <= 20);

// 2. Intermediate Level → Control Flow

// Loop 1–10 but stop at 7.

let i = 1;

do {
    console.log(i);
    if (i === 7) {
        break;
    }
    i++;
}while(i <= 10);

// Loop 1–20 but skip multiples of 3.

let i = 1;

do {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}while(i <= 20);

// Keep looping until a variable reaches 50, then break.

let num = 1;

do {
    console.log(num)

    if (num === 50) {
        break;
    }
    num++
}while(true);

// 3. Practical Use Cases (Why do...while Exists)
// demo one 
let pin;

do {
    pin = prompt("Enter your 4-digits pin");
}while (pin !== "1234");

console.log('Access granted');

// Keep asking a user for a number until they type a number > 10.


let num;

do {
    num = parseInt(prompt("Enter a number greater than 10:"));
}while(num <= 10);

console.log("You entered:", num);
// NB Use console of chrome or the browser of your choice to view this if you are using the vs code built in console 


// Keep looping until a random number generator hits 7.

let num;

do {
    num = Math.floor(Math.random() * 10) + 1; // random number between 1 - 10
    console.log("Generated:", num)
}while(num !== 7)

console.log("Stopped! Number 7 was hit.");    

// Ask for a password until "admin123" is entered.

let password;

do {
    password = prompt("Enter the password:") // keep asking
}while(password !== "admin123");

console.log('Access granted');

// 4. Advanced Level → Problem Solving

// Mix do...while with arrays and strings.

// Reverse a string using do...while.

let str = "Javascript";
let reversed = "";
let i = str.length - 1;

do{
    reversed = reversed + str[i]; // take char from the end
    i--;
}while (i >= 0);

console.log("original:", str);
console.log("Reversed:", reversed);



// Find the largest number in [5, 10, 2, 8, 3] with do...while.

let numbers = [5, 10, 2, 8, 3];
let i = 1;  // start from index 1 since we assume the first element is max
let largest = numbers[0];

do {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
  i++;
} while (i < numbers.length);

console.log("Largest number:", largest);




// Generate the first 10 Fibonacci numbers.

let n = 10; // how many numbers to generate
let count = 2; // since we already know first 2
let fib = [0, 1]; // first two Fibonacci numbers

do {
  let next = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(next);
  count++;
} while (count < n);

console.log("First 10 Fibonacci numbers:", fib);




// Factorial using do...while.

let num = 5; // number to find factorial of
let result = 1;
let i = num;

do {
  result *= i;
  i--;
} while (i > 0);

console.log(`Factorial of ${num} is:`, result);





// 5. Mastery Habits

// Compare: while vs do...while → know exactly when to choose one over the other.

// Practice edge cases (when condition is false at the start → do...while still runs once).

// Solve algorithms only using do...while.

// Write a short blog/article about “When to use do...while in JavaScript” → teaching cements mastery.







