class Explorer {
  constructor(name) {
    this.name = name
    this.level = 1
    this.experience = 0
    this.expToNextLevel = 110
    this.knownPlanets = []
    this.terrainExpertise = {}
    this.alive = true
  }

  rank() {
    if (this.level < 10) return 'Newbie'
    if (this.level < 30) return 'Explorer'
    if (this.level < 50) return 'Veteran'
    if (this.level < 80) return 'Elite'
    if (this.level < 99) return 'Master'
    return 'Legend'
  }

  gainExperience(pts) {
    this.experience += pts

    // Max level
    if (this.level === 99) {
      return
    }

    // Level up
    if (pts >= this.expToNextLevel) {
      this.level++
      const newExpToNextLevel = (100 + (10 * this.level)) - (pts - this.expToNextLevel)
      this.expToNextLevel = this.level !== 99 ? newExpToNextLevel : 0
      console.log(`Você subiu de nível! Experiência para o próximo nível: ${this.expToNextLevel}`)
    } else {
      this.expToNextLevel -= pts
    }
  }

  static explorationHandler() {
    return {
      pacific: (diceResult) => diceResult >= 5 ? 15 : 0,
      neutral: (diceResult) => diceResult >= 7 ? 25 : 0,
      hostile: (diceResult) => diceResult >= 9 ? 50 : 10
    }
  }

  explore(planet) {
    // If dead exit early
    if (!this.alive) {
      console.log('You are dead.')
      return
    }

    const { id, hostility, terrain } = planet

    // Throw dices
    const dice1 = Math.floor(1 + Math.random() * 5)
    const dice2 = Math.floor(1 + Math.random() * 5)

    // Result with bonus (if applied)
    const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0
    const dices = dice1 + dice2 + bonus

    console.log(`Rolled ${dice1} and ${dice2} ${bonus ? '+1 bônus' : ''}`)

    // Check for critical
    if (dices === 12) {
      this.terrainExpertise[terrain] = this.terrainExpertise[terrain] + 1 || 1
    }

    // Check for critical failure
    if (dices === 2 && hostility === 'hostile') {
      console.log('You died.')
      this.alive = false
      return
    }

    // Handle exploration
    const handler = Explorer.explorationHandler()    
    const result = handler[hostility](dices)

    this.gainExperience(result)

    // Handle result
    if (result > 10) {
      const planetAlreadyExplored = this.knownPlanets.find(planet => planet.id === id)

      if (! planetAlreadyExplored) {
        this.knownPlanets.push(planet)
      }

      console.log(`Success! Earned ${result} exp.`)
    } else {
      console.log(`Failure. Earned ${result} exp.`)
    }
  }
}

const kirk = new Explorer('James T. Kirk')
const planet1 = { id: 1, name: 'Planeta 1', hostility: 'neutral', terrain: 'forest' }
const planet2 = { id: 2, name: 'Planeta 2', hostility: 'hostile', terrain: 'desert' }
const planet3 = { id: 3, name: 'Planeta 3', hostility: 'pacific', terrain: 'aquatic' }

setInterval(() => {
  kirk.explore(planet1)
  console.log('...')
  kirk.explore(planet3)
  console.log('...')
  kirk.explore(planet1)
  console.log('...')
  kirk.explore(planet2)
  console.log('...')

  console.log(kirk)
  console.log(kirk.rank())
}, 1000 * 3)