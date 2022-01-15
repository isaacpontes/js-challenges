function multiplicativePersistance(num) {
  if (num < 10) {
    return 0
  }

  const digits = num.toString().split('')
  const product = digits.reduce((accum, current) => accum * current, 1)

  return 1 + multiplicativePersistance(product)
}

console.log(multiplicativePersistance(539))  // 3
console.log(multiplicativePersistance(999))  // 4
console.log(multiplicativePersistance(7))    // 0
console.log(multiplicativePersistance(7169)) // 5