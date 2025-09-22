
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