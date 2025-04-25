import { Square } from './square.service';
import { ReturnTypeEnum } from './square.service';

const square = new Square(5);

const area = square.getArea();
console.log("Area:", area, typeof area);

const perimeter = square.getPerimeter();
console.log("Perimeter:", perimeter, typeof perimeter);

const perimeterNumber = square.getPerimeterGen(ReturnTypeEnum.Number); 
const perimeterString = square.getPerimeterGen(ReturnTypeEnum.String); 

const areaNumber = square.getAreaGen(ReturnTypeEnum.Number); 
const areaString = square.getAreaGen(ReturnTypeEnum.String); 

console.log("Perimeter Gen:", perimeterString, typeof perimeterString);
console.log("Perimeter Gen:", perimeterNumber, typeof perimeterNumber);

console.log("Area Gen:", areaNumber, typeof areaNumber);
console.log("Area Gen:", areaString, typeof areaString);