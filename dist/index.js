"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square_1 = require("./square");
const square = new square_1.Square(5);
console.log("Side:", square.getSideLength());
console.log(square.getArea());
console.log(square.getPerimeter());
