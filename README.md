# Square

A simple TypeScript project that defines a `Square` class capable of calculating area and perimeter of a square with dynamic return types.

---

##  Features

- Define a square by its side length.
- Get the side length, area, and perimeter.
- Area and perimeter return types can randomly be either a string or a number.

---

##  Structure

```bash
Square/
├── src/
│   ├── square.interface.ts     # Interface for square configuration
│   ├── square.service.ts       # Core logic of Square class
│   └── index.ts                # Entry point
├── dist/                       # Compiled JS output (after build)
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

---

##  Setup

### Compile TypeScript
```bash
npx tsc
```

### Run
```bash
node dist/index.js
```

---

## 🎓 Example Usage

### `index.ts`
```ts
import { Square } from './square.service';

const square = new Square(5);

console.log("Side:", square.getSideLength());
console.log(square.getArea());
console.log(square.getPerimeter());
```

### Output (varies due to random format):
```bash
Side: 5
25
Perimeter: 20
```
*or*
```bash
Side: 5
Area: 25
Perimeter: 20
```

---

##  API Reference

### Interface: `ISquareConfig`
```ts
export interface ISquareConfig {
    sideLength?: number;
}
```

### Class: `Square`
```ts
constructor(sideLength: number)
```

#### Methods
- `getSideLength(): number`
- `getArea<T extends string | number>(): T`
- `getPerimeter<T extends string | number>(): T`

---

##  Behavior Notes
- `getArea()` and `getPerimeter()` randomly return either:
  - a number (e.g. `25`)
  - or a string labeled format (e.g. `"Area: 25"`)
- This behavior is controlled via a private method `randomBool()`.

---
