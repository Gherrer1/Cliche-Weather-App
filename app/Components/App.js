const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Nav = require('./Nav');

function FakeHome() {
	return <div>Home</div>;
}

function FakeForecast() {
	return <div>Forecast</div>;
}

function FakeDetail() {
	return <div>Detail</div>;
}

function App() {
	return (
		<Router>
			<div>
				<Nav />
			</div>
		</Router>
	);
}

module.exports = App;
