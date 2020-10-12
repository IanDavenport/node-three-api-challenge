const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const trains = async() => {

    const url = `http://transportapi.com/v3/uk/places.json?query=piccadilly&type=train_station&app_id=37aabd41&app_key=${process.env.TRAINS}`;
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}

module.exports = trains;



