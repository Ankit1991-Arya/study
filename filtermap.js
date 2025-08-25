const users = [
    {name:"Avyan", age:21},
    {name:"Ankit", age:33},
    {name:"Divya", age:30},
    {name:"Gochi", age:2}
]

users.filter(users => users.age > 23).map(users=>users.name).forEach(users => console.log(users));

//output of this program //Ankit, Divya