import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import RouteWithSubRoutes from './RouteWithSubRoutes'
import routers from'./Router.config';
import Home from './Home'
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
	return <Provider store={store}>
		<Router>
			<Switch>
			{routers.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
			<Route component={Home}/>
			</Switch>
		</Router>
	</Provider>
}
export default App;

