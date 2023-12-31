// The code  Express application with various routes to handle different 
// requests related to weather and city information. It uses the 'express' and 'request' 
// modules along with external libraries like 'country-state-city' and 'indian-cities-database' 
// to provide functionality for handling weather data and city information..

var express = require('express');
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
var router = express.Router();
const request = require("request");
const apiKey = '7bebc851729588eee159843c50a7488b'
const india = require('indian-cities-database');


router.get("/", function (req, res) {
     res.render("kuch", { weather: null, error: null });
});

router.get("/n", function (req, res) {
     // res.send(Country.getAllCountries())
     // res.send(State.getAllStates())
});

router.get("/i", function (req, res) {
     // res.send(Country.getAllCountries())
     res.send(india.cities);
});


router.get("/weather", function (req, res) {
     res.render("index", { weather: null, error: null });
});


router.post('/weather', function(req, res) {
     let city = req.body.city;
     // This line constructs the URL to fetch weather data from the OpenWeatherMap API for the specified 'city' and with the specified 'apiKey'.
     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

     request(url, function(err, response, body) {
          if (err) {
              res.render('example', { weather: null, error: 'Error, please try again' });
          } else {
               let weather = JSON.parse(body);
               console.log(weather);

               if (weather.main == undefined) {
                    res.render('example', { weather: null, error: 'Error, please try again' });
               } else {
                    let place = `${weather.name}, ${weather.sys.country}`,

                    // weatherTimezone = `${new Date(
                    //      weather.dt * 1000 - weather.timezone * 1000
                    // )}`;

                    weatherTimezone = `${new Date().toLocaleString([], {year: "numeric",month: "long",weekday: "long",
                    day: "numeric", hour: 'numeric', minute: 'numeric'})}`;
                    
                    let weatherTemp = `${weather.main.temp}`,
                    weatherPressure = `${weather.main.pressure}`,
                    weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                    weatherDescription = `${weather.weather[0].description}`,
                    humidity = `${weather.main.humidity}`,
                    clouds = `${weather.clouds.all}`,
                    visibility = `${weather.visibility}`,
                    main = `${weather.weather[0].main}`,
                    weatherFahrenheit;
                    weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

                    function roundToTwo(num) {
                         return +(Math.round(num + "e+2") + "e-2");
                    }
                    weatherFahrenheit = roundToTwo(weatherFahrenheit);

                    res.render("example",{
                         weather: weather,
                         place: place,
                         temp: weatherTemp,
                         pressure: weatherPressure,
                         icon: weatherIcon,
                         description: weatherDescription,
                         timezone: weatherTimezone,
                         humidity: humidity,
                         fahrenheit: weatherFahrenheit,
                         clouds: clouds,
                         visibility: visibility,
                         main: main,
                         error: null,
                    });
               }
          }
     });
})



const axios = require('axios');

function fetchCities(){
    const response = axios.get('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json');
    return response;
};

router.get('/cities', async(req, res) => {
    const response = await fetchCities();
//     res.render("kuch",{response});
//     res.send(response.data);
});

router.get('/searchCity', async(req, res) =>{
    const params = req.query.city;
    const response = await fetchCities();
    const filteredCities = response.data.filter(item => {
        if(item.name.toUpperCase().includes(params.toUpperCase())){
            return item
        }
    });
    res.send({
        data: filteredCities,
        success: true
    })
});


module.exports = router;



//it Express application that handles weather data and 
// city information. It defines various routes to render weather data, search for cities,
//  and retrieve a list of cities from an external API. It also includes functionality to
//  convert temperature from Celsius to Fahrenheit and format the date and time in the local
//  timezone. The application uses Axios for making HTTP requests and Express for handling 
// routes and rendering templates.