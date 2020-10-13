const http = require('http');

let url = `http://api.openweathermap.org/data/2.5/weather?q=moron&units=metric&lang=sp&appid=26efa4c02c0afd78d048cb26ff1c2cf2`;

const request = http.request(url, (response) => {
    let data;
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(`Error: ${error}`);
})
request.end();