import axios from 'axios';
import {config} from '../../../config';
import {Epic, ActionsObservable} from 'redux-observable';
import {LoginActions, loginSuccessAction, loginFailAction} from './login.actions';
import {filter, switchMap} from 'rxjs/operators';
import {isOfType} from 'typesafe-actions';
import {LoginActionsType} from './login.types';
import * as crypto from 'crypto-js';


export const loginEpic: Epic<any, any> = (action$: ActionsObservable<LoginActionsType>) =>
	action$.pipe(
		filter(isOfType(LoginActions.Login)),
		switchMap(async action => {
			try {
				console.log(`Post user login && password: `, action.loginUserData);
				const req = await axios.post(`${config.API_URL}/login`, action.loginUserData);
				// 	password: crypto.SHA256(action.loginUserData.password).toString()
				// });
				console.log(`response: `, req.data)
				return loginSuccessAction(req.data.token);
			} catch (err) {
				return loginFailAction(err.message);
			}
		})
	);
