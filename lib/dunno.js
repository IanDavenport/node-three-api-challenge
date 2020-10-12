const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const dunno = async() => {
    const url = ``;
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}

module.exports = dunno;


