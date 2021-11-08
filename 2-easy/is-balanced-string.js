function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true
}

function isBalancedString(str) {
  const charCount = {}

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1
  }

  return Object.values(charCount).every(compareCounts)
}

console.log(isBalancedString('This is Thee'))
console.log(isBalancedString('ssd'))
console.log(isBalancedString('Lorem ipsum'))
console.log(isBalancedString('QQwweerrttyy'))