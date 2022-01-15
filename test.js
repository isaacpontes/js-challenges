const characters = [
	{ name: 'Frodo', race: 'Hobbit' },
	{ name: 'Sam', race: 'Hobbit' },
	{ name: 'Aragorn', race: 'Man' },
	{ name: 'Legolas', race: 'Elf' },
	{ name: 'Gimli', race: 'Dwarf' },
	{ name: 'Boromir', race: 'Man' },
	{ name: 'Merry', race: 'Hobbit' },
	{ name: 'Pippin', race: 'Hobbit' },
	{ name: 'Gandalf', race: 'Ainur' },
]

const hobbits = characters.filter(function (character) {
  return character.race === 'Hobbit'
})

console.log(hobbits)