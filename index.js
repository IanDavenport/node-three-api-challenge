require('dotenv').config();     // THIS IS WHERE THE API KEYS ARE STORED SO CANNOT BE SEEN BUT ANYONE

const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getNews = require('./lib/getNews');

const getWeather = require('./lib/getWeather');
const newYork = require('./lib/newYork');
const getNews = require('./lib/getNews');



const app = express();

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout',
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));


/////////////////////////////////////////////////////////////////////////////////
//  NUMBER ONE - GET WEATHER
app.get('/', async (req, res) => {
    let data = await getWeather();
    console.log(data);

    let location = data.name;
    let country = data.sys.country;
    let desc = data.weather[0].description;
    let iconcode = data.weather[0].icon;
    let iconimg = "http://openweathermap.org/img/w/" + iconcode + ".png";

    let temp = Math.floor(data.main.temp -273.15);
    let feels = Math.floor(data.main.feels_like -273.15);
    let sunrise = data.sys.sunrise *1000;
    let rise = new Date(sunrise)
    let humanrise = rise.toLocaleString();
    let sunset = data.sys.sunset * 1000;
    let set = new Date(sunset);
    let humanset = set.toLocaleString();
    
   

    //  ================== >>>  
    res.render('index', {location, country, desc, iconcode, temp, feels, humanrise, humanset, iconcode, iconimg });
});


/////////////////////////////////////////////////////////////////////////////////
//  NUMBER TWO - NEW YORK TIMES    IOF IT FECKING WOULD WORK
app.get('/', async (req, res) => {
    let data = await newYork();
    console.log(data);
    

    //  ================== >>>  
    res.render('index', { });
});


/////////////////////////////////////////////////////////////////////////////////
//  NUMBER THREE -  NEWS

app.get('/', async (req, res) => {
    let data = await getNews();
    console.log(data);
    

    //  ================== >>>  
    res.render('index', { });
});


/////////////////////////////////////////////////////////////////////////////////



app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});















