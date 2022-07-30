const { bubblesort } = require('./index')

describe('dummy test', () => {
  test('bubblesort is a function', () => {
    expect(typeof bubblesort).toBe('function')
  })

  test('sort works with sorted array', () => {
    const source = [1, 2, 3]

    const result = bubblesort(source)

    expect(result).toBe(source)
  })
})
