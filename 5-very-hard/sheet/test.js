const Sheet = require('./Sheet')

const sheet1 = new Sheet('Planilha 1')
console.log(sheet1)

sheet1.writeCell(4, 'A1')
console.log('A1:', sheet1.readCell('A1'))

sheet1.writeCell(4, 'A2')
console.log('A2:', sheet1.readCell('A2'))

sheet1.writeCell(0, 'B1')
console.log('B1:', sheet1.readCell('B1'))

sheet1.writeCell(3, 'B2')
console.log('B2:', sheet1.readCell('B2'))

sheet1.writeCell(0, 'C1')
console.log('C1:', sheet1.readCell('C1'))

sheet1.writeCell(3, 'C2')
console.log('C2:', sheet1.readCell('C2'))

sheet1.writeCell('SUM(A1:C2)', 'A3')
console.log('A3:', sheet1.readCell('A3'))

sheet1.writeCell(8, 'A1')
console.log('A1:', sheet1.readCell('A1'))
console.log('A3:', sheet1.readCell('A3'))

sheet1.writeCell('AVG(A1;A2;A3)', 'A4')
console.log('A4:', sheet1.readCell('A4'))

sheet1.writeCell(9, 'B1')
console.log('B1:', sheet1.readCell('B1'))

sheet1.writeCell(1, 'B3')
console.log('B3:', sheet1.readCell('B3'))

sheet1.writeCell('SUB(B1:B3)', 'B4')
console.log('A3:', sheet1.readCell('A3'))
console.log('A4:', sheet1.readCell('A4'))
console.log('B4:', sheet1.readCell('B4'))

sheet1.writeCell('MIN(A1:A5)', 'A6')
sheet1.writeCell('MAX(B1:B6)', 'B6')
console.log('A6:', sheet1.readCell('A6'))
console.log('B6:', sheet1.readCell('B6'))

sheet1.writeCell(18, 'C1')
console.log('C1:', sheet1.readCell('C1'))
sheet1.writeCell('DIV(C1;C2)', 'C3')
console.log('A3:', sheet1.readCell('A3'))
console.log('A4:', sheet1.readCell('A4'))
console.log('C3:', sheet1.readCell('C3'))

sheet1.writeCell(4, 'D1')
sheet1.writeCell(8, 'D2')
console.log('D1:', sheet1.readCell('D1'))
console.log('D2:', sheet1.readCell('D2'))
sheet1.writeCell('MUL(D1;D2)', 'D3')
sheet1.writeCell('SUM(D1:D3)', 'D4')
sheet1.writeCell('SUM(A1:D4)', 'D5')
console.log('D3:', sheet1.readCell('D3'))
console.log('D4:', sheet1.readCell('D4'))
console.log('D5:', sheet1.readCell('D5'))


Sheet.saveFile(sheet1, 'teste')

Sheet.openFile('teste.sheet').then(sheet2 => {

  sheet2.writeCell('Teste', 'G1')
  sheet2.writeCell(3, 'G2')
  sheet2.writeCell(4, 'G3')
  sheet2.writeCell('SUM(G2;G3)', 'G4')
  console.log('Planilha 2 -> G1:', sheet2.readCell('G1'))
  console.log('Planilha 2 -> G2:', sheet2.readCell('G2'))
  console.log('Planilha 2 -> G3:', sheet2.readCell('G3'))
  console.log('Planilha 2 -> G4:', sheet2.readCell('G4'))
  console.log('Planilha 1 -> G1:', sheet1.readCell('G1'))
  console.log('Planilha 1 -> G2:', sheet1.readCell('G2'))
  console.log('Planilha 1 -> G3:', sheet1.readCell('G3'))
  console.log('Planilha 1 -> G4:', sheet1.readCell('G4'))

  console.log('\n---\n')
  console.log(sheet1)
  console.log(sheet2)
})