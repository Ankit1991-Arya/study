//Promise.all , resolves when all promises are resolved, or rejects when one of them is rejected
Promise.all([
    //Promise.reject(1),
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(console.log); 


//Promise.race return the first settled promise (success or failure)
Promise.race([
  new Promise(res => setTimeout(()=>res("fast"),300)),
  new Promise(res => setTimeout(()=>res("slow"),200)),
  new Promise(reject => setTimeout(()=>reject("error"),100))
]).then(console.log);  //[error]

//Promise.allSettled returns a promise that resolves after all of the given promises have either fulfilled or rejected,
//  with an array of objects that each describes the outcome of each promise.
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3)
]).then(console.log);

//Promise.any returns Resolves with the first fulfilled promise.
Promise.any([
    Promise.reject(1),
    Promise.reject(2),
    Promise.resolve(3),
    Promise.reject(4),
    Promise.resolve(5)
]).then(console.log); //3

