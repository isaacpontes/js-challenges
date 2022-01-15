function fibonacci(num) {
  if (num === 0) return 0
  if (num === 1) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
}

let fibonacciCache = {}

function fibonacci(num) {
  const big = BigInt(num)
  if (typeof fibonacciCache[big] === 'bigint') {
    return fibonacciCache[big]
  }

  let result = 0n

  if (big === 1n)
    result = 1n
  else if (big >= 2n)
    result = fibonacci(big - 1n) + fibonacci(big - 2n)
  
  fibonacciCache[big] = result
  return result
}

// for (let i = 2n; i <= 10n; i++) {
//   console.log(i + " : "  + fibonacci(i))
// }

console.log(fibonacci(0))
console.log(fibonacci(2n))
console.log(fibonacci(7))
console.log(fibonacci(144n))
