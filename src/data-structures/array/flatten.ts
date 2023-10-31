export const flatten = (array: any[]) => {
  let result: any[] = []

  while (array.length) {
    const current = array.pop()
    if (Array.isArray(current)) {
      array.push(...current)
    } else {
      result.unshift(current as any)
    }
  }
  return result
}
