//write a program to demonstrate higher order functions
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
    }

const person = { name: 'Alice' };

// Using call
greet.call(person, 'Hello', '!'); // Output: Hello, Alice!

// Using apply
greet.apply(person, ['Hi', '.']); // Output: Hi, Alice.

greet.bind(person, 'Hey', '!!')(); // Output: Hey, Alice!!