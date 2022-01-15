const Calculator = require('./Calculator');

class Cell {
  constructor(sheet, label, value = '', formula = null, dependents = []) {
    this.sheet = sheet
    this.label = label
    this.dependents = dependents
    this.value = value
    this.formula = formula
  }

  static operations = {
    'SUM': Calculator.sum,
    'SUB': Calculator.subtract,
    'MUL': Calculator.multiply,
    'DIV': Calculator.divide,
    'MIN': Calculator.minimum,
    'MAX': Calculator.maximum,
    'AVG': Calculator.average
  }

  getParamsFromFormula() {
    const extractedParamsString = this.formula.match(/\(([^)]+)\)/)[1]
    const paramsWithGroups = extractedParamsString.split(';')

    const allParams = []

    paramsWithGroups.forEach(param => {
      if (param.includes(':')) {
        const [first, last] = param.split(':')

        const firstLetter = first.match(/[A-Z]/)[0]
        const firstNumber = Number(first.match(/[0-9]/g).join(''))

        const lastLetter = last.match(/[A-Z]/)[0]
        const lastNumber = Number(last.match(/[0-9]/g).join(''))
        
        const cells = []

        for (let i = firstLetter.charCodeAt(0); i <= lastLetter.charCodeAt(0); i++) {
          for (let j = firstNumber; j <= lastNumber; j++) {
            cells.push(String.fromCharCode(i) + j.toString())
          }
        }

        allParams.push(...cells)
      } else {
        allParams.push(param)
      }
    })

    return allParams
  }

  calculateFormula() {
    const operation = this.formula.slice(0, 3)
    const params = this.getParamsFromFormula()

    const values = this.sheet.cells.filter(cell => params.includes(cell.label)).map(cell => cell.value)

    const operationHandler = Cell.operations[operation]
    const result = operationHandler(...values)

    if (this.value === result) {
      return result
    }

    this.value = result

    console.log(`Calculated Formula: set value ${this.value} to cell ${this.label}`)

    this.notifyDependents()

    return result
  }

  addDependent(cell) {
    this.dependents.push(cell)
  }

  removeDependent(label) {
    const updatedDependents = this.dependents.filter(dependent => dependent.label !== label)
    this.dependents = updatedDependents
  }

  notifyDependents() {
    this.dependents.forEach(dependent => {
      console.log(`Need to update ${dependent.label}`)
      dependent.calculateFormula()
    })
  }

  update(value, formula = null) {
    this.value = value
    this.formula = formula

    console.log(`Updated value on ${this.label}. New value: ${this.value}. Formula: ${this.formula}`)

    this.notifyDependents()
  }
}

module.exports = Cell