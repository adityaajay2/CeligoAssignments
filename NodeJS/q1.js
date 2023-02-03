const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser();

fs.readFile('./Input-Sample/q1-input.xml', (err, res) => {
    if(err) throw err;
    else{
        parser.parseString(res, (error, data) => {
            if(error) throw error;
            else{
                console.log(data)
            }
        })
    }
})