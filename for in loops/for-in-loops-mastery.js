//🔹 Looping over an Object
const person = { name: "Abdiawal", age: 21, role: "developer"};
for (let key in person) {
    console.log(key, person[key]);
}

//🔹 Looping over an Array (indexes, not values!)
const arr = ["a", "b", "c"];
for (let index in arr){
    console.log(index, arr[index]);
};

//🔹 Adding Check with hasOwnProperty (best practice)
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key])
    }
}




/////////////////////////////////////////////////////////////////////////////

//🚀 Step 2: Drills to Cement Mastery
//Level 1 → Objects Basics
const car = {
    brand: "Toyotta",
    model: "Corolla",
    year: 2020
}

for (let key in car) {
    console.log(key + ": " + car[key]);
}



//Count how many properties the object has.
const car = {
    brand: "Toyotta",
    model: "Corrolla",
    year: 2020
}

let count = 0;
for (let key in car ) {
    count++;
}

console.log(`The object has ${count} properties`);




//Create an object of your details (name, age, country) and print them nicely.
const myDetails = {
    name: "Abdiawal Aden Siad",
    age: 21,
    country: "Kenya",
    natinality: "Somalian",
    occupation: "Software engineer",
    mother: "Deman faan muhumed",
    father: "Aden siyad keinan",
    siblings: 5
}

for (let key in myDetails) {
    console.log(`${key.toUpperCase()}: ${myDetails[key]}`);
}




//Level 2 → Arrays with for...in
//Print indexes and values of [10, 20, 30, 40].

const numbers = [10, 20, 30, 40, 50];
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}


//Sum all numbers in [5, 10, 15, 20] using for...in.
const numbers = [5, 10, 15, 20];
let sum = 0;

for (let index in numbers) {
    sum = sum + numbers[index];
}
console.log(`Sum = ${sum}`);


// Convert [ "Ali", "Sara", "J"ohn" ] into an object like: {0: "Ali", 1: "Sara", 2: "John"}
const names = ["Ali", "Sara", "John"];
const obj = {};

for (let index in names) {
    obj[index] = names[index];
}

console.log(obj);



//Level 3 → Objects with Logic
Find the property with the largest numeric value:
const scores = {Ali: 85, Sara: 92, John: 78};
let highestName = "";
let highestScore = -Infinity;

for (let person in scores) {
    if (scores[person] > highestScore) {
        highestScore = scores[person];
        highestName= person;
    }
}

console.log(`${highestName} has the highest score: ${highestScore}`);




//Given an object:const product = { price: 1200, tax: 0.16, discount: 100 };Calculate the final price after tax and discount.
const product = { price: 1200, tax: 0.16, discount: 100};
let price = 0, tax = 0, discount = 0;

for (let key in product) {
    if (key === "price") {
        price = product[key];
    }else if (key === "tax") {
        tax = product[key];
    }else if (key === "discount") {
        discount = product[key];
    }
}


const finalPrize = price + (price * tax) - discount;
console.log(`Final prize: ${finalPrize}`)