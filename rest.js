const [first, ...rest] = [10, 20, 30, 40];  //rest operator
console.log(first); // 10
console.log(rest);

const arr = [1, 2, 3];  //spread operator
const newArr = [...arr, 4, 5];

console.log(newArr);

const newArray  = [1,4,6,8,4,6,7];
newArray.shift(); // removes first element
newArray.unshift(10); // adds at the start
newArray.pop(); //removes last element
//newArray.push(100); // adds at the end
console.log(newArray);
 

//Hoisting Example

console.log(avyan);

var avyan = 10;

console.log(avyan);
