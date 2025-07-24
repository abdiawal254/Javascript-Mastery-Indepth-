// Phase 1 Basic variable mastery

let userName = "Alinur";
let dailyIncome = 10000;
let dailySpending = 4000;
let savingsGoal = 5000;

let summary = `Hi My name is  ${userName} my daily income is ${dailyIncome}, my daily spending is ${dailySpending} and my savings goal is ${savingsGoal}`;

console.log(summary);



// Phase 2 Simulated day to day

const dayOneIcome = 3000;
const dayOneSpending = 1000;

const dayTwoIncome = 1000;
const dayTwoSpending = 1500;

const dayThreeIncome = 2000;
const dayThreeSpending = 800;

const dayFourIncome = 1000;
const dayFourSpending = 500;

const dayFiveIncome = 500;
const dayFiveSpending = 1000;

const totalIncome = (dayOneIcome + dayTwoIncome + dayThreeIncome + dayFourIncome + dayFiveIncome);
console.log(`Total Income: ${totalIncome}`);

const totalSpending = (dayOneSpending + dayTwoSpending + dayThreeSpending + dayFourSpending + dayFiveSpending);

console.log(`Total Spending: ${totalSpending}`);

let result = (totalIncome - totalSpending);
console.log(`Total Balance saved: ${result}`);


// Phase 3 Daily Balance Tracker 

let dayOneBalance = (dayOneIcome - dayOneSpending);
let dayTwoBalance = (dayOneBalance + dayTwoIncome - dayTwoSpending);
let dayThreeBalance = (dayTwoBalance + dayThreeIncome - dayThreeSpending);
let dayFourBalance = (dayThreeBalance + dayFourIncome - dayFourSpending);
let dayFiveBalance = (dayFourBalance + dayFiveIncome - dayFiveSpending);

console.log(`Day 5 balance: ${dayFiveBalance}`);

// Phase 4 Weekly Financial Report

let totalEarnings = (dailyIncome * 30);
console.log(`My Total Earnings : ${totalEarnings}`);
let totalExpenses = (dailySpending * 30);
console.log(`My Total Expenses: ${totalExpenses}`);

let balance = (totalEarnings - totalExpenses);
console.log(`My balance for the month: ${balance}`);

if (totalEarnings > totalExpenses) {
    console.log('Congracts you have reached your savings goal this month!.');
} else{
    console.log('Try Next month');
}

// Phase 5 Add complexity


let foodSpending = 1000;
let transportSpending = 1000;
let entertainmentSpending = 500;
// calculate the percentage now 

let foodPercentage = (foodSpending / dailyIncome) * 100;
console.log(`Food daily percentage: ${foodPercentage}`);

let transportPercentage = (transportSpending / dailyIncome) * 100;
console.log(`Transport daily percentage: ${transportPercentage}`);

let entertainmentPercentage = (entertainmentSpending / dailyIncome) * 100;
console.log(`Entertainment daily spending: ${entertainmentPercentage}`);


let monthlyFoodSpending = foodSpending * 30;
let monthlyTransportSpending = transportSpending * 30;
let monthlyEntertainmentSpending = entertainmentSpending * 30;

let foodMonthlyPercent = (monthlyFoodSpending / totalEarnings) * 100;
let transportMonthlyPercent = (monthlyTransportSpending / totalEarnings) * 100;
let entertainmentMonthlyPercentage = (entertainmentSpending / totalEarnings) * 100;

console.log(`Monthly food spending uses ${foodMonthlyPercent.toFixed(2)}% of your total earnings.`);
console.log(`Monthly transport spending uses ${transportMonthlyPercent.toFixed(2)}% of your total earnings.`);

console.log(`Monthly Entertainment Spending Uses ${entertainmentMonthlyPercentage.toFixed(2)}% of your Total Earnings`)
