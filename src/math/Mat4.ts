import * as Mat4Func from './functions/Mat4Func.js';
import { QuatTuple } from './functions/QuatFunc.js';
import { Vec3Tuple } from './functions/Vec3Func.js';
import { Vec3 } from './Vec3.js';
import { Quat } from './Quat.js';

export class Mat4 extends Array<number> {
    constructor(
        m00 = 1,
        m01 = 0,
        m02 = 0,
        m03 = 0,
        m10 = 0,
        m11 = 1,
        m12 = 0,
        m13 = 0,
        m20 = 0,
        m21 = 0,
        m22 = 1,
        m23 = 0,
        m30 = 0,
        m31 = 0,
        m32 = 0,
        m33 = 1
    ) {
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    get x() {
        return this[12];
    }

    get y() {
        return this[13];
    }

    get z() {
        return this[14];
    }

    get w() {
        return this[15];
    }

    set x(v) {
        this[12] = v;
    }

    set y(v) {
        this[13] = v;
    }

    set z(v) {
        this[14] = v;
    }

    set w(v) {
        this[15] = v;
    }

    set(
        m00: number,
        m01: number,
        m02: number,
        m03: number,
        m10: number,
        m11: number,
        m12: number,
        m13: number,
        m20: number,
        m21: number,
        m22: number,
        m23: number,
        m30: number,
        m31: number,
        m32: number,
        m33: number
    ): this;
    set(m: Mat4): this;
    set(
        m00: number | Mat4,
        m01?: number,
        m02?: number,
        m03?: number,
        m10?: number,
        m11?: number,
        m12?: number,
        m13?: number,
        m20?: number,
        m21?: number,
        m22?: number,
        m23?: number,
        m30?: number,
        m31?: number,
        m32?: number,
        m33?: number
    ): this {
        if ((m00 as Mat4).length) return this.copy(m00 as Mat4);
        Mat4Func.set(
            this as unknown as Mat4Func.Mat4Tuple,
            m00 as number,
            m01!,
            m02!,
            m03!,
            m10!,
            m11!,
            m12!,
            m13!,
            m20!,
            m21!,
            m22!,
            m23!,
            m30!,
            m31!,
            m32!,
            m33!
        );
        return this;
    }

    translate(v: Vec3, m: Mat4 = this) {
        Mat4Func.translate(this as unknown as Mat4Func.Mat4Tuple, m as unknown as Mat4Func.Mat4Tuple, v as unknown as Vec3Tuple);
        return this;
    }

    rotate(v: number, axis: Vec3, m: Mat4 = this): this {
        Mat4Func.rotate(this as unknown as Mat4Func.Mat4Tuple, m as unknown as Mat4Func.Mat4Tuple, v, axis as unknown as Vec3Tuple);
        return this;
    }

    scale(v: Vec3 | number, m: Mat4 = this): this {
        Mat4Func.scale(
            this as unknown as Mat4Func.Mat4Tuple,
            m as unknown as Mat4Func.Mat4Tuple,
            (typeof v === 'number' ? [v, v, v] : v) as unknown as Vec3Tuple
        );
        return this;
    }

    add(ma: Mat4, mb?: Mat4): this {
        if (mb) Mat4Func.add(this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple, mb as unknown as Mat4Func.Mat4Tuple);
        else Mat4Func.add(this as unknown as Mat4Func.Mat4Tuple, this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    sub(ma: Mat4, mb?: Mat4): this {
        if (mb) Mat4Func.subtract(this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple, mb as unknown as Mat4Func.Mat4Tuple);
        else Mat4Func.subtract(this as unknown as Mat4Func.Mat4Tuple, this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    multiply(ma: Mat4 | number, mb?: Mat4): this {
        if (!(ma as any).length) {
            Mat4Func.multiplyScalar(this as unknown as Mat4Func.Mat4Tuple, this as unknown as Mat4Func.Mat4Tuple, ma as number);
        } else if (mb) {
            Mat4Func.multiply(this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple, mb as unknown as Mat4Func.Mat4Tuple);
        } else {
            Mat4Func.multiply(this as unknown as Mat4Func.Mat4Tuple, this as unknown as Mat4Func.Mat4Tuple, ma as unknown as Mat4Func.Mat4Tuple);
        }
        return this;
    }

    identity(): this {
        Mat4Func.identity(this as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    copy(m: Mat4): this {
        Mat4Func.copy(this as unknown as Mat4Func.Mat4Tuple, m as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    fromPerspective({ fov, aspect, near, far }: { fov: number; aspect: number; near: number; far: number }): this {
        Mat4Func.perspective(this as unknown as Mat4Func.Mat4Tuple, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({
        left,
        right,
        bottom,
        top,
        near,
        far,
    }: {
        left: number;
        right: number;
        bottom: number;
        top: number;
        near: number;
        far: number;
    }): this {
        Mat4Func.ortho(this as unknown as Mat4Func.Mat4Tuple, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q: Quat): this {
        Mat4Func.fromQuat(this as unknown as Mat4Func.Mat4Tuple, q as unknown as QuatTuple);
        return this;
    }

    setPosition(v: Vec3): this {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    inverse(m: Mat4 = this): this {
        Mat4Func.invert(this as unknown as Mat4Func.Mat4Tuple, m as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    compose(q: Quat, pos: Vec3, scale: Vec3): this {
        Mat4Func.fromRotationTranslationScale(
            this as unknown as Mat4Func.Mat4Tuple,
            q as unknown as QuatTuple,
            pos as unknown as Vec3Tuple,
            scale as unknown as Vec3Tuple
        );
        return this;
    }

    getRotation(q: Quat): this {
        Mat4Func.getRotation(q as unknown as QuatTuple, this as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    getTranslation(pos: Vec3): this {
        Mat4Func.getTranslation(pos as unknown as Vec3Tuple, this as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    getScaling(scale: Vec3): this {
        Mat4Func.getScaling(scale as unknown as Vec3Tuple, this as unknown as Mat4Func.Mat4Tuple);
        return this;
    }

    getMaxScaleOnAxis(): number {
        return Mat4Func.getMaxScaleOnAxis(this as unknown as Mat4Func.Mat4Tuple);
    }

    lookAt(eye: Vec3, target: Vec3, up: Vec3): this {
        Mat4Func.targetTo(
            this as unknown as Mat4Func.Mat4Tuple,
            eye as unknown as Vec3Tuple,
            target as unknown as Vec3Tuple,
            up as unknown as Vec3Tuple
        );
        return this;
    }

    determinant(): number {
        return Mat4Func.determinant(this as unknown as Mat4Func.Mat4Tuple);
    }

    fromArray(a: number[], o: number = 0): this {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
    }

    toArray(a: number[] = [], o: number = 0): number[] {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
    }
}
