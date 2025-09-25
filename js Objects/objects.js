
let user1 = {
    name: "Abdiawal",
    age: 21,
    school: "none",
    skills: "Software development"
}
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user1.school);
console.log(user1.skills);


function makeUser (name, age) {
    return {
        name,
        age,
    };

}

let user = makeUser("John", 22);
console.log(user.name)
console.log(user.age)

let user2 = {
    name: "Yahya",
    age: 21
}

console.log("age" in user2);
console.log("blabla" in user2);

//nested objects
let student = {
    name: "Fatima",
    grades: { math: 90, english: 85}
}

console.log(student.grades.math);

//methods inside objects
let car = {
    brand: "Toyotta",
    drive: function () {
        return "Vroom";
    }
}

console.log(car.drive());





///////////////////////////////////////////////////////////////////
// DRILLS
// drill 1 create and Access
//create an object book with properties, title, author and year, log the author
let book = {
    title: "The blossoms of the savannah",
    author: "Ole kaelo",
    year: 2019
}

console.log(book.title);
console.log(book.author);
console.log(book.year);

// Drill 2 
// Update and add
book.year = 2022; // update
book.rating = 4.5;

console.log(book);

// drill 3 
// delete
delete book.rating;
console.log(book);

// drill 4 loop
// task loop through book and print key: value

for (let key in book) {
    console.log(key + ": " + book[key]);
}

// drill 5 nested object
// Create an object student with name and a nested marks object having math: 85 and english: 92. Log the English mark.

let arday = {
    name: "Aisha",
    marks: { 
        math: 85, 
        english: 92
    }
}
console.log(arday.name);
console.log(arday.marks.english);

// drill 6 
// Object methods
//Create an object person with firstName, lastName, and a method getFullName that returns the full name.

let person = {
    firstName: "Awaldeen",
    lastName: "Siad",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());

// drill 7
// task Get all the keys of student from Drill 5.
console.log(Object.keys(arday));

// drill 8 dynamic access
let subject = "math";
console.log(arday.marks[subject]);