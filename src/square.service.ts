import { ISquareConfig } from './square.interface';

type FormattedNumberResult = number | string;

export class Square implements ISquareConfig {

    readonly sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    public getSideLength(): number {
        return this.sideLength
    }

    public getArea<T extends FormattedNumberResult>(): T {
        const result = this.sideLength ** 2;
        return this.formatResult(result, 'Area')
    }

    public getPerimeter<T extends FormattedNumberResult>(): T {
        const result = this.sideLength * 4;
        return this.formatResult(result, 'Perimeter')
    }

    private formatResult<T extends FormattedNumberResult>(value: number, label: string): T {
        if (this.randomBool()) {
            return `${label}: ${value}` as T
        } else {
            return value as T;
        }
    }
    private randomBool(): boolean {
        return Math.floor(Math.random() * 2) === 1;
    }
}
