
var merge = require('../lib/merge')
var should = require('should')

var object1 = {
  'foo': 'foo value',
  'bar': 'bar value'
}

var object2 = {
  'bar': 'override bar',
  'baz': 'baz value'
}

describe('basic merge test', function() {
  it('should merge correctly', function() {
    var mergedObject = merge.mergeObjects([object1, object2])

    mergedObject.foo.should.equal('foo value')
    mergedObject.bar.should.equal('override bar')
    mergedObject.baz.should.equal('baz value')

    object1.bar.should.equal('bar value')
    object2.bar.should.equal('override bar')
  })
})