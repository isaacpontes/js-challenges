// function invertWords(str) {
//   const wordsArray = str.split(' ')
//   const invertedWords = wordsArray.map(word => {
//     const lowerCaseWord = word.toLowerCase()
//     return lowerCaseWord.split('').reverse().join('')
//   })
  
//   return invertedWords.join(' ')
// }

function invertWord(word) {
  return word.toLowerCase().split('').reverse().join('')
}

function invertWords(str) {
  return str.split(' ').map(invertWord).join(' ')
}

console.log(invertWords('Lorem ipsum dolore sec avanti'))
console.log(invertWords('This is an apple'))
console.log(invertWords('May the force be with you'))
console.log(invertWords("It s over nine thousand"))