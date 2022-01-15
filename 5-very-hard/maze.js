class Position {
  constructor(row, col, value) {
    this.label = `(${row}, ${col})`
    this.row = row
    this.col = col
    this.value = value
    this.neighbors = []
  }

  connect(position) {
    if (!this.isNeighbor(position)) {
      this.neighbors.push(position)
      position.neighbors.push(this)
    }
  }

  getNeighbors() {
    return this.neighbors
  }

  isNeighbor(position) {
    return !!this.neighbors.find(neighbor => neighbor.row === position.row && neighbor.col === position.col)
  }
}

class Maze {
  constructor(grid = [[]]) {
    this.grid = grid
    this.rows = grid.length
    this.cols = grid.reduce((highestLength, row) => highestLength < row.length ? row.length : highestLength, 0)

    this.positions = []
    this.generateGraph()

    this.start = this.positions.find(pos => pos.value === 'S')
    this.end = this.positions.find(pos => pos.value === 'E')
  }

  generateGraph() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        this.positions.push(new Position(i, j, this.grid[i][j]))
      }
    }

    this.connectNeighbors()
  }

  connectNeighbors() {
    const rowDirections = [-1, 1, 0, 0]
    const colDirections = [0, 0, 1, -1]

    this.positions.forEach(position => {
      for (let i = 0; i < 4; i++) {

        const rowIndexToMove = position.row + rowDirections[i]
        const colIndexToMove = position.col + colDirections[i]

        const isOutOfBounds = rowIndexToMove < 0 || colIndexToMove < 0 || rowIndexToMove >= this.rows || colIndexToMove >= this.cols

        if (!isOutOfBounds) {
          const neighbor = this.positions.find(pos => pos.row === rowIndexToMove && pos.col === colIndexToMove)
          position.connect(neighbor)
        }
      }
    })
  }

  breadthFirstSearch() {
    const queue = [this.start]
    const walkedPositions = {}

    walkedPositions[this.start.label] = null

    while (queue.length > 0) {
      const position = queue.shift()

      if (position.value === 'E') {
        console.log('Found the exit!')
        return this.reconstructPath(walkedPositions, position)
      }

      position.getNeighbors().forEach(neighbor => {
        if (!walkedPositions.hasOwnProperty(neighbor.label) && neighbor.value !== '#') {
          walkedPositions[neighbor.label] = position
          queue.push(neighbor)
        }
      })
    }

    return 'No way out!'
  }

  reconstructPath(walkedPositions, endPosition) {
    let currentPosition = endPosition
    const shortestPath = []

    while (currentPosition !== null) {
      shortestPath.unshift(currentPosition.label)
      currentPosition = walkedPositions[currentPosition.label]
    }

    return shortestPath
  }
}

const labyrinth = [
  ['#', ' ', ' ', ' ', ' ', '#', ' '],
  [' ', 'S', ' ', ' ', '#', ' ', ' '],
  [' ', ' ', '#', ' ', ' ', '#', ' '],
  [' ', '#', ' ', ' ', ' ', '#', 'E'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['#', '#', ' ', ' ', '#', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

const labyrinth2 = [
  ['E', ' ', ' ', ' '],
  ['#', ' ', '#', ' '],
  [' ', ' ', ' ', ' '],
  [' ', '#', '#', ' '],
  [' ', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  [' ', ' ', '#', ' '],
  [' ', ' ', ' ', 'S'],
]

const labyrinth3 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'S', ' ', ' '],
  [' ', '#', '#', ' ', ' '],
  [' ', '#', 'E', '#', ' '],
  [' ', '#', ' ', '#', ' '],
  [' ', ' ', ' ', '#', ' '],
  [' ', ' ', ' ', ' ', ' '],
]

const labyrinth4 = [
  [' ', '#', '#', 'S', '#', '#', '#'],
  ['#', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', '#', '#', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', '#', ' ', '#'],
  ['#', ' ', ' ', ' ', '#', ' ', '#'],
  ['#', '#', ' ', '#', ' ', ' ', '#'],
  ['#', '#', ' ', ' ', ' ', '#', '#'],
  ['#', ' ', ' ', ' ', '#', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', '#', '#'],
  ['#', ' ', ' ', '#', '#', '#', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', '#'],
  ['#', '#', ' ', ' ', '#', ' ', '#'],
  ['#', '#', '#', '#', '#', 'E', '#'],
]

const maze1 = new Maze(labyrinth)
console.log(maze1.breadthFirstSearch())

const maze2 = new Maze(labyrinth2)
console.log(maze2.breadthFirstSearch())

const maze3 = new Maze(labyrinth3)
console.log(maze3.breadthFirstSearch())

const maze4 = new Maze(labyrinth4)
console.log(maze4.breadthFirstSearch())