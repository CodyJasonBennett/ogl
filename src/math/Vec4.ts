import * as Vec4Func from './functions/Vec4Func.js';

export class Vec4 extends Array<number> {
    constructor(x = 0, y = x, z = x, w = x) {
        super(x, y, z, w);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set w(v) {
        this[3] = v;
    }

    set(x: number | Vec4, y: number = x as number, z: number = x as number, w: number = x as number): this {
        if ((x as number[]).length) return this.copy(x as Vec4);
        Vec4Func.set(this as unknown as Vec4Func.Vec4Tuple, x as number, y, z, w);
        return this;
    }

    copy(v: Vec4): this {
        Vec4Func.copy(this as unknown as Vec4Func.Vec4Tuple, v as unknown as Vec4Func.Vec4Tuple);
        return this;
    }

    normalize(): this {
        Vec4Func.normalize(this as unknown as Vec4Func.Vec4Tuple, this as unknown as Vec4Func.Vec4Tuple);
        return this;
    }

    multiply(v: number): this {
        Vec4Func.scale(this as unknown as Vec4Func.Vec4Tuple, this as unknown as Vec4Func.Vec4Tuple, v);
        return this;
    }

    dot(v: Vec4): number {
        return Vec4Func.dot(this as unknown as Vec4Func.Vec4Tuple, v as unknown as Vec4Func.Vec4Tuple);
    }

    fromArray(a: number[], o: number = 0): this {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
    }

    toArray(a: number[] = [], o: number = 0): number[] {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }
}
