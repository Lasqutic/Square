"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(sideLength) {
        this.randomBool = () => {
            return Math.floor(Math.random() * 2) === 1;
        };
        this.sideLength = sideLength;
    }
    getSideLength() {
        return this.sideLength;
    }
    getArea() {
        const result = this.sideLength ** 2;
        return this.formatResult(result, 'Area');
    }
    getPerimeter() {
        const result = this.sideLength * 4;
        return this.formatResult(result, 'Perimeter');
    }
    formatResult(value, label) {
        return this.randomBool() ? value : `${label}: ${value}`;
    }
}
exports.Square = Square;
