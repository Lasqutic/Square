import { Square } from './square.service';

const square = new Square(5);

console.log("Side:", square.getSideLength());
console.log( square.getArea());
console.log( square.getPerimeter());