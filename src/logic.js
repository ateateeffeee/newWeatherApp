//console.log('logic');

const dom = require('./dom.js');

const logic = (() => {

    const init = function() {
        console.log('logic init');
        console.log(document.getElementById('userInput'));
        //document.getElementById('userInput').focus();
        this.getData('London');
        
        
        //dom.createCards(); RUN THIS IN GETDATA??
    }
    
    /*
    const logData = function() {
        
        async function getData() {
            const response = await fetch('api.openweathermap.org/data/2.5/weather?q=London',{mode: 'cors'});
            const weatherData = await response;
            console.log(weatherData);
        }
        getData();
        
    }
    */

    const getData = async function(city) {
        //getTemp(city);

        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        const weatherData = await response.json();

        //const response2 = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        //LEFT OFF HERE. USE AWAIT TO MAKE RETURNS WORK
        //send ALL variables to createCards. put at the end of
        //this function

        //Execute data parsing functions and assign to variables
        let temp = await getTemp(weatherData);
        let high = await getHigh(weatherData);
        let low = await getLow(weatherData);
        let feelsLike = await getFeelsLike(weatherData);

        //Precip card
        let humid = await getHumidity(weatherData);

        //Execute getHourlyData
        let hourlyData = await getHourlyData(weatherData.coord.lat, weatherData.coord.lon);
        
        //Send data to dom module
        dom.createCards(temp, high, low, feelsLike, hourlyData[0], humid, hourlyData[1]);
    }

    const getHourlyData = async function(lat, lon) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon=' + lon + '&appid=f586ade79371e87113e2f9abf57f8fbc',{mode: 'cors'});
        const weatherData = await response.json();

        let precip = await getPrecip(weatherData);

        let desc = await getDesc(weatherData);

        return [precip, desc]


    }

    const getTemp = async function(weatherData) {
        console.log('TEMP: ');
        console.log(weatherData.main.temp);

        let temp = weatherData.main.temp;

        let fahrenheit = kelvinToFahrenheit(temp);

        return fahrenheit
    }

    const getPrecip = async function(weatherData) {
        console.log('PRECIP: ')
        console.log(weatherData.hourly[1].pop);

        return weatherData.hourly[1].pop
    }

    const getDesc = async function(weatherData) {
        console.log('DESC: ');
        console.log(weatherData.hourly[1].weather[0].description);
        let desc = weatherData.hourly[1].weather[0].description;

        return capitalizeFirstLetter(desc);
    }

    const getFeelsLike = async function(weatherData) {
        console.log('FEELS LIKE: ');
        console.log(weatherData.main.feels_like);

        let temp = weatherData.main.feels_like;

        let fahrenheit = kelvinToFahrenheit(temp);

        return fahrenheit
    }

    const getHumidity = async function(weatherData) {
        console.log('HUMIDITY: ');
        console.log(weatherData.main.humidity);

        return weatherData.main.humidity
    }

    const getHigh = async function(weatherData) {
        console.log('HIGH: ');
        console.log(weatherData.main.temp_max);

        let temp = weatherData.main.temp_max;

        let fahrenheit = kelvinToFahrenheit(temp);

        return fahrenheit
    }

    const getLow = async function(weatherData) {
        console.log('LOW: ');
        console.log(weatherData.main.temp_min);

        let temp = weatherData.main.temp_min;

        let fahrenheit = kelvinToFahrenheit(temp);

       return fahrenheit
    }

    const kelvinToFahrenheit = function(kelvin) {
        let fahrenheit = ((kelvin - 273.15) * (9/5)) + 32;
        return Math.round(fahrenheit);
    }

    const capitalizeFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const getUserInput = function() {
        let cityField = document.getElementById('cityField');
    }

    
    

    return {
        init,
        getData,
        /*
        getUserInput,
        getPrecip,
        getFeelsLike,
        getHumidity,
        getHigh,
        getLow,
        getSky,
        */


    }


})();

module.exports = logic;