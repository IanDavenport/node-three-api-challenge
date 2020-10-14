require('dotenv').config();     // THIS IS WHERE THE API KEYS ARE STORED SO CANNOT BE SEEN BY ANYONE
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');


// const getWeather = require('./lib/getWeather');
// const getNews = require('./lib/getNews');
const trains = require('./lib/trains');

const app = express();

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout',
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));



/////////////////////////////////////////////////////////////////////////////////
//  NUMBER ONE - WEATHER
//  ====================

//     app.get('/weather', async (req, res) => {
//     let data = await getWeather();
//     console.log(data);

//     let location = data.name;
//     let country = data.sys.country;
//     let desc = data.weather[0].description;
//     let iconcode = data.weather[0].icon;
//     let iconimg = "http://openweathermap.org/img/w/" + iconcode + ".png";

//     let temp = Math.floor(data.main.temp -273.15);
//     let feels = Math.floor(data.main.feels_like -273.15);
//     let sunrise = data.sys.sunrise *1000;
//     let rise = new Date(sunrise)
//     let humanrise = rise.toLocaleString();
//     let sunset = data.sys.sunset * 1000;
//     let set = new Date(sunset);
//     let humanset = set.toLocaleString();
    
//     //  ================== >>>  
//     res.render('index', {location, country, desc, iconcode, temp, feels, humanrise, humanset, iconcode, iconimg });
// });



/////////////////////////////////////////////////////////////////////////////////
//  NUMBER TWO -  NEWS
//  ===================

// app.get('/', async (req, res) => {
//     let data = await getNews();
//     console.log(data);
    
//     let total = data.totalResults;          // RETURNS NUMBER OF HEADLINES VALUE
//     let random = Math.floor(Math.random() * total); // GENERATES RANDOM NUMBER
//     let news = data.articles[random].title;      // RETURNS RANDOM HEADLINE
//     let storyurl = data.articles[random].url;    // CAPTURES THE RANDOM STORY URL (BUT NOT CLICKABLE)
//     //  ================== >>>  
//     res.render('index', { total, news, storyurl, random });
// });



/////////////////////////////////////////////////////////////////////////////////
//  NUMBER THREE - TRAINS
//  =====================

app.get('/', async (req, res) => {
    let data = await trains();
    console.log(data);
    
    let date = data.date;                   //  WORKS
    let time = data.time_of_day;            //  WORKS
    let stationname = data.station_name;    //  WORKS
    let stationcode = data.station_code;    //  WORKS

    let operatorname = data.departures.all[0].operator_name;   //  WORKS
    let platform = data.departures.all[0].platform;            //  WORKS
    let status = data.departures.all[0].status;                //  WORKS
    let departure_time = data.departures.all[0].aimed_departure_time;   //  WORKS
    let destination = data.departures.all[0].destination_name;          //  WORKS
    //  ================== >>>  
    res.render('index', { date, time, stationname, stationcode, operatorname, platform, departure_time, destination, status });
});

/////////////////////////////////////////////////////////////////////////////////

app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});







