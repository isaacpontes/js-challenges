function quotation(fullName) {
  const names = fullName.split(' ')
  let initials = ''

  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0].toUpperCase()}.`;
  }
  return `${names[names.length - 1].toUpperCase()},${initials}`
}

console.log(quotation('Isaac Larrubia Ferreira Pontes'))
console.log(quotation('John Ronald Reuel Tolkien'))
console.log(quotation('christopher james paolini'))
console.log(quotation('Suzanne Marie Collins'))