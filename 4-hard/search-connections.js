const results = []

function searchConnections(data) {

  Object.entries(data).forEach( ([key, value]) => {

    if (key === 'connection') {
      results.push([value._id, value.label])
    }

    if (key === 'connections') {

      value.forEach(component => {
        results.push([component._id, component.label])
      })

    }

    if (Array.isArray(value)) {

      value.forEach(innerObject => {
        searchConnections(innerObject)
      })

    } else if (Object.prototype.toString.call(value) === '[object Object]') {

      searchConnections(value)

    }

  })

}

const data = require('./json/data-2.json')
searchConnections(data)

console.log(results)
