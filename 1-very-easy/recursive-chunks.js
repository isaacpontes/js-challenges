function recursiveChunks(num) {
  if (num === 0) return ""
  return num === 1 ? "chunk" : "chunk-" + recursiveChunks(num - 1) 
}

console.log(recursiveChunks(5))
console.log(recursiveChunks(1))
console.log(recursiveChunks(0))
console.log(recursiveChunks(2))