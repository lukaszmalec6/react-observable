import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import * as React from 'react';
import {DashboardPage, LoginPage, RegisterPage} from './pages';
import {PrivateRoute} from './utils/routerGuards/privateRoute';

const NoMatch = () => <Redirect to='dashboard' />;

class Router extends React.Component<{}, {}> {
	render() {
		return (
			<BrowserRouter>
				<div className='appContainer'>
					<Switch>
						<Route path='/login' component={LoginPage} />
						<Route path='/register' component={RegisterPage} />
						<PrivateRoute path='/dashboard' component={DashboardPage} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default Router;
