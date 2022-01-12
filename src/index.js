//Loads external modules
const dom = require('./dom.js');
const staticListeners = require('./staticListeners.js');
const dynamicListeners = require('./dynamicListeners.js');
const logic = require('./logic.js');

console.log('i think it works');

//Executes external modules
dom.init();
staticListeners.init();
logic.init();
dynamicListeners.init();

//run api thing right in here just to see what happens

const logData = async function() {
    const response = await fetch('api.openweathermap.org/data/2.5/weather?q=London',{mode: 'cors'});
    const weatherData = await response;
    console.log(response);
}

const logData2 = async function() {
    const response2 = await fetch('api.giphy.com/v1/gifs/translate?api_key=iL8QjgGvGHZntF2t3EgFUpaFKcCnmKqK&s=dogs',{mode: 'cors'});
    const weatherData2 = await response2;
    console.log(response2);
}

//logData();
//logData2();

/*
TO-DO:
-get city/state/zip/whatever

-replace end of fetch request with user value

- function names: getUserInput, getData

google:
-cool css stuff

- how to make other git branches n stuff

*/