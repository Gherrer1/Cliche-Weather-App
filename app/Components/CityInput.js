const React = require('react');
const { Link } = require('react-router-dom');
const PropTypes = require('prop-types');

class CityInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: '',
		};

		this.updateCityText = this.updateCityText.bind(this);
		this.inputEmpty = this.inputEmpty.bind(this);
	}

	updateCityText(event) {
		const newText = event.target.value;
		this.setState({
			city: newText,
		});
	}

	inputEmpty() {
		return this.state.city.trim().length === 0;
	}

	render() {
		return (
			<div style={this.props.style}>
				<input
					type='text'
					className='city-input'
					placeholder='St. George, Utah'
					value={this.state.city}
					onChange={this.updateCityText}
				/>
				<Link
					className={`get-weather-btn ${this.inputEmpty() ? 'disabled-btn' : ''}`}
					to={{
						pathname: '/forecast',
						search: `?city=${this.state.city}`,
					}}
					onClick={
						e => this.inputEmpty() && e.preventDefault()
					}
				>
				Get Weather
				</Link>
			</div>
		);
	}
}
CityInput.propTypes = {
	style: PropTypes.object,
};
CityInput.defaultProps = {
	style: {},
};

module.exports = CityInput;
