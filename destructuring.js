const user = { id: 1, name: "Ankit", age: 25, country: "India" };
const { name, ...details } = user;

console.log(name);
console.log(details);