export type FormattedNumberResult = number | string;

export interface ISquare {
    sideLength: number;

    getPerimeter(): FormattedNumberResult;
    getArea(): FormattedNumberResult;
    getSideLength(): number;
}
