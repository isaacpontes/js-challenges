function highestLetter(str) {
  const sortedLetters = str.toLowerCase().split('').sort()
  return sortedLetters[sortedLetters.length - 1]
}

console.log(highestLetter('Lorem ipsum dolore sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter("It s over nine thousand"))