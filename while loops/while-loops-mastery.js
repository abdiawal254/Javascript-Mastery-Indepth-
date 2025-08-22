// 🚀 Step 2: Drills to Cement Mastery

// Level 1 → Basics
//👉 Focus: Counting and simple repetition.
// Print numbers 1 → 10.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}

//Print numbers 10 → 1.

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Print even numbers between 0 → 20.

let i = 0;

while (i <= 20) {
    console.log(i)
    i++;
}

// Print odd numbers between 1 → 19.

let i = 1;
while (i <= 19) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++
}


// Print multiples of 5 up to 50.

let i = 0;
while(i <= 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}


//Level 2 → Flow Control
//👉 Learn to stop or skip with break & continue.
//Print 1 → 10 but stop at 7.

let i = 1;
while(i <= 10) {
    if (i === 7) {
        break;
    }
    console.log(i);
    i++
}


//Print 1 → 10 but skip even numbers.
let i = 1;
while(i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}



//Keep looping until the total sum of numbers exceeds 50, then stop.

let i = 1;
let sum = 0;

while(true) {
    sum += i;
    console.log(`Added ${i}, Total = ${sum}`);

    if (sum > 50) {
        console.log("Stopped bacause sum exceeded 50");
        break;
    }
    i++;
}



//Loop 1 → 20 but only print numbers divisible by 3.

let i = 1;

while(i <= 20) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}



//Level 3 → Strings
//👉 Use loops to process text.
//Print each character of "JavaScript".

let str = 'Javascript';
let i = 0;

while(i < str.length) {
    console.log(str[i]);
    i++;
}



//Count vowels in "while loop mastery".

let str = "while loop mastery";
let i = 0;
let vowels = "aeiouAEIOU";
let count = 0;

while(i < str.length) {
    if (vowels.includes(str[i])) {
        count++;
    }
    i++;
}

console.log(`Total vowels: ${count}`);



//Reverse "hello world".

let str = "hello world";
let Reversed = "";
let i = str.length - 1;

while(i >= 0) {
    Reversed = Reversed + str[i];
    i--;
}

console.log(Reversed);



// Check if "madam" is a palindrome.

let str = "madam";
let i = 0;
let j = str.length - 1;
let isPalindrome = true;

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

if (isPalindrome) {
  console.log(`${str} is a palindrome`);
} else {
  console.log(`${str} is not a palindrome`);
}



//Level 4 → Arrays
//👉 Work with data collections.
//Print each element of [2, 4, 6, 8, 10].

let arr = [2, 4, 6, 8, 10];
let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}


//Calculate the sum of [1, 2, 3, 4, 5].
let arr = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;

while (i < arr.length) {
  sum += arr[i];
  i++;
}

console.log("Sum:", sum);


//Find the largest number in [10, 5, 20, 8, 15].
let arr = [10, 5, 20, 8, 15];
let i = 1; // start from index 1
let largest = arr[0]; // assume first element is largest

while (i < arr.length) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
  i++;
}

console.log("Largest number:", largest);




//Reverse [1, 2, 3, 4, 5] manually (no .reverse()).
let arr = [1, 2, 3, 4, 5];
let reversed = [];
let i = arr.length - 1; // start from the last index

while (i >= 0) {
  reversed.push(arr[i]);
  i--;
}

console.log(reversed);




//Level 5 → Mini Challenges

//👉 Apply while loops to classic problems.

//Generate Fibonacci sequence up to 20 terms.

//Find factorial of a number (e.g., 5! = 120).

//Print all prime numbers between 1–50.

//Create a simple “guess the number” game (loop until user guesses correctly).

//⚡ Mastery Tip: Whenever you’re about to use a for loop, ask yourself:

//“Can I rewrite this with a while?”
//Do it for practice — it’ll make you flexible with both.




