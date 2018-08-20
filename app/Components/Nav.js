const React = require('react');
const CityInput = require('./CityInput');

function Nav() {
	return (
		<div id="nav">
			<h1>Cliche Weather App</h1>
			<CityInput />
		</div>
	);
}

module.exports = Nav;
