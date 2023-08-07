import { Mat3Tuple } from './functions/Mat3Func.js';
import { Mat4Tuple } from './functions/Mat4Func.js';
import * as Vec2Func from './functions/Vec2Func.js';
import { Mat3 } from './Mat3.js';
import { Mat4 } from './Mat4.js';

export class Vec2 extends Array<number> {
    constructor(x = 0, y = x) {
        super(x, y);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set(x: number | Vec2, y: number = x as number): this {
        if ((x as number[]).length) return this.copy(x as Vec2);
        Vec2Func.set(this as unknown as Vec2Func.Vec2Tuple, x as number, y);
        return this;
    }

    copy(v: Vec2): this {
        Vec2Func.copy(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    add(va: Vec2, vb?: Vec2): this {
        if (vb) Vec2Func.add(this as unknown as Vec2Func.Vec2Tuple, va as unknown as Vec2Func.Vec2Tuple, vb as unknown as Vec2Func.Vec2Tuple);
        else Vec2Func.add(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, va as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    sub(va: Vec2, vb?: Vec2): this {
        if (vb) Vec2Func.subtract(this as unknown as Vec2Func.Vec2Tuple, va as unknown as Vec2Func.Vec2Tuple, vb as unknown as Vec2Func.Vec2Tuple);
        else Vec2Func.subtract(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, va as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    multiply(v: Vec2 | number): this {
        if ((v as number[]).length)
            Vec2Func.multiply(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        else Vec2Func.scale(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, v as number);
        return this;
    }

    divide(v: Vec2 | number): this {
        if ((v as number[]).length)
            Vec2Func.divide(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        else Vec2Func.scale(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, 1 / (v as number));
        return this;
    }

    inverse(v: Vec2 = this): this {
        Vec2Func.inverse(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len(): number {
        return Vec2Func.length(this as unknown as Vec2Func.Vec2Tuple);
    }

    distance(v?: Vec2): number {
        if (v) return Vec2Func.distance(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        else return Vec2Func.length(this as unknown as Vec2Func.Vec2Tuple);
    }

    squaredLen(): number {
        return this.squaredDistance();
    }

    squaredDistance(v?: Vec2): number {
        if (v) return Vec2Func.squaredDistance(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        else return Vec2Func.squaredLength(this as unknown as Vec2Func.Vec2Tuple);
    }

    negate(v: Vec2 = this): this {
        Vec2Func.negate(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    cross(va: Vec2, vb?: Vec2): number {
        if (vb) return Vec2Func.cross(va as unknown as Vec2Func.Vec2Tuple, vb as unknown as Vec2Func.Vec2Tuple);
        return Vec2Func.cross(this as unknown as Vec2Func.Vec2Tuple, va as unknown as Vec2Func.Vec2Tuple);
    }

    scale(v: number): this {
        Vec2Func.scale(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, v);
        return this;
    }

    normalize(): this {
        Vec2Func.normalize(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple);
        return this;
    }

    dot(v: Vec2): number {
        return Vec2Func.dot(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
    }

    equals(v: Vec2): boolean {
        return Vec2Func.exactEquals(this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple);
    }

    applyMatrix3(mat3: Mat3): this {
        Vec2Func.transformMat3(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, mat3 as unknown as Mat3Tuple);
        return this;
    }

    applyMatrix4(mat4: Mat4): this {
        Vec2Func.transformMat4(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, mat4 as unknown as Mat4Tuple);
        return this;
    }

    lerp(v: Vec2, a: number): this {
        Vec2Func.lerp(this as unknown as Vec2Func.Vec2Tuple, this as unknown as Vec2Func.Vec2Tuple, v as unknown as Vec2Func.Vec2Tuple, a);
        return this;
    }

    clone(): Vec2 {
        return new Vec2(this[0], this[1]);
    }

    fromArray(a: number[], o: number = 0): this {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
    }

    toArray(a: number[] = [], o: number = 0): number[] {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }
}
