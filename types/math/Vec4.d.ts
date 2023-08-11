import { AttributeData } from '../core/Geometry';

export declare type Vec4Tuple = [x: number, y: number, z: number, w: number];

export declare class Vec4 extends Array<number> {
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set w(v: number);
    set(x: number | Vec4, y?: number, z?: number, w?: number): this;
    copy(v: Vec4): this;
    normalize(): this;
    multiply(v: number): this;
    dot(v: Vec4): number;
    fromArray(a: number[] | AttributeData, o?: number): this;
    toArray<T extends number[] | AttributeData>(a?: T, o?: number): T;
}
