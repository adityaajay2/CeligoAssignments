const fs = require('fs')
const async = require('async')
const request = require('request')

let uriArray = [
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
]

fs.mkdirSync('./Output-Sample/Q4-Sample-a')

let index = 1;
let flag = true;

async.eachOfSeries(uriArray, (uri, key, callback) => {
    console.log(`index : ${index}`)
    try {
        if(index <= 5){
            request(uri).pipe(fs.createWriteStream(`./Output-Sample/Q4-Sample-a/${index++}.jpg`))
        }
        else{
            if(flag){
                fs.mkdirSync('./Output-Sample/Q4-Sample-b');
                flag = false
            }
            request(uri).pipe(fs.createWriteStream(`./Output-Sample/Q4-Sample-b/${index++}.jpg`))
        }
    } catch(err){
        throw err
    }
    callback()
}, (err) => {
    if(err) throw err;
    else console.log('done!')
})