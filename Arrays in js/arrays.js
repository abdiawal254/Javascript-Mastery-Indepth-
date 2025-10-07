
let fruits = ["Apple", "Mango", "Ovacado", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);

fruits[2] = "Watermelon";
console.log(fruits[2]);

fruits[4] = "Lemon";
console.log(fruits[4]);

console.log(fruits.length);
console.log(fruits);

fruits.push("peer");
console.log(fruits);
fruits.pop("peer");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);
fruits.unshift("Beetroots");
console.log(fruits);



for (let fruit of fruits){
    console.log(fruits);
}



let arr = ["I", "Study", "Javascript", "Right", "Now"];

arr.splice(0, 3, "Let's", "Dance");

console.log(arr);


let num = 5;

switch(num) {
    case 0:
        console.log("The number is zero(0)");
        break;
        case 1: 
        console.log("The number is one.");
        break;
        case 2:
            console.log("The number is two");
            break;
            default:
                console.log("The number is greater than 2.")
};

let number = 10;

let result = number >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}`);

