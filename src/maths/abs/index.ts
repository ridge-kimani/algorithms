/**
 * Abs returns the absolute value of a number.
 * @param {number}  value - Input number
 * @return {number|onerror} - Absolute number | error message
 * @description https://en.wikipedia.org/wiki/Absolute_value
 *
 * ### Example
 * ```js
 * import { abs } from 'algorithms-ts'
 * console.log(abs(10))
 *  // => 10
 * console.log(abs(-10))
 * // => 10
 * console.log(abs(0))
 * // => 0
 * ```
 */

const abs = (value: number | string | boolean): number => {
  const result = Math.abs(+value)

  if (Number.isNaN(result) || typeof value === 'object')
    throw new TypeError('Parse a number, value is NaN.')

  return result
}

export default abs
