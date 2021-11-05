function imutableReverse(arr) {
  const reversedArray = []

  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - i -1]
  }

  return reversedArray
}

console.log(imutableReverse([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(imutableReverse(["Oh", "Hi", "Mark"]))
console.log(imutableReverse([false, true, true, true]))
console.log(imutableReverse(["It's", "not", true, 0]))
