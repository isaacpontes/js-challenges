function missingPrisoners(prisoners) {
  const sorted = prisoners.slice(0).sort((a, b) => a - b)
  const total = Number(sorted[sorted.length - 1])
  const allPrisoners = []

  for (let i = 0; i < total; i++) {
    const prisoner = i + 1
    allPrisoners.push(prisoner.toString().padStart(4, '0'))
  }

  const missing = []

  allPrisoners.forEach(prisoner => {
    if (!sorted.includes(prisoner)) {
      missing.push(prisoner)
    }
  })

  return missing
}

const arr = ['0020', '0002', '0013', '0004', '0001', '0016', '0015', '0006', '0012', '0007', '0005', '0008', '0011', '0010']
console.log(missingPrisoners(arr))
console.log(missingPrisoners(['0020', '0009', '0002', '0013', '0004', '0017', '0001', '0003', '0016', '0015', '0019', '0006', '0012', '0007', '0005', '0014', '0008', '0011', '0010', '0018']))
console.log(missingPrisoners(['0004', '0002', '0005', '0003']))
console.log(missingPrisoners([]))

console.log(arr);