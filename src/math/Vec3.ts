import { Mat3Tuple } from './functions/Mat3Func.js';
import { Mat4Tuple } from './functions/Mat4Func.js';
import { QuatTuple } from './functions/QuatFunc.js';
import * as Vec3Func from './functions/Vec3Func.js';
import { Mat3 } from './Mat3.js';
import { Mat4 } from './Mat4.js';
import { Quat } from './Quat.js';

export class Vec3 extends Array<number> {
    constructor(x = 0, y = x, z = x) {
        super(x, y, z);
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

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set(x: Vec3 | number, y: number = x as number, z: number = x as number): this {
        if ((x as number[]).length) return this.copy(x as Vec3);
        Vec3Func.set(this as unknown as Vec3Func.Vec3Tuple, x as number, y, z);
        return this;
    }

    copy(v: Vec3): this {
        Vec3Func.copy(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    add(va: Vec3, vb?: Vec3): this {
        if (vb) Vec3Func.add(this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple, vb as unknown as Vec3Func.Vec3Tuple);
        else Vec3Func.add(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    sub(va: Vec3, vb?: Vec3): this {
        if (vb) Vec3Func.subtract(this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple, vb as unknown as Vec3Func.Vec3Tuple);
        else Vec3Func.subtract(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    multiply(v: Vec3 | number): this {
        if ((v as Vec3).length)
            Vec3Func.multiply(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        else Vec3Func.scale(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, v as number);
        return this;
    }

    divide(v: Vec3 | number): this {
        if ((v as Vec3).length)
            Vec3Func.divide(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        else Vec3Func.scale(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, 1 / (v as number));
        return this;
    }

    inverse(v: Vec3 = this): this {
        Vec3Func.inverse(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len(): number {
        return Vec3Func.length(this as unknown as Vec3Func.Vec3Tuple);
    }

    distance(v?: Vec3): number {
        if (v) return Vec3Func.distance(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        else return Vec3Func.length(this as unknown as Vec3Func.Vec3Tuple);
    }

    squaredLen(): number {
        return Vec3Func.squaredLength(this as unknown as Vec3Func.Vec3Tuple);
    }

    squaredDistance(v?: Vec3): number {
        if (v) return Vec3Func.squaredDistance(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        else return Vec3Func.squaredLength(this as unknown as Vec3Func.Vec3Tuple);
    }

    negate(v: Vec3 = this): this {
        Vec3Func.negate(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    cross(va: Vec3, vb?: Vec3): this {
        if (vb) Vec3Func.cross(this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple, vb as unknown as Vec3Func.Vec3Tuple);
        else Vec3Func.cross(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, va as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    scale(v: number): this {
        Vec3Func.scale(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, v);
        return this;
    }

    normalize(): this {
        Vec3Func.normalize(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple);
        return this;
    }

    dot(v: Vec3): number {
        return Vec3Func.dot(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
    }

    equals(v: Vec3): boolean {
        return Vec3Func.exactEquals(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
    }

    applyMatrix3(mat3: Mat3): this {
        Vec3Func.transformMat3(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, mat3 as unknown as Mat3Tuple);
        return this;
    }

    applyMatrix4(mat4: Mat4): this {
        Vec3Func.transformMat4(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, mat4 as unknown as Mat4Tuple);
        return this;
    }

    scaleRotateMatrix4(mat4: Mat4): this {
        Vec3Func.scaleRotateMat4(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, mat4 as unknown as Mat4Tuple);
        return this;
    }

    applyQuaternion(q: Quat): this {
        Vec3Func.transformQuat(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, q as unknown as QuatTuple);
        return this;
    }

    angle(v: Vec3): number {
        return Vec3Func.angle(this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple);
    }

    lerp(v: Vec3, t: number): this {
        Vec3Func.lerp(this as unknown as Vec3Func.Vec3Tuple, this as unknown as Vec3Func.Vec3Tuple, v as unknown as Vec3Func.Vec3Tuple, t);
        return this;
    }

    clone(): Vec3 {
        return new Vec3(this[0], this[1], this[2]);
    }

    fromArray(a: number[], o: number = 0): this {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }

    toArray(a: number[] = [], o: number = 0): number[] {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

    transformDirection(mat4: Mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];

        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

        return this.normalize();
    }
}
