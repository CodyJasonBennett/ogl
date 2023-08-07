import * as EulerFunc from './functions/EulerFunc.js';
import { Mat4Tuple } from './functions/Mat4Func.js';
import { Mat4 } from './Mat4.js';
import { Quat } from './Quat.js';

const tmpMat4 = new Mat4();

export class Euler extends Array<number> {
    order: EulerFunc.EulerOrder;
    onChange: () => void;

    constructor(x: number = 0, y: number = x, z: number = x, order: EulerFunc.EulerOrder = 'YXZ') {
        super(x, y, z);
        this.order = order;
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

    set(x: number | Euler, y: number = x as number, z: number = x as number): this {
        if ((x as number[]).length) return this.copy(x as Euler);
        this[0] = x as number;
        this[1] = y;
        this[2] = z;
        this.onChange();
        return this;
    }

    copy(v: Euler): this {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        this.onChange();
        return this;
    }

    reorder(order: EulerFunc.EulerOrder): this {
        this.order = order;
        this.onChange();
        return this;
    }

    fromRotationMatrix(m: Mat4, order: EulerFunc.EulerOrder = this.order) {
        EulerFunc.fromRotationMatrix(this as unknown as EulerFunc.EulerTuple, m as unknown as Mat4Tuple, order);
        this.onChange();
        return this;
    }

    fromQuaternion(q: Quat, order: EulerFunc.EulerOrder = this.order): this {
        tmpMat4.fromQuaternion(q);
        return this.fromRotationMatrix(tmpMat4, order);
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
}
