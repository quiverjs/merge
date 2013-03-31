
var copyObject = require('quiver-copy').copyObject

var noCopy = function(object) {
  return object
}

var mergeObjects = function(objects, doCopy) {
  var copy = doCopy ? copyObject : noCopy

  var mergedObject = { }

  objects.forEach(function(object) {
    for(var key in object) {
      mergedObject[key] = copy(object[key])
    }
  })

  return mergedObject
}

module.exports = {
  mergeObjects: mergeObjects
}