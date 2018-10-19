import {LoginActions} from './login.actions';
import {ILoginState} from '../login.interfaces';
import {LoginActionsType} from './login.types';

const initialState: ILoginState = {
	loaded: false,
	loggedIn: false
};
export function loginReducer(state = initialState, action: LoginActionsType): ILoginState {
	switch (action.type) {
		case LoginActions.Login:
			return {
				...state,
				loaded: false,
				loggedIn: false,
			};

		case LoginActions.LoginSuccess:
			localStorage.setItem(`authToken`, action.token);
			return {
				...state,
				loaded: true,
				loggedIn: true
			};

		case LoginActions.LoginFail:
			return {
				...state,
				loaded: true,
				loggedIn: false,
				error: true,
				serverMessage: action.serverMessage
			};

		default:
			return state;
	}
}
