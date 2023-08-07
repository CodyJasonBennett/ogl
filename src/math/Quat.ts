import { EulerTuple } from './functions/EulerFunc.js';
import { Mat3Tuple } from './functions/Mat3Func.js';
import * as QuatFunc from './functions/QuatFunc.js';
import { Vec3Tuple } from './functions/Vec3Func.js';
import { Mat3 } from './Mat3.js';
import { Euler } from './Euler.js';
import { Vec3 } from './Vec3.js';

export class Quat extends Array<number> {
    onChange: () => void;

    constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x, y, z, w);
        this.onChange = () => {};
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
        this.onChange();
    }

    set y(v) {
        this[1] = v;
        this.onChange();
    }

    set z(v) {
        this[2] = v;
        this.onChange();
    }

    set w(v) {
        this[3] = v;
        this.onChange();
    }

    identity(): this {
        QuatFunc.identity(this as unknown as QuatFunc.QuatTuple);
        this.onChange();
        return this;
    }

    set(x: number, y: number, z: number, w: number): this;
    set(x: Quat): this;
    set(x: number | Quat, y?: number, z?: number, w?: number): this {
        if ((x as Quat).length) return this.copy(x as Quat);
        QuatFunc.set(this as unknown as QuatFunc.QuatTuple, x as number, y!, z!, w!);
        this.onChange();
        return this;
    }

    rotateX(a: number): this {
        QuatFunc.rotateX(this as unknown as QuatFunc.QuatTuple, this as unknown as QuatFunc.QuatTuple, a);
        this.onChange();
        return this;
    }

    rotateY(a: number): this {
        QuatFunc.rotateY(this as unknown as QuatFunc.QuatTuple, this as unknown as QuatFunc.QuatTuple, a);
        this.onChange();
        return this;
    }

    rotateZ(a: number): this {
        QuatFunc.rotateZ(this as unknown as QuatFunc.QuatTuple, this as unknown as QuatFunc.QuatTuple, a);
        this.onChange();
        return this;
    }

    inverse(q: Quat = this): this {
        QuatFunc.invert(this as unknown as QuatFunc.QuatTuple, q as unknown as QuatFunc.QuatTuple);
        this.onChange();
        return this;
    }

    conjugate(q: Quat = this): this {
        QuatFunc.conjugate(this as unknown as QuatFunc.QuatTuple, q as unknown as QuatFunc.QuatTuple);
        this.onChange();
        return this;
    }

    copy(q: Quat): this {
        QuatFunc.copy(this as unknown as QuatFunc.QuatTuple, q as unknown as QuatFunc.QuatTuple);
        this.onChange();
        return this;
    }

    normalize(q: Quat = this): this {
        QuatFunc.normalize(this as unknown as QuatFunc.QuatTuple, q as unknown as QuatFunc.QuatTuple);
        this.onChange();
        return this;
    }

    multiply(qA: Quat, qB?: Quat): this {
        if (qB) {
            QuatFunc.multiply(this as unknown as QuatFunc.QuatTuple, qA as unknown as QuatFunc.QuatTuple, qB as unknown as QuatFunc.QuatTuple);
        } else {
            QuatFunc.multiply(this as unknown as QuatFunc.QuatTuple, this as unknown as QuatFunc.QuatTuple, qA as unknown as QuatFunc.QuatTuple);
        }
        this.onChange();
        return this;
    }

    dot(v: Quat): number {
        return QuatFunc.dot(this as unknown as QuatFunc.QuatTuple, v as unknown as QuatFunc.QuatTuple);
    }

    fromMatrix3(matrix3: Mat3) {
        QuatFunc.fromMat3(this as unknown as QuatFunc.QuatTuple, matrix3 as unknown as Mat3Tuple);
        this.onChange();
        return this;
    }

    fromEuler(euler: Euler) {
        QuatFunc.fromEuler(this as unknown as QuatFunc.QuatTuple, euler as unknown as EulerTuple, euler.order);
        return this;
    }

    fromAxisAngle(axis: Vec3, a: number) {
        QuatFunc.setAxisAngle(this as unknown as QuatFunc.QuatTuple, axis as unknown as Vec3Tuple, a);
        this.onChange();
        return this;
    }

    slerp(q: Quat, t: number): this {
        QuatFunc.slerp(this as unknown as QuatFunc.QuatTuple, this as unknown as QuatFunc.QuatTuple, q as unknown as QuatFunc.QuatTuple, t);
        this.onChange();
        return this;
    }

    fromArray(a: number[], o: number = 0): this {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this.onChange();
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
