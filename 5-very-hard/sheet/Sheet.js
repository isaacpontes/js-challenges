const Cell = require('./Cell')
const fs = require('fs')

class Sheet {
  constructor(name, cells = []) {
    this.name = name
    this.cells = cells
  }

  readCell(label) {
    const cell = this.cells.find(cell => cell.label === label)
    return cell?.value ?? ''
  }

  updateCell(value, label, formula = null) {
    const cellIndex = this.cells.findIndex(cell => cell.label === label)
    const cellToUpdate = this.cells[cellIndex]

    cellToUpdate.update(value, formula)

    if (formula) {
      const params = cellToUpdate.getParamsFromFormula()

      this.cells.forEach(cell => {
        cell.removeDependent(label)

        if (params.includes(cell.label)) {
          cell.addDependent(cellToUpdate)
        }
      })

      cellToUpdate.calculateFormula()
    }
  }

  saveCell(value, label, formula = null) {
    const cellAlreadyExists = !!this.cells.find(cell => cell.label === label)

    if (cellAlreadyExists) {
      return this.updateCell(value, label, formula)
    }

    const newCell = new Cell(this, label, value, formula)
    this.cells.push(newCell)

    if (formula) {
      const params = newCell.getParamsFromFormula()

      this.cells.forEach(cell => {
        cell.removeDependent(label)

        if (params.includes(cell.label)) {
          cell.addDependent(newCell)
        }
      })

      newCell.calculateFormula()
    }
  }

  writeCell(value, label) {
    const operationsRegex = Object.keys(Cell.operations).join('\\(|^')
    const isFormulaRegex = new RegExp(`^${operationsRegex}\\(`)
    const isFormula = typeof value === 'string' && !!value.match(isFormulaRegex)

    if (isFormula) {
      this.saveCell('', label, value)
    } else {
      this.saveCell(value, label)
    }
  }

  static saveFile(sheet, name) {
    const nonCircularSheet = new Sheet(sheet.name)

    sheet.cells.forEach(cell => {
      nonCircularSheet.saveCell(cell.value, cell.label, cell.formula)
    })

    nonCircularSheet.cells.forEach(cell => {
      cell.sheet = 'self'
      cell.dependents = []
    })

    const stringifiedData = JSON.stringify(nonCircularSheet)

    fs.writeFile(`${name}.sheet`, stringifiedData, 'utf8', (err) => {
      console.log(err)
    })
  }

  static openFile(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {

          console.log(err)
          reject(err)

        } else {

          const loadedSheet = JSON.parse(data)

          const newSheet = new Sheet(loadedSheet.name)

          loadedSheet.cells.forEach(cell => {
            newSheet.saveCell(cell.value, cell.label, cell.formula)
          })

          resolve(newSheet)
        }
      })
    })
  }
}

module.exports = Sheet