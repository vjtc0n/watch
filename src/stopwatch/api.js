/**
 * Created by vjtc0n on 7/6/16.
 */
var _ = require('lodash');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=6d282596470bead2cc4c180e9c959f86';

var kelvinToF = function (kelvin) {
    return Math.round((kelvin - 273.15)*1.8 + 32) + ' °F';
};

var kelvinToC = function (kelvin) {
    return Math.round(kelvin - 273.15) + ' °C';
};

module.exports = function (latitude, longtitude) {
    var url = `${rootUrl}&lat=${latitude}&lon=${longtitude}`;

    return fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            return {
                city: _.capitalize(json.name),
                temperature_F: kelvinToF(json.main.temp),
                temperature_C: kelvinToC(json.main.temp),
                description: _.capitalize(json.weather[0].description)
            }
        });
};