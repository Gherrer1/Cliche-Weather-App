const React = require('react');
const { BrowserRouter: Router, Route, Link, Switch } = require('react-router-dom');
const Nav = require('./Nav');
const Forecast = require('./Forecast');
const Home = require('./Home');

function FakeDetail() {
	return <div>Detail</div>;
}

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Link to='/forecast'>Forecast</Link>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/forecast' component={Forecast} />
					<Route path='/details' component={FakeDetail} />
					<Route component={() => (<div>404</div>)} />
				</Switch>
			</div>
		</Router>
	);
}

module.exports = App;
