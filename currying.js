function normalAdd(a, b, c) {
  return a + b + c;
}

console.log(normalAdd(1, 2, 3)); 


function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));