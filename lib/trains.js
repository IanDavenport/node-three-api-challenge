

const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const trains = async() => {

    //  HIDE KEYS WITH ==>  ${process.env."NAME IN ENV FILE"}
    //  EXAMPLE URL http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY;

const url = `https://transportapi.com/v3/uk/train/station/MAN/live.json?app_id=${process.env.MYAPPID}&app_key=${process.env.MYTRAINSKEY}&darwin=false&train_status=passenger`;
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}

module.exports = trains;

