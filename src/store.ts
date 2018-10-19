import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {loginEpic} from './pages/login';
import {loginReducer} from './pages/login/redux/login.reducer';
import {registerEpic} from './pages/register';
/* tslint:disable */
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
	}
}
const rootEpic = combineEpics(loginEpic, registerEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const rootReducer = combineReducers({
	loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
