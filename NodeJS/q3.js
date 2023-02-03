const fs = require('fs')
const request = require('request')

const url = "https://google.com";

request(url, (err, res, body) => {
    if(err) throw err;
    else{
        console.log(`status code : ${res.statusCode}`);
        fs.writeFile('./Output-Sample/q3-output.html', body, (err) => {
            if(err) throw err;
            else{
                console.log('data written in file successfully!')
            }
        });
    }
})

request(url + '/logos/doodles/2023/celebrating-suong-nguyet-anh-6753651837109367-2x.png').pipe(fs.createWriteStream('./Output-Sample/q3-Stream-output.png'))