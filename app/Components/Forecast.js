const React = require('react');
const PropTypes = require('prop-types');
const { Link } = require('react-router-dom');
const queryString = require('query-string');

class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			forecastData: null,
		};
	}

	componentDidMount() {
		const parsedQuery = queryString.parse(this.props.location.search);
		setTimeout(() => this.setState({
			loading: false,
			forecastData: {
				city: parsedQuery.city,
			},
		}), 1500);
	}

	render() {
		const parsedQuery = queryString.parse(this.props.location.search);
		let viewMeat;
		if (this.state.loading) {
			viewMeat = <div>Loading</div>;
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
