/// the logic begins here 

// Variables setup (Primitive Types)

// User 1

let username1 = "Abdiawal";
let userAge1 = 21;
let isStudent = true;
let monthlyIncome = 50000;
let spendingLimit = 30000;
let isMarried = false;
let hasPet = false;
let favouriteQuote = "every day counts";

// user summary display

let userSummary = `My name is ${username1}, i am ${userAge1}, i am a student: ${isStudent}, my monthly income is ${monthlyIncome}, my spending limit is ${spendingLimit}, in marriage ${isMarried}, has got a pet ${hasPet}, and my favourite quote is one from myself ${favouriteQuote}`;

console.log(userSummary);

if (monthlyIncome > spendingLimit) {
    console.log("You are a great boy, keep going and aiming more");
} else {
    console.log("you need to improve on this issue of saving");
}

const savingsPerMonth = (monthlyIncome - spendingLimit);

console.log(`my savings per month: ${savingsPerMonth}`);


// user 2

let username2 = "Yahya";
let userAge2 = 22;
let isStudent2 = false;
let monthlyIncome2 = 35000;
let spendingLimit2 = 40000;
let isMarried2 = true;
let hasPet2 = true;
let favouriteQuote2 = "keep pushing";

let userSummary2 = (`My name is ${username2}, i am ${userAge2} years old, i am a student: ${isStudent2}, my monthly income is ${monthlyIncome2}, my spending limit is ${spendingLimit2}, my marital status is ${isMarried2}, having pet: ${hasPet2}, and lastly my favourite quote is ${favouriteQuote2}`);

console.log(userSummary2);

let savingsPerMonth2 = (monthlyIncome2 - spendingLimit2);

console.log(`Yahyas savings per month: ${savingsPerMonth2}`);


if (monthlyIncome > monthlyIncome2 ) {
    console.log("Abdiawal earns more than Yahya");
} else {
    console.log("yahya earns more");
}


if (spendingLimit > spendingLimit2) {
    console.log("Abdiawal spends more than Yahya");
} else {
    console.log("Yahya spends more than Abdiawal because of xyz");
}

if (userAge1 > userAge2) {
    console.log('Abdiawal is older than Yahya');
} else {
    console.log('Yahya is older than Abdiawal');
}

if (hasPet && isMarried) {
    console.log(`${username1} has got a pet and is married`);
} else if (hasPet2 && isMarried2) {
    console.log(`${username2} has got a pet and is married too. Congrats to him😂`);
} else {
    console.log('Neither of them has got a pet is married');
}

if (spendingLimit) {
    console.log(`${username1} is a better saver than ${username2}`);
} else if (spendingLimit2) {
    console.log(`${username2} is a better saver than ${username1}`)
} else {
    console.log('Non of them is a better saver ');
}


let nationalId = null;

let bankAccount = '';

console.log(nationalId);
console.log(bankAccount);

const finalSummary = `Profile Analyzer completed. 2 users processed. Summary exported.`;

console.log(finalSummary);