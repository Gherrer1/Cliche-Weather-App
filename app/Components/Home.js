const React = require('react');
const CityInput = require('./CityInput');
const styles = require('../styles');

function Home() {
	return (
		<div className='home'>
			<h1>Enter a City and State</h1>
			<CityInput style={styles.cityInputColumn} />
		</div>
	);
}

module.exports = Home;
