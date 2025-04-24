type CalcResult = number | string;

interface SquareConfig {
    sideLength?: number;
}

export class Square implements SquareConfig {

    sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    public getSideLength(): number {
        return this.sideLength
    }

    public getArea(): CalcResult {
        const result = this.sideLength ** 2;
        return this.formatResult(result, 'Area')
    }

    public getPerimeter(): CalcResult {
        const result = this.sideLength * 4;
        return this.formatResult(result, 'Perimeter')
    }

    private formatResult(value: number, label: string): CalcResult {
        return this.randomBool() ? value : `${label}: ${value}`;
    }
    private randomBool = (): boolean => {
        return Math.floor(Math.random() * 2) === 1;
    }
}
