class Race {
  constructor(...racers) {
    this.racers = racers
  }

  getClassification() {
    const classification = {}

    for (let i = 0; i < this.racers.length; i++) {
      classification[i + 1] = this.racers[i];
    }

    return classification
  }

  updateClassification(str) {
    const [racer, action] = str.split(' ')

    if (action.includes('ELIMINATE')) {
      this.eliminateRacer(racer)
    } else {
      this.updateRacer(racer, action)
    }
  }

  updateRacer(racer, action) {
    const eleminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
    const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

    const currentPosition = active.indexOf(racer)
    const updatedPosition = currentPosition + Number(action) * -1

    if (updatedPosition >= this.racers.length || updatedPosition < 0) {
      console.log('Erro! Atualização inválida.')
      return
    }

    active.splice(currentPosition, 1)

    this.racers = [...active.slice(0, updatedPosition), racer, ...active.slice(updatedPosition), ...eleminated]
  }

  eliminateRacer(racer) {
    const eleminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
    const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

    active.splice(active.indexOf(racer), 1)

    this.racers = [...active, `${racer} ELIMINATED`, ...eleminated]
  }
}

const race1 = new Race("Alfa", "Beta", "Gama", "Delta")

console.log(race1)
race1.updateClassification("Beta +1")
race1.updateClassification("Gama -1")
console.log(race1)
race1.updateClassification("Delta ELIMINATE")
race1.updateClassification("Gama +2")
console.log(race1)

console.log(race1.getClassification())

const race2 = new Race(
  "Arthur",
  "Beatrice",
  "Ceres",
  "Dalton",
  "Ernest",
  "Felicity",
  "Glenn",
  "Hugo",
  "Isabela",
  "John",
  "Kate",
  "Liam",
  "Marcel",
  "Nick",
  "Oswald",
  "Patrick",
  "Quistis",
  "Reginald",
  "Sophie",
  "Tianna",
  "Ulyssa",
  "Vincent",
  "Wong",
  "X",
  "Yuna",
  "Zelda"
)

console.log(race2)
race2.updateClassification("Zelda +16")
race2.updateClassification("Arthur +2")
race2.updateClassification("Dalton ELIMINATE")
race2.updateClassification("Hugo +5")
race2.updateClassification("Reginald ELIMINATE")
race2.updateClassification("X +7")
race2.updateClassification("Glenn -1")
race2.updateClassification("Ceres +2")
race2.updateClassification("Liam +1")
race2.updateClassification("Sophie -3")
console.log(race2.getClassification())
