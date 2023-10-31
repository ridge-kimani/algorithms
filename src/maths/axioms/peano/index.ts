export default class Peano {
  nil: number = 0
  values: {
    first: number
    second: number
  }

  constructor(values: any) {
    this.values = { ...values }
  }

  zero(value: number) {
    return value === this.nil
  }
  successor(prefix: 'first' | 'second') {
    const value = Number(this.values[prefix])
    return (this.values[prefix] = value + 1)
  }

  predecessor(value: number) {
    if (value > 0) {
      return value - 1
    }
    return "There's no predecessor for 0"
  }

  addition() {
    if (this.zero(this.values.first)) {
      return this.values.second
    }

    if (this.zero(this.values.second)) {
      return this.values.first
    }

    return this.values.first + this.values.second
  }

  subtraction() {
    if (this.values.first < this.values.second) {
      return new Error(
        `${this.values.first} is less than ${this.values.second}`
      )
    }

    if (this.zero(this.values.second)) {
      return this.values.first
    }

    return this.values.first - this.values.second
  }

  multiplication() {
    if (this.zero(this.values.first) || this.zero(this.values.second)) {
      return this.nil
    }
    return this.values.first * this.values.second - 1 + this.values.first
  }
}
