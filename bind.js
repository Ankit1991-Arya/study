const person = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

const greet = person.greet;
const greet1 = person.greet.bind(person);
console.log(greet());
console.log(greet1());


const a = {};
const b = { key: "b" };
const c = { key: "c" };
 
a[b] = 123;
a[c] = 456;
 
console.log(a[c]);



const Obj = [
        {name:"Sachin"},
        {},
        {city:"Mumbai"},
        {},
        {},
        {age:40}
    ];
    
    const newObj = Obj.filter(item => Object.keys(item).length !== 0);
    console.log(newObj);
    
    
    
    
const arr = [1, 2, 3, 4, 5];

//Copy
const copy = arr.slice();
console.log(copy);
// Remove
console.log(arr.splice(2, 2)); // [3, 4]
console.log(arr);              // [1, 2, 5]

// Insert
arr.splice(1, 0, 10, 20);
console.log(arr);              // [1, 10, 20, 2, 5]

// Replace
arr.splice(2, 1, 99);
console.log(arr);              // [1, 10, 99, 2, 5]

// Use cases:

// Removing items from an array.

// Inserting items at specific positions.

// Replacing items.

// Remove duplicates with Set, then sort
const arrayDuplicate = [1, 2, 3,5,2, 4, 1, 3];
const uniqueSorted = [...new Set(arrayDuplicate)].sort((a, b) => a - b);

console.log(uniqueSorted);