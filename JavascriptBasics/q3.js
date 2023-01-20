// Write a function groupObjectsBy which takes as an input an array of JSON objects 
// and returns a grouped object by a key.

const groupObjectsBy = (inputData, key) => {
    return (
        inputData.reduce((res, currValue) => {
            if(!res[currValue[key]]) {
                res[currValue[key]] = []
            }
            res[currValue[key]].push(currValue)
            return res;
        }, {}) 
    )
}

const inputData = [
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
]
const res = groupObjectsBy(inputData, "channel")
console.log(res)

// const newObj = {
//     "A" : [{"channel":"A","name":"shoe"},{"channel":"A","name":"electronics"}],
//     "B" : [{"channel":"B","name":"apparel"}],
//     "C" : [{"channel":"C","name":"electronics"}]   
// }
