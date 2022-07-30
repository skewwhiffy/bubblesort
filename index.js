const bubblesort = function(array) {
  if (array.length < 2) {
    return array
  }
  if (array[0] > array[1]) {
    return [array[1], array[0]]
  }
  return array
}

module.exports = {
  bubblesort
}
