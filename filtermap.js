const users = [
    {name:"Avyan", age:21},
    {name:"Ankit", age:33},
    {name:"Divya", age:30},
    {name:"Gochi", age:2}
]

users.filter(users => users.age > 23).map(users=>users.name).forEach(users => console.log(users));

//output of this program //Ankit, Divya


const avyan = ["aa", "bb", "cc"];
const newAvyan = avyan.map((item) => item.toUpperCase());

console.log(newAvyan);

const newAvyan1 = avyan.map(item => item + "!!!");

console.log(newAvyan1);

const filteredAvyan = avyan.filter(item =>  item.startsWith("a"));

const filterInclude = avyan.filter(item =>  item.includes("a"));

console.log(filteredAvyan);

console.log(filterInclude)