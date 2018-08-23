const React = require('react');
const PropTypes = require('prop-types');
const CityInput = require('./CityInput');
const styles = require('../styles');

function Home(props) {
	return (
		<div className='home'>
			<h1>Enter a City and State</h1>
			<CityInput
				style={styles.cityInputColumn}
				history={props.history}
			/>
		</div>
	);
}
Home.propTypes = {
	history: PropTypes.object.isRequired,
};

module.exports = Home;
