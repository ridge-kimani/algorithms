'use strict'
/**
 * Abs returns the absolute value of a number.
 * @param {number}  value - Input number
 * @return {number} - Absolute number
 * @return {onerror} - Error Message
 * @description https://en.wikipedia.org/wiki/Absolute_value
 *
 * ### Example
 * ```js
 * import { index } from 'algorithms-ts'
 * console.log(index(10))
 *  // => 10
 * console.log(index(-10))
 * // => 10
 * console.log(index(0))
 * // => 0
 * ```
 */
Object.defineProperty(exports, '__esModule', { value: true })
const abs = (value) => {
  const result = Math.abs(value)
  if (Number.isNaN(result) || typeof value === 'object')
    throw new TypeError('Parse a number, value is NaN.')
  return result
}
exports.default = abs
