// Create an Object MetadataParser using constructor functions
// The Object should have private properties _version, _channel, _keyField 
// Object should have get and set function for each property
// Add a method in the class getKeyFields, 
// which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input 
// and returns an array of values of _keyField, input array.

const Data = function(version, channel, keyField) {
    this._version = version
    this._channel = channel
    this._keyField = keyField

    this.getVersion = function() {
        return this._version
    }
    this.setVersion = function(version) {
        this._version = version
    }
    this.getChannel = function() {
        return this._channel
    }
    this.setChannel = function(channel) {
        this._channel = channel
    }
    this.getKey = function() {
        return this._keyField
    }
    this.setKey = function(keyField) {
        this._keyField = keyField
    }
    this.getKeyFields = function(inputArray) {
        let res = []
        inputArray.forEach((ele) => {
            this.setKey(ele.keyField)
            res.push(this.getKey())
        })
        return res;
    }
}

const inputData = [
    {channel: 'A', version : 1, keyField : 'keyVal_1'}, 
    {channel: 'B', version : 2, keyField : 'keyVal_2'}, 
    {channel: 'C', version : 3, keyField : 'keyVal_3'}
]

const MetadataParser = new Data()
const res = MetadataParser.getKeyFields(inputData)
console.log(res)