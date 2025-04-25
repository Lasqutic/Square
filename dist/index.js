"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square_service_1 = require("./square.service");
const square = new square_service_1.Square(5);
console.log("Side:", square.getSideLength());
console.log(square.getArea());
console.log(square.getPerimeter());
