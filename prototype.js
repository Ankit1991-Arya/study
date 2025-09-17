class Person{
    constructor(name){
        this.name =name;
    }

    greet(){
        return `Hello, my name is ${this.name}`;
    }
}

const person1 = new Person("Alice");
console.log(person1.greet()); // 