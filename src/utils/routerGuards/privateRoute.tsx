import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {loggedInGuard} from './loggedIn.guard';

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
        render={props => loggedInGuard() ? (<Component {...props} />) : (<Redirect to={{pathname: '/login'}}/>)}
    />
);
