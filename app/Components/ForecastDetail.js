const React = require('react');
const PropTypes = require('prop-types');
const queryString = require('query-string');

class ForecastDetail extends React.Component {
	constructor(props) {
		super(props);

		// if location.state, set state a certain way
		if (props.location.state) {
			this.state = {
				loading: false,
				error: false,
				forecastData: props.location.state,
			}
		} else {
			this.state = {
				loading: true,
				error: false,
				forecastData: null,
			};
		}
	}

	render() {
		const { city } = queryString.parse(this.props.location.search);
		return (
			<div>
				{this.state.loading && 'Loading...'}
				{this.state.error && 'Could not process your request.'}
				{this.state.forecastData && (
					<div>
						<h1>{this.state.forecastData.city}</h1>
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
