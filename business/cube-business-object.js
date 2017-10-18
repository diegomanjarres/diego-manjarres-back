function Cube(n, m) {
  this.matrix = new Array()
  for (var i = 0; i < N; i++) {
    matrix[i] = new Array()
    for (var j = 0; j < N; j++) {
      matrix[i][j] = new Array()
    }
  }
}

Cube.prototype.update = (x, y, z, v) => {
  this.matrix[x - 1][y - 1][z - 1] = v
}

Cube.prototype.query = (x1, y1, z1, x2, y2, z2) => {
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
