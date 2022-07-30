const { bubblesort } = require('./index')

describe('dummy test', () => {
  test('bubblesort is a function', () => {
    expect(typeof bubblesort).toBe('function')
  })

  test('sort works with sorted array', () => {
    const source = [1, 2, 3]

    const result = bubblesort(source)

    expect(result).toStrictEqual(source)
  })

  test('sort works with unsorted array of size 2', () => {
    const source = [2, 1]

    const result = bubblesort(source)

    expect(result).toStrictEqual([1, 2])
  })
})
