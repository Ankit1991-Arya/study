const original = {
  name: "Ankit",
  address: { city: "Delhi", pin: 110001 }
};

// Shallow Copy (using spread)
const shallowCopy = { ...original };

//shallowCopy.name = "Rahul";   
//shallowCopy.address.city = "Mumbai";
original.address.city = "Bangalore"; 
original.name = "Kumar";

console.log(shallowCopy.address.city);
console.log(original.name);

let user1 = {
  name: "Ravi",
  address: { city: "Delhi", pin: 110001 }
};

// Deep copy (JSON method)
let user2 = JSON.parse(JSON.stringify(user1));

user2.address.city = "Noida"; // ✅ only affects user2

console.log(user1.address.city); // "Delhi"
console.log(user2.address.city); // "Noida"

console.log(user1);
console.log(user2);
