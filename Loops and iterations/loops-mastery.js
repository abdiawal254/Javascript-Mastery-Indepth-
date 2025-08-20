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

