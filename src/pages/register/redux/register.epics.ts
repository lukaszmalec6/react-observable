import axios from 'axios';
import {config} from '../../../config';
import {Epic, ActionsObservable} from 'redux-observable';
import {filter, switchMap} from 'rxjs/operators';
import {isOfType} from 'typesafe-actions';
import {RegisterActionsType} from './register.types';
import {RegisterActions, registerSuccessAction, registerFailAction} from './register.actions';
import * as crypto from 'crypto-js';
export const registerEpic: Epic<any, any> = (action$: ActionsObservable<RegisterActionsType>) =>
	action$.pipe(
		filter(isOfType(RegisterActions.Register)),
		switchMap(async action => {
			try {
				await axios.post(`${config.API_URL}/auth/register`, {
					...action.registerUserData,
					password: crypto.SHA256(action.registerUserData.password).toString()
				});
				return registerSuccessAction();
			} catch (err) {
				return registerFailAction(err.message);
			}
		})
	);