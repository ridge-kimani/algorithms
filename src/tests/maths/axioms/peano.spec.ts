import Peano from '../../../../src/maths/axioms/peano'

describe('Peano', () => {
  let peano: any

  beforeEach(() => {
    peano = new Peano({ first: 1, second: 2 })
  })

  it('should show 0 exists as a natural number', () => {
    expect(peano.zero(0)).toBeTruthy()
  })

  it('should show every natural number exists with a successor', () => {
    expect(peano.successor('first')).toBe(2)
  })

  it('should show every natural number except 0 a predecessor', () => {
    expect(peano.predecessor(peano.values.first)).toBe(0)
  })

  it('should throw an error if a number has no predecessor', () => {
    expect(peano.predecessor(0)).toBe("There's no predecessor for 0")
  })

  it('should show subtraction of axioms', () => {
    peano = new Peano({ first: 2, second: 1 })
    expect(peano.subtraction()).toBe(1)
  })

  it('should addition axioms', () => {
    expect(peano.addition()).toBe(3)
  })

  it('should prove multiple axioms', () => {
    expect(peano.multiplication()).toBe(2)
  })
})
