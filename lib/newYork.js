const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const newYork = async() => {
    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NEW_YORK}`;
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}

module.exports = newYork;


