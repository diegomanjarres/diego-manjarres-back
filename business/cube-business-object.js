/**
 * Represents a numbers cube.
 * @constructor
 * @param {number} n - the size n*m*n of the cube.
 */
function Cube(n) {
  this.matrix = new Array()
  for (var i = 0; i < n; i++) {
    this.matrix[i] = new Array()
    for (var j = 0; j < n; j++) {
      this.matrix[i][j] = new Array()
    }
  }
}

/**
 *@method update - updates a cell in the cube.
 * @param {number} x - the the x cordinate to update in the cube.
 * @param {number} y - the the y cordinate to update in the cube.
 * @param {number} z - the the z cordinate to update in the cube.
 * @param {number} v - the value to assign to the cell to update.
 */
Cube.prototype.update = function(x, y, z, v) {
  this.matrix[x - 1][y - 1][z - 1] = v
}

/**
 *@method query - queries the sum of all cells in a given range.
 * @param {number} x1 - the the starting x cordinate too query in the cube.
 * @param {number} x2 - the the ending x cordinate too query in the cube.
 * @param {number} y1 - the the starting y cordinate too query in the cube.
 * @param {number} y2 - the the ending y cordinate too query in the cube.
 * @param {number} z1 - the the starting z cordinate too query in the cube.
 * @param {number} z2 - the the ending z cordinate too query in the cube.
 * @returns {number} the sum of all cells in the given range.
 */
Cube.prototype.query = function(x1, y1, z1, x2, y2, z2) {
  var sum = 0
  this.matrix.slice(x1 - 1, x2)
    .forEach((square) => {
      square.slice(y1 - 1, y2)
        .forEach((row) => {
          row.slice(z1 - 1, z2)
            .forEach((cell) => {
              sum += cell
            })
        })
    })
  return sum
}
module.exports = Cube
