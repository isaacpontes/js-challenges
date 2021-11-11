class Point {
  constructor([x, y, z]) {
    this.coordinates = [x, y, z]
  }

  static get sectors() {
    return {
      '+++': 'Alfa',
      '++-': 'Beta',
      '+-+': 'Gama',
      '+--': 'Delta',
      '-++': 'Épsilon',
      '-+-': 'Zeta',
      '--+': 'Sigma',
      '---': 'Ômega',
    }
  }

  getSector() {
    const signs = this.coordinates.map(coord => coord >= 0 ? '+' : '-').join('')
    return Point.sectors[signs]
  }

  getDistance() {
    return Math.sqrt(this.coordinates.reduce((accum, current) => accum + current ** 2, 0))
  }
}

const point1 = new Point([37, 42, 15])
const point2 = new Point([144, 49, 0])
const point3 = new Point([-37, 0, 0])
const point4 = new Point([-19, -80, -32])

console.log(point1.getSector(), `\nDistance: ${point1.getDistance()} units`)
console.log(point2.getSector(), `\nDistance: ${point2.getDistance()} units`)
console.log(point3.getSector(), `\nDistance: ${point3.getDistance()} units`)
console.log(point4.getSector(), `\nDistance: ${point4.getDistance()} units`)
