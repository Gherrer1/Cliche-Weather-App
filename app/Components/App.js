const React = require('react');
const { BrowserRouter: Router, Route, Link } = require('react-router-dom');
const Nav = require('./Nav');
const Forecast = require('./Forecast');

function FakeHome() {
	return <div>Home</div>;
}

function FakeDetail() {
	return <div>Detail</div>;
}

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Link to='/forecast'>Forecast</Link>
				<Route exact path='/' component={FakeHome} />
				<Route path='/forecast' component={Forecast} />
				<Route path='/details' component={FakeDetail} />
			</div>
		</Router>
	);
}

module.exports = App;
