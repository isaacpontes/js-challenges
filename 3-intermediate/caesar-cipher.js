function caesarCipher(str, key) {
  const charsArray = str.split('')
  const normalizedKey = key % 26

  const codesArray = charsArray.map(char => {
    const currentCode = char.charCodeAt(0)

    if (currentCode - normalizedKey < 65 && currentCode >= 65 && currentCode <= 90) {
      return currentCode + 26
    }

    if (currentCode - normalizedKey < 97 && currentCode >= 97 && currentCode <= 122) {
      return currentCode + 26
    }

    return currentCode
  })

  return codesArray.map(code => String.fromCharCode(code - normalizedKey)).join('')
}

console.log(caesarCipher('Vguvg', 2))
console.log(caesarCipher('BCDYZAbcdyza', 27))
console.log(caesarCipher('Qaiik', 60))
console.log(caesarCipher('Amozmlw', 8))