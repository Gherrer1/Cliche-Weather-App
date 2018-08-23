const React = require('react');
const { BrowserRouter: Router, Route, Switch } = require('react-router-dom');
const Nav = require('./Nav');
const Forecast = require('./Forecast');
const ForecastDetail = require('./ForecastDetail');
const Home = require('./Home');

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/forecast' component={Forecast} />
					<Route path='/details/:date' component={ForecastDetail} />
					<Route component={() => (<div>404</div>)} />
				</Switch>
			</div>
		</Router>
	);
}

module.exports = App;
