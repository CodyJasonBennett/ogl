import { Mat3Tuple } from './Mat3Func.js';
import { Mat4Tuple } from './Mat4Func.js';

const EPSILON = 0.000001;

export type Vec2Tuple = [x: number, y: number];
export type Mat2Tuple = [m00: number, m01: number, m10: number, m11: number];
export type Mat2DTuple = number[];

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
export function copy(out: Vec2Tuple, a: Vec2Tuple): Vec2Tuple {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
export function set(out: Vec2Tuple, x: number, y: number): Vec2Tuple {
    out[0] = x;
    out[1] = y;
    return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
export function add(out: Vec2Tuple, a: Vec2Tuple, b: Vec2Tuple): Vec2Tuple {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
export function subtract(out: Vec2Tuple, a: Vec2Tuple, b: Vec2Tuple): Vec2Tuple {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
export function multiply(out: Vec2Tuple, a: Vec2Tuple, b: Vec2Tuple): Vec2Tuple {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
export function divide(out: Vec2Tuple, a: Vec2Tuple, b: Vec2Tuple): Vec2Tuple {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
export function scale(out: Vec2Tuple, a: Vec2Tuple, b: number): Vec2Tuple {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: Vec2Tuple, b: Vec2Tuple): number {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: Vec2Tuple, b: Vec2Tuple): number {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: Vec2Tuple): number {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: Vec2Tuple): number {
    var x = a[0],
        y = a[1];
    return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
export function negate(out: Vec2Tuple, a: Vec2Tuple): Vec2Tuple {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
export function inverse(out: Vec2Tuple, a: Vec2Tuple): Vec2Tuple {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
export function normalize(out: Vec2Tuple, a: Vec2Tuple): Vec2Tuple {
    var x = a[0],
        y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: Vec2Tuple, b: Vec2Tuple): number {
    return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */
export function cross(a: Vec2Tuple, b: Vec2Tuple): number {
    return a[0] * b[1] - a[1] * b[0];
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
export function lerp(out: Vec2Tuple, a: Vec2Tuple, b: Vec2Tuple, t: number): Vec2Tuple {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
export function transformMat2(out: Vec2Tuple, a: Vec2Tuple, m: Mat2Tuple): Vec2Tuple {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
export function transformMat2d(out: Vec2Tuple, a: Vec2Tuple, m: Mat2DTuple): Vec2Tuple {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
export function transformMat3(out: Vec2Tuple, a: Vec2Tuple, m: Mat3Tuple): Vec2Tuple {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
export function transformMat4(out: Vec2Tuple, a: Vec2Tuple, m: Mat4Tuple): Vec2Tuple {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: Vec2Tuple, b: Vec2Tuple): boolean {
    return a[0] === b[0] && a[1] === b[1];
}