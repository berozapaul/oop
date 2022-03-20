import {Dog} from "./Dog";
import {Cat} from "./Cat";

const dog = new Dog({ age: 2, legs: 4, name: 'Top' }, true);
const cat = new Cat();

console.log('DOG:', dog);
console.log('DOG doing:', dog.woof());

console.log('CAT:', cat);
console.log('CAT doing:', cat.meow());
