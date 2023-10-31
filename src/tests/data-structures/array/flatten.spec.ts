import { flatten } from '../../../data-structures/array/flatten'

describe('Flatten', () => {
  it('should flatten a list', () => {
    const values = [1, 2, 4, [5, 6, 6]]
    expect(flatten(values)).toEqual([1, 2, 4, 5, 6, 6])
  })

  it('flattens empty array', () => {
    const values: never[]= []
    expect(flatten(values)).toEqual([])
  })
})
