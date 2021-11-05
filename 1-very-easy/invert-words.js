function invertWord(word) {
  console.log(word);
  return word.toLowerCase().split('').reverse().join('')
}

function invertWords(str) {
  console.log(str.split(' '))
  return str.split(' ').map(invertWord).join(' ')
}

console.log(invertWords('Lorem ipsum dolore sec avanti'))
console.log(invertWords('This is an apple'))
console.log(invertWords('May the force be with you'))
console.log(invertWords("It s over nine thousand"))