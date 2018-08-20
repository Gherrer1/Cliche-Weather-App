const React = require('react');
const { Link } = require('react-router-dom');

function Forecast() {
	return (
		<div>
			<Link to='/'>Back</Link>
			<Link to='/details'>Detail</Link>
		</div>
	);
}

module.exports = Forecast;
