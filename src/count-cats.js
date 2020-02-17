module.exports = function countCats(matrix) {
  // return matrix.flat().filter(cat => cat === "^^").length // ???
  return matrix.reduce((sum1, arr) => {
    return sum1 + arr.reduce((sum2, el) => el === "^^" ? sum2 + 1 : sum2, 0)
  }, 0)
};
