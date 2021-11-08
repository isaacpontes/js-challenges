function calculateDigit(arr) {
  const step1 = arr.reduce((accum, current, index) => index === 0 || index % 2 === 0 ? accum + current : accum, 0)
  const step2 = step1 * 3
  const step3 = step2 + arr.reduce((accum, current, index) => index % 2 !== 0 ? accum + current : accum, 0)

  return step3 % 10 !== 0 ? 10 - step3 % 10 : 0
}

function createRandomValidCode() {
  const code = []

  for (let i = 0; i < 11; i++) {
    code[i] = Math.floor(Math.random() * 9)
  }

  const digit = calculateDigit(code)

  code[11] = digit

  return Number.parseInt(code.join(''))
}

function checkVerificationDigit(num) {
  const numbersArray = num.toString().split('').map(Number)
  const numbersArrayWithoutDigit = numbersArray.slice(0, -1)

  const expectedDigit = calculateDigit(numbersArrayWithoutDigit)

  console.log({ expected: expectedDigit, got: numbersArray[11]})

  return expectedDigit === numbersArray[11]
}

const code1 = createRandomValidCode()
const code2 = createRandomValidCode()

console.log(checkVerificationDigit(code1))
console.log(checkVerificationDigit(code2))
console.log(checkVerificationDigit(code1 + 1))
console.log(checkVerificationDigit(code2 + 1))