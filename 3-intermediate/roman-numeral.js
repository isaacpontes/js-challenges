function romanNumeral(str) {
  const numeralsArray = str.split('')

  const decimalsArray = numeralsArray.map(numeral => {
    switch (numeral) {
      case 'I':
        return 1
      case 'V':
        return 5
      case 'X':
        return 10
      case 'L':
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default:
        return 0
    }
  })

  return decimalsArray.reduceRight((accum, current, index, array) => {
    if (current < array[index + 1]) {
      return accum - current
    } else {
      return accum + current
    }
  }, 0)
}

console.log('I:', romanNumeral('I'))
console.log('II:', romanNumeral('II'))
console.log('III:', romanNumeral('III'))
console.log('IV:', romanNumeral('IV'))
console.log('V:', romanNumeral('V'))
console.log('VI:', romanNumeral('VI'))
console.log('VII:', romanNumeral('VII'))
console.log('VIII:', romanNumeral('VIII'))
console.log('IX:', romanNumeral('IX'))
console.log('X:', romanNumeral('X'))
console.log('XXIII:', romanNumeral('XXIII'))
console.log('XL:', romanNumeral('XL'))
console.log('XLVII:', romanNumeral('XLVII'))
console.log('LC:', romanNumeral('LC'))
console.log('CDXXXVIII:', romanNumeral('CDXXXVIII'))
console.log('CMIX:', romanNumeral('CMIX'))
console.log('MMMCMXCIX:', romanNumeral('MMMCMXCIX'))