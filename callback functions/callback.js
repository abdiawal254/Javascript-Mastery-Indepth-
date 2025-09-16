function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!")
}

greet("Abdiawal", sayBye);



/// drills
//Write a function calculate(a, b, callback) that applies the callback to a and b.
function calculate (a, b, callback) {
    return callback(a, b);
}
console.log(calculate(5, 3, (x, y) => x + y));
console.log(calculate(5, 3, (x,y) => x * y));

//Drill 2: Anonymous Callbacks

function processUserInput(callback) {
  const name = "Abdiawal"; // pretend we asked the user
  callback(name);
}

// Example usage with an anonymous callback
processUserInput(function(userName) {
  console.log("Welcome, " + userName + "!");
});


//1. Double all numbers in [2, 4, 6]
const numbers = [2, 4, 6];
const doubled = numbers.map(num => num * 2);

console.log(doubled);

//2. Filter odd numbers from [1, 2, 3, 4, 5]
const nums = [1, 2, 3, 4, 5];
const oddNumbers = nums.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//3. Convert ["Ali", "Aisha"] → ["ALI", "AISHA"]
const names = ["Ali", "Aisha"];
const uppercased = names.map(name => name.toUpperCase());

console.log(uppercased);

// settimeout callback

function series(cb1, cb2, cb3) {
    setTimeout(() => {
        cb1();
        setTimeout(() => {
            cb2();
            setTimeout(() =>{
                cb3();
            }, 1000)
        }, 1000)
    }, 1000)
};

// example usage

series(
    () => console.log("Abdiawal is improving in coding"),
    () => console.log("Abdiawal is improving in coding"),
    () => console.log("Abdiawal is improving in coding Alx"),
);
