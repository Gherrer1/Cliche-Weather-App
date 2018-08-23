const React = require('react');
const PropTypes = require('prop-types');
const queryString = require('query-string');
const api = require('../utils/api');
const formatDateFromDt = require('../utils/formatDate');

class ForecastDetail extends React.Component {
	constructor(props) {
		super(props);

		// if location.state, set state a certain way
		if (props.location.state) {
			this.state = {
				loading: false,
				error: false,
				forecastData: props.location.state,
			};
		} else {
			this.state = {
				loading: true,
				error: false,
				forecastData: null,
			};
		}
	}

	componentDidMount() {
		if (this.state.forecastData) {
			return;
		}
		const { city } = queryString.parse(this.props.location.search);
		const dt = Number(queryString.parse(this.props.location.search).dt);
		api.getFiveDayForcast(city)
			.then(response => this.setState({
				loading: false,
				error: false,
				forecastData: {
					city,
					forecast: response.list.find(day => day.dt === dt),
				},
			}))
			.catch(() => this.setState({
				loading: false,
				error: true,
			}));
	}

	render() {
		console.log(this.state.forecastData);
		return (
			<div>
				{this.state.loading && 'Loading...'}
				{this.state.error && 'Could not process your request.'}
				{this.state.forecastData && (
					<div>
						<h1>{this.state.forecastData.city}</h1>
						<h1>{formatDateFromDt(this.state.forecastData.forecast.dt)}</h1>
						{this.state.forecastData.city}
						<br />
						{this.state.forecastData.forecast.weather[0].description}
						<br />
					</div>
				)}
			</div>
		);
	}
}
ForecastDetail.propTypes = {
	location: PropTypes.object.isRequired,
};

module.exports = ForecastDetail;
