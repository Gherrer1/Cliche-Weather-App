const React = require('react');
const moment = require('moment');
const PropTypes = require('prop-types');

const ICON_URI_PREFIX = 'http://openweathermap.org/img/w/';

function formatDateFromDt(dt) {
	const date = new Date(dt * 1000);
	const formattedDate = moment(date).format('dddd, MMM Do');
	return formattedDate;
}

function WeatherCard(props) {
	const formattedDate = formatDateFromDt(props.forecast.dt);
	const { icon } = props.forecast.weather[0];
	const { forecast } = props;

	return (
		<div
			className='column weather-card'
			onClick={() => props.handleClick(forecast, formattedDate)}
			role='button'
			tabIndex={0}
		>
			<img src={`${ICON_URI_PREFIX}${icon}.png`} alt={`Weather icon for ${formattedDate}`} />
			<span>{formattedDate}</span>
		</div>
	);
}
WeatherCard.propTypes = {
	forecast: PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.array.isRequired,
	}).isRequired,
	handleClick: PropTypes.func.isRequired,
};

module.exports = WeatherCard;
