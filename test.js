//Books
// id
 
// name
 
// version
 
// released_at

// 1    Math  4             2025-09-12 22:00:12
 
// 2    Math  3             2025-09-14 22:00:12
 
// 3    Math  2             2024-03-12 22:00:12
 
// 4    Math  1             2023-02-12 22:00:12
 
// 5    Hindi  1             2025-06-12 22:00:12


//SELECT * FROM Books 




// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   location: string;
// }

// // Interface for return type (only firstName + lastName)
// interface UserName {
//   firstName: string;
//   lastName: string;
// }

// class ABC {
//   private users: User[] = [
//     { firstName: "Ankit", lastName: "Kumar", age: 25, location: "Delhi" },
//     { firstName: "John", lastName: "Doe", age: 30, location: "Mumbai" }
//   ];

//   getFullName(id: number): UserName {
//     const user = this.users[id];
//     return {
//       firstName: user.firstName,
//       lastName: user.lastName
//     };
//   }
// }

// // Example usage
// const abc = new ABC();
// console.log(abc.getFullName(0));
// // Output: { firstName: 'Ankit', lastName: 'Kumar' }

//Find the minimum value → 1
//From the elements that come after this minimum, find the maximum value
const arr = [7, 10, 1, 3, 6, 9, 2];

const min = Math.min(...arr);
console.log(min)  
const minIndex = arr.indexOf(min);
const subArray = arr.slice(minIndex + 1);
const max = Math.max(...subArray);
console.log(max); // 9