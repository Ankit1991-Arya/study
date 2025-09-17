function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

// Using call
greet.call(person, 'Hello', '!'); // Output: Hello, Alice!

// Using apply
greet.apply(person, ['Hi', '...']); // Output: Hi, Alice...

// Using bind
const greetAlice = greet.bind(person, 'Hey', '!!');
greetAlice(); // Output: Hey, Alice!!


