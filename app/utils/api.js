const axios = require('axios');
const API_KEY = require('./apiKey');

function currentWeatherURI(city) {
	return `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${API_KEY}`;
}


function fiveDayForecastURI(city) {
	return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${API_KEY}&cnt=5`;
}

const api = {
	getTodaysWeather(city) {
		return axios.get(currentWeatherURI(city))
			.then(response => response.data);
	},
	getFiveDayForcast(city) {
		return axios.get(fiveDayForecastURI(city))
			.then(response => response.data);
	},
};

module.exports = api;
