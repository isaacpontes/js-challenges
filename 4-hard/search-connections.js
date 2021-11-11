const results = []

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' 
}

function searchConnections(data) {
  Object.entries(data).forEach(([key, value]) => {

    if (key === 'connections') {
      value.forEach(component => {
        results.push([component._id, component.label])
      })
    }

    if (Array.isArray(value)) {

      value.forEach(innerObject => {
        searchConnections(innerObject)
      })

    } else if (isObject(value)) {
      searchConnections(value)
    }

    if (key === 'connection') {
      results.push([value._id, value.label])
    }
  })
}

const data = require('./json/data-1.json')
searchConnections(data)

console.log(results)