const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const getNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.GET_NEWS}`;



    
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}
module.exports = getNews;

