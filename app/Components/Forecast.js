const React = require('react');
const PropTypes = require('prop-types');
const { Link } = require('react-router-dom');
const queryString = require('query-string');
const api = require('../utils/api');

class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			forecastData: null,
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
				forecastData: {
					city: response.city.name,
					fiveDataData: response.list,
				},
			}))
			.catch(() => this.setState({
				loading: false,
				error: true,
			}));
	}

	render() {
		let viewMeat;
		if (this.state.loading) {
			viewMeat = <div>Loading</div>;
		}
		if (this.state.error) {
			viewMeat = <div>There was an error processing your request.</div>;
		}
		if (this.state.forecastData) {
			viewMeat = <div>{JSON.stringify(this.state.forecastData)}</div>;
		}
		return (
			<div>
				<Link to='/'>Back</Link>
				<br />
				<Link to='/details'>Detail</Link>
				<br />
				{viewMeat}
			</div>
		);
	}
}
Forecast.propTypes = {
	location: PropTypes.object.isRequired,
};

module.exports = Forecast;
