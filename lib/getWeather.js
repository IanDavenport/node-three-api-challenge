

const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const getWeather = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.OPEN_WEATHER_API}`;
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}
module.exports = getWeather;






