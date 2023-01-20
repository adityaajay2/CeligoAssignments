// Implement inheritance. Define a constructor function SortArray which 
// Has a property originalArray
// Has get function to getSortedArray 
// Has a private function to sort the array.
// Takes as an input to construct an array of numbers
// Define another constructor function (SortObjectArray) which extends SortArray, 
// and is used to sort array of JSON object

class SortArray {
    constructor(arr) {
        this.originalArray = arr
    }

    sortFun(a, b) {
        if(a < b) {
            return -1
        }
    }
    
    getSortedArray(originalArray) {
        originalArray.sort(this.sortFun)
        return originalArray
    }
};

class SortJSON extends SortArray {
    sortFun(a, b) {
        if(a.data < b.data) {
            return -1
        }
    }
};

const inputArray = [2, 5, 12, 1, 7]

const inputJSONArray = [
    {data : "jksdh"}, 
    {data : "quwhd"},
    {data : "ckjzajsn"}
]

const mySortedArray = new SortArray()
console.log(mySortedArray.getSortedArray(inputArray))
const mySortedJSON = new SortJSON()
console.log(mySortedJSON.getSortedArray(inputJSONArray))
