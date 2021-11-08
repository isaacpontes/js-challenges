class Pilot {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(birthday)
    this.flyingLicense = false
  }

  generateFlyingLicense() {
    let license = ''

    for (let i = 0; i < 5; i++) {
      license += this.lastName[i] ? this.lastName[i].toUpperCase() : '9'
    }

    license += '-'
    license += this.birthday.getFullYear().toString()[2]
    license += this.getBirthdayFullMonth()
    license += this.birthday.getFullYear().toString()[3]
    license += '.'
    license += this.firstName[0].toLowerCase()

    this.flyingLicense = license
  }

  getBirthdayFullMonth() {
    if (this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`
    } else {
      return `${this.birthday.getMonth() + 1}`
    }
  }
}

const pilot1 = new Pilot('John', 'Doe', '05-25-1977')
const pilot2 = new Pilot('Isaac', 'Pontes', '09-02-1995')

pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()

console.log(pilot1)
console.log(pilot2)