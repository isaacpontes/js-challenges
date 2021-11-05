// function squareDigits(num){
//   const str = num.toString()
//   let result = ""

//   for (let i = 0; i < str.length; i++) {
//     result += Math.pow(+str[i], 2).toString()
//   }

//   return Number(result)
// }

function squareDigits(num) {
  const digitsArray = num.toString().split('')
  return Number.parseInt(digitsArray.map(number => number ** 2).join(''))
}

console.log(squareDigits(94572))
console.log(squareDigits(24))
console.log(squareDigits(3206))
console.log(squareDigits(745821698))