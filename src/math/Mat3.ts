import * as Mat3Func from './functions/Mat3Func.js';
import { Mat4Tuple } from './functions/Mat4Func.js';
import { QuatTuple } from './functions/QuatFunc.js';
import { Vec2Tuple } from './functions/Vec2Func.js';
import { Vec2 } from './Vec2.js';
import { Vec3 } from './Vec3.js';
import { Quat } from './Quat.js';
import { Mat4 } from './Mat4.js';

export class Mat3 extends Array<number> {
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    set(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): this;
    set(m: Mat3): this;
    set(m00: number | Mat3, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): this {
        if ((m00 as Mat3).length) return this.copy(m00 as Mat3);
        Mat3Func.set(this as unknown as Mat3Func.Mat3Tuple, m00 as number, m01!, m02!, m10!, m11!, m12!, m20!, m21!, m22!);
        return this;
    }

    translate(v: Vec2, m: Mat3 = this) {
        Mat3Func.translate(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat3Func.Mat3Tuple, v as unknown as Vec2Tuple);
        return this;
    }

    rotate(v: number, m: Mat3 = this): this {
        Mat3Func.rotate(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat3Func.Mat3Tuple, v);
        return this;
    }

    scale(v: Vec2, m: Mat3 = this): this {
        Mat3Func.scale(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat3Func.Mat3Tuple, v as unknown as Vec2Tuple);
        return this;
    }

    multiply(ma: Mat3, mb?: Mat3): this {
        if (mb) {
            Mat3Func.multiply(this as unknown as Mat3Func.Mat3Tuple, ma as unknown as Mat3Func.Mat3Tuple, mb as unknown as Mat3Func.Mat3Tuple);
        } else {
            Mat3Func.multiply(this as unknown as Mat3Func.Mat3Tuple, this as unknown as Mat3Func.Mat3Tuple, ma as unknown as Mat3Func.Mat3Tuple);
        }
        return this;
    }

    identity(): this {
        Mat3Func.identity(this as unknown as Mat3Func.Mat3Tuple);
        return this;
    }

    copy(m: Mat3): this {
        Mat3Func.copy(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat3Func.Mat3Tuple);
        return this;
    }

    fromMatrix4(m: Mat4): this {
        Mat3Func.fromMat4(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat4Tuple);
        return this;
    }

    fromQuaternion(q: Quat): this {
        Mat3Func.fromQuat(this as unknown as Mat3Func.Mat3Tuple, q as unknown as QuatTuple);
        return this;
    }

    fromBasis(vec3a: Vec3, vec3b: Vec3, vec3c: Vec3): this {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }

    inverse(m: Mat3 = this): this {
        Mat3Func.invert(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat3Func.Mat3Tuple);
        return this;
    }

    getNormalMatrix(m: Mat4): this {
        Mat3Func.normalFromMat4(this as unknown as Mat3Func.Mat3Tuple, m as unknown as Mat4Tuple);
        return this;
    }
}
