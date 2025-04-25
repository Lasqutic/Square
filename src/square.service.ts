import { ISquare } from './square.interface';

type FormattedNumberResult = number | string;

export enum ReturnTypeEnum {
    Number = 'number',
    String = 'string',
}

type ReturnType = {
    [ReturnTypeEnum.Number]: number;
    [ReturnTypeEnum.String]: string;
};

export class Square implements ISquare {

    readonly sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    public getSideLength(): number {
        return this.sideLength
    }

    public getArea(): FormattedNumberResult {
        const result = this.sideLength ** 2;
        return this.randomizeResult(result);
    }

    public getPerimeter(): FormattedNumberResult {
        const result = this.sideLength * 4;
        return this.randomizeResult(result);
    }

    public getPerimeterGen<T extends ReturnTypeEnum>(type: T): ReturnType[T] {
        const result = this.sideLength * 4;

        if (type === ReturnTypeEnum.String) {
            return result.toString() as ReturnType[T];
        }
        return result as ReturnType[T];
    }

    public getAreaGen<T extends ReturnTypeEnum>(type: T): ReturnType[T] {
        const result = this.sideLength ** 2;

        if (type === ReturnTypeEnum.String) {
            return result.toString() as ReturnType[T];
        }
        return result as ReturnType[T];
    }

    private randomizeResult(value: number): FormattedNumberResult {
        return Math.floor(Math.random() * 10) % 2 === 0
            ? value
            : value.toString();
    }

}
