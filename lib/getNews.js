const fetch = require('node-fetch');
// npm i node-fetch
// node-fetch isn't built in, so I have to install it.


const getNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.GET_NEWS}`;

    //  OR FRANCE >
    // https://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.GET_NEWS}`;

    //  OR ITALY >
    // https://newsapi.org/v2/top-headlines?country=it&apiKey=${process.env.GET_NEWS}`;

    //  FROM   https://newsapi.org/docs/endpoints/top-headlines


    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    return jsonData
}
module.exports = getNews;

