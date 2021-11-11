let fibonacciCache = {}

function fibonacci(n) {
  if (typeof fibonacciCache[n] === 'bigint') {
    return fibonacciCache[n]
  }

  let result

  if (n === 1n || n === 2n)
    result = 1n
  else if (n > 2n)
    result = fibonacci(n-1n) + fibonacci(n-2n)
  
  fibonacciCache[n] = result
  return result
}

for (let i = 2n; i <= 3000n; i++) {
  console.log(i + " : "  + fibonacci(i))
}

console.log(fibonacci(10000n))
