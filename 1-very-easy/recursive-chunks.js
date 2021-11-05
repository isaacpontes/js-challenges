function recursiveChunks(num) {
  if (num === 0) return ""
  if (num === 1) return "chunk"
  else return "chunk-" + recursiveChunks(num - 1) 
}

console.log(recursiveChunks(5))
console.log(recursiveChunks(1))
console.log(recursiveChunks(0))
console.log(recursiveChunks(2))