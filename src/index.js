
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];

  if (matrix) {
    matrix.forEach((array, index) => {
      if (index % 2 !== 0) {
        array.reverse();
      }

      result.push(...array);
    })
  }

  return result;
}
