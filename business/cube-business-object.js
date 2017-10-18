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
  this.matrix[x][y][z] = v
}

Cube.prototype.query = (x1, y1, z1, x2, y2, z2) => {
  var sum = 0
  this.matrix.slice(x1, x2 + 1)
    .forEach((square) => {
      square.slice(y1, y2 + 1)
        .forEach((row) => {
          row.slice(z1, z2 + 1)
            .forEach((cell) => {
              sum += cell
            })
        })
    })
  return sum
}
