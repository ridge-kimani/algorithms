/**
 * Abs returns the absolute value of a number.
 * @param {number}  value - Input integer
 * @return {number} - Absolute number
 * @return {onerror} - Error Message
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

export const abs = (value: number): number => {
  const result = Math.abs(value)

  if (Number.isNaN(result))
    throw new TypeError('Argument is NaN - Not a Number.')

  return result
}
