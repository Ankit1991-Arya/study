const original = {
  name: "Ankit",
  address: { city: "Delhi", pin: 110001 }
};

// Shallow Copy (using spread)
const shallowCopy = { ...original };

shallowCopy.name = "Rahul";   
shallowCopy.address.city = "Mumbai"; 

console.log(original.address.city);