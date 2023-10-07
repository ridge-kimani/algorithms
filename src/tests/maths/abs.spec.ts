import abs from '../../maths/abs'

describe('ABS', () => {
  it('throws an error for invalid types', () => {
    expect(() => abs('test01')).toThrow()
  })

  it('should typecast strings to integers and return its abs', () => {
    expect(abs('-20212223')).toBe(20212223)
    expect(abs('-20212223.252627')).toBe(20212223.252627)
  })

  it('should return an absolute value of a negative number', () => {
    expect(abs(-34)).toBe(34)
  })

  it('should return an absolute value of a positive number', () => {
    expect(abs(50)).toBe(50)
  })

  it('should return an absolute value of a zero number', () => {
    expect(abs(0)).toBe(0)
  })

  it('should return an absolute value of any floating number', () => {
    expect(abs(-20.212223)).toBe(20.212223)
  })

  it('should return falsy or truthy values for booleans', () => {
    expect(abs(true)).toBe(1)
    expect(abs(false)).toBe(0)
  })
})
