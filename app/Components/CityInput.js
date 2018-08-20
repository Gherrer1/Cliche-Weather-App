const React = require('react');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');

class CityInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.updateCityText = this.updateCityText.bind(this);
    }

    updateCityText(event) {
        let newText = event.target.value;
        this.setState({
            city: newText
        });
    }

    render() {
        return (
            <div style={this.props.style}>
                <input
                    type="text"
                    className="city-input"
                    placeholder="St. George, Utah"
                    value={this.state.city}
                    onChange={this.updateCityText}
                    className="city-input"
                />
                <Link
                    className="get-weather-btn"
                    to={`/forecast?city=${this.state.city.trim()}`}
                >
                    Get Weather
                </Link>
            </div>
        );
    }
}
CityInput.propTypes = {
    style: PropTypes.object
};

module.exports = CityInput;
