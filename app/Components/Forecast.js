const React = require('react');
const PropTypes = require('prop-types');
const { Link } = require('react-router-dom');
const queryString = require('query-string');
const WeatherCard = require('./WeatherCard');
const api = require('../utils/api');

function getWeatherCardsFor5days(forecasts, clickHandler) {
	return forecasts.map(forecast => (
		<WeatherCard
			key={forecast.dt}
			forecast={forecast}
			handleClick={clickHandler}
		/>
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

		this.fetchDataForCity = this.fetchDataForCity.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const parsedQuery = queryString.parse(this.props.location.search);
		const { city } = parsedQuery;
		this.fetchDataForCity(city);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location !== this.props.location) {
			const parsedQuery = queryString.parse(this.props.location.search);
			const { city } = parsedQuery;
			this.fetchDataForCity(city);
		}
	}

	fetchDataForCity(city) {
		this.setState({
			loading: true,
			error: false,
			city: null,
			fiveDayForecast: null,
		});

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

	handleClick(forecast) {
		this.props.history.push({
			pathname: '/details',
			search: `?city=${this.state.city}&dt=${forecast.dt}`,
			state: {
				city: this.state.city,
				forecast,
			},
		});
	}

	render() {
		let viewMeat;
		const { fiveDayForecast } = this.state;
		if (this.state.loading) {
			viewMeat = <div>Loading</div>;
		}
		if (this.state.error) {
			viewMeat = <div>There was an error processing your request.</div>;
		}
		if (this.state.fiveDayForecast) {
			viewMeat = getWeatherCardsFor5days(fiveDayForecast, this.handleClick);
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
	history: PropTypes.object.isRequired,
};

module.exports = Forecast;
