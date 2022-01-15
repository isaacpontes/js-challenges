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
const pilot2 = new Pilot('Hal', 'Jordan', '09-02-1995')
const pilot3 = new Pilot('Carol', 'Danvers', '08-17-1968')
const pilot4 = new Pilot('Poe', 'Dameron', '03-09-1979')

pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()
pilot3.generateFlyingLicense()
pilot4.generateFlyingLicense()

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)