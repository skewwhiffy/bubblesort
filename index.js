const bubblesort = function(array) {
  if (array.length < 2) {
    return array
  }
  let elementsHaveBeenSwapped = false
  const pass = array => {
    for (let i = 0; i < array.length - 1; i++) {
      const firstElement = array[i]
      const secondElement = array[i + 1]
      if (firstElement > secondElement) {
        array[i + 1] = firstElement
        array[i] = secondElement
        return true
      }
    }
    return false
  }
  while(pass(array)) { }
  return array
}

module.exports = {
  bubblesort
}
