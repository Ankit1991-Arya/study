const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);


const arr1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr1 = arr1.filter((item, index) => arr1.indexOf(item) === index);
console.log(uniqueArr1);