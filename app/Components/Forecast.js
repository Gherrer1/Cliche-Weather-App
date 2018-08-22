const React = require('react');
const PropTypes = require('prop-types');
const { Link } = require('react-router-dom');
const queryString = require('query-string');
const WeatherCard = require('./WeatherCard');
const api = require('../utils/api');

function getWeatherCardsFor5days(forecasts) {
	return forecasts.map(forecast => (
		<WeatherCard key={forecast.dt} forecast={forecast} />
	));
}

class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			city: null,
			fiveDayForecast: null,
			error: false,
		};
	}

	componentDidMount() {
		const parsedQuery = queryString.parse(this.props.location.search);
		const { city } = parsedQuery;
		api.getFiveDayForcast(city)
			.then(response => this.setState({
				loading: false,
				error: false,
				city: response.city.name,
				fiveDayForecast: response.list,
			}))
			.catch(() => this.setState({
				loading: false,
				error: true,
			}));
	}

	render() {
		let viewMeat;
		const { city, fiveDayForecast } = this.state;
		if (this.state.loading) {
			viewMeat = <div>Loading</div>;
		}
		if (this.state.error) {
			viewMeat = <div>There was an error processing your request.</div>;
		}
		if (this.state.fiveDayForecast) {
			viewMeat = getWeatherCardsFor5days(fiveDayForecast);
		}
		return (
			<div className='forecast-view'>
				<Link to='/'>Back</Link>
				<br />
				<Link to='/details'>Detail</Link>
				<br />
				{this.state.city && <h1>{this.state.city}</h1>}
				<div className='weather-cards'>
					{viewMeat}
				</div>
			</div>
		);
	}
}
Forecast.propTypes = {
	location: PropTypes.object.isRequired,
};

module.exports = Forecast;
