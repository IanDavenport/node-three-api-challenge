
const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.

const getWeather = async() => {

    //  TESTING 'City' & 'Country' PARAMS in URL - WORK OK    
    // let city = "London";
    // let country = "GB";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPEN_WEATHER_API}`;


    // HARD CODED LOCATION OF MANCHESTER ==>
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.OPEN_WEATHER_API}`;


    //  FIVE DAY FORCAST ===>
    // const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q={Manchester,uk}&appid=${process.env.OPEN_WEATHER_API}`;
    //  INSOMNIA PULLS 5 DAY DATA FROM THE ABOVE


    let data =  await fetch(url);               //  PRESENT WEATHER
    // let data =  await fetch(fiveDayUrl);     //  FIVE DAY FORCAST
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}
module.exports = getWeather;


// FUTURE PLANS ==>

//  1) To make user selectable location
//  2) To show a 5 day forcast for the location


