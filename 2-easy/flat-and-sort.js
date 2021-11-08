function flatAndSort(arr) {
  const newArray = []

  arr.forEach(numbers => {
    newArray.push(...numbers)
  })

  return newArray.sort((a, b) => a - b)
}

console.log(flatAndSort([ [1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103] ]))