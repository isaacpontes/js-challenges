function factorial(num) {
  const bigInt = BigInt(num)
  if (bigInt === 0n)return 1n
  else return bigInt * factorial(bigInt - 1n)
}

console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(32))
console.log(factorial(9n))