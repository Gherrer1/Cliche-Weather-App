const React = require('react');
const PropTypes = require('prop-types');
const queryString = require('query-string');

function ForecastDetail(props) {
	const { city } = queryString.parse(props.location.search);
	return (
		<div>Hey</div>
	);
}
ForecastDetail.propTypes = {
	location: PropTypes.object.isRequired,
};

module.exports = ForecastDetail;
