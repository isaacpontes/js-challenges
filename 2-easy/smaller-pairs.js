function smallerPairs([x, y]) {
  const pairs = []

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      pairs.push([i, j])
    }
  }

  return pairs
}

console.log(smallerPairs([5, 5]))
console.log(smallerPairs([2, 7]))
console.log(smallerPairs([-3, -3]))
console.log(smallerPairs([7, 6]))