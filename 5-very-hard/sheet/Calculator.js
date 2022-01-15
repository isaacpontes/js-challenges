class Calculator {
  static sum(...nums) {
    return nums.reduce((accum, num) => accum + Number(num), 0)
  }

  static subtract(...nums) {
    const first = Number(nums[0])
    return nums.slice(1).reduce((accum, num) => accum - Number(num), first)
  }

  static multiply(...nums) {
    return nums.reduce((accum, num) => accum * Number(num), 1)
  }

  static divide(...nums) {
    const first = Number(nums[0])
    return nums.slice(1).reduce((accum, num) => accum / Number(num), first)
  }

  static minimum(...nums) {
    const sorted = nums.sort((a, b) => a - b)
    return sorted[0]
  }

  static maximum(...nums) {
    const sorted = nums.sort((a, b) => b - a)
    return sorted[0]
  }

  static average(...nums) {
    return nums.reduce((accum, num) => accum + num, 0) / nums.length
  }
}

module.exports = Calculator