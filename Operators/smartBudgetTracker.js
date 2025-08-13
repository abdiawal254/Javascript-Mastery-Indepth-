let  monthlyIncome = 60000;
let monthlyExpenses = 40000;
let caloriesConsumed = 2200;
let caloriesBurned = 700;

// Arithmetic operators

let remainingBudget = monthlyIncome - monthlyExpenses;
console.log(remainingBudget);

const caloriesSurplus = caloriesConsumed - caloriesBurned;
console.log(caloriesSurplus);

// Assignment operators 

let newMonthlyIncome = 100000;
let newMonthlyExpenses = 60000;

console.log(newMonthlyIncome);
console.log(newMonthlyExpenses);

let newRemainingBudget = newMonthlyIncome - newMonthlyExpenses;
console.log(newRemainingBudget);

// Comparison operators

if (caloriesConsumed > caloriesBurned) {
    console.log('You consumed alot of calories please stop that!!');
} else {
    console.log('You doing great please continue like that');
}

if (monthlyIncome >= monthlyExpenses) {
    console.log('Good work, save some money for yourself!');
} else {
    console.log('You have change this bad habit nanii!!');
}

// Logical operators

if (monthlyIncome >= monthlyExpenses && caloriesConsumed >= caloriesBurned) {
    console.log('The user is financially stable and has got enough calories! in surplus!!!');
} else {
    console.log('The user is not stable in either way!!');
}

if (monthlyIncome >= monthlyExpenses || caloriesConsumed >= caloriesBurned) {
    console.log('You are doing great in either of them');
} else {
    console.log('You need to improve on both health and wealth');
}

// Ternary operator

let financeStatus = monthlyIncome > monthlyExpenses ? "you're saving money! Good." : "You need to save money dud!";

console.log(financeStatus);

let healthStatus = caloriesBurned >= caloriesConsumed ? "You are in a calorie deficit." : "You're in calorie surplus";

console.log(healthStatus);


//  Increment / Decrement Operators

monthlyIncome +=20000;
console.log(monthlyIncome)

monthlyExpenses -=10000;
console.log(monthlyExpenses);
console.log(remainingBudget);


