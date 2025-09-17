console.log("start");
setTimeout(() => {
    console.log("Set time out");
});

Promise.resolve().then(() => {
console.log("Promise resolved")
});

console.log("end");