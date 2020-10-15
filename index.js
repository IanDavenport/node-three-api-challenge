
require('dotenv').config();     // THIS IS WHERE THE API KEYS ARE STORED SO CANNOT BE SEEN BY ANYONE
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');


//////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 
// const bodyParser = require('body-parser');
//////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 


const getWeather = require('./lib/getWeather');
const getNews = require('./lib/getNews');
const trains = require('./lib/trains');

const app = express();


//////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 
// const fetch = require('node-fetch'); 
// app.use(bodyParser.urlencoded({extended: false})); 
// app.use(bodyParser.json());
//////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 





app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout',
}));

app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));



/////////////////////////////////////////////////////////////////////////////////
//  WEATHER
//  =======

    app.get('/index', async (req, res) => {
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
    

    
   //////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 
    // app.get('/index', (req, res) => { 
    //     res.render('weather');
    // });

    // app.post('/index', (req, res) => { 
    //     console.log(req.body); 
    //     res.render('weather');
    // });
    //////  ADDED CODE SINCE LAST WORKED OK - DONE SOMETHING WRONG NOW ////// 


});





/////////////////////////////////////////////////////////////////////////////////
//  NEWS
//  ====

app.get('/news', async (req, res) => {
    let data = await getNews();
    console.log(data);
    
    let total = data.totalResults;                  // RETURNS NUMBER OF HEADLINES VALUE
    let random = Math.floor(Math.random() * total); // GENERATES RANDOM NUMBER
    let news = data.articles[random].title;         // RETURNS RANDOM HEADLINE
                                    //  THE ABOVE  .title  APPPEARS TO CAUSE AN ISSUE IN CONSOLE
    let storyurl = data.articles[random].url;       // CAPTURES THE RANDOM STORY URL (BUT NOT CLICKABLE... YET)
    //  ================== >>>  
    res.render('news', { total, news, storyurl, random });


    // render () {
    //     const stories = this.state.XXXX.map((
    //         XXXX, index) => {return < XXXX.news} url = {XXXX.storyurl} key = {index} />
    //     ))
    //         return(
    //             {stories}
    //         ) 
    // }

});






/////////////////////////////////////////////////////////////////////////////////
//  TRAINS
//  ======

app.get('/trains', async (req, res) => {
    let data = await trains();
    console.log(data);
    
    let date = data.date;                   
    let time = data.time_of_day;            
    let stationname = data.station_name;    
    let stationcode = data.station_code;   

    let operatorname = data.departures.all[0].operator_name;   
    let platform = data.departures.all[0].platform;            
    let status = data.departures.all[0].status;                
    let departure_time = data.departures.all[0].aimed_departure_time;   
    let destination = data.departures.all[0].destination_name;          
    //  ================== >>>  
    res.render('trains', { date, time, stationname, stationcode, operatorname, platform, departure_time, destination, status });
});

/////////////////////////////////////////////////////////////////////////////////







app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});







