const React = require('react');
const PropTypes = require('prop-types');
const CityInput = require('./CityInput');

function Nav(props) {
	return (
		<div id='nav'>
			<h1>Cliche Weather App</h1>
			<CityInput history={props.history} />
		</div>
	);
}
Nav.propTypes = {
	history: PropTypes.object.isRequired,
};

module.exports = Nav;
