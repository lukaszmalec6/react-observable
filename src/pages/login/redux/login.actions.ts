import {ILoginUserData} from '../login.interfaces';
import {Login, LoginSuccess, LoginFail} from './login.types';

export enum LoginActions  {
	 Login = '[login] go',
	 LoginSuccess = '[login] success',
	 LoginFail = '[login] fail'
}

export const loginAction = (loginUserData: ILoginUserData): Login => ({
	type: LoginActions.Login,
	loginUserData
});

export const loginSuccessAction = (token: string): LoginSuccess => ({
		type: LoginActions.LoginSuccess,
		token
});

export const loginFailAction = (serverMessage: string): LoginFail => ({
		type: LoginActions.LoginFail,
		serverMessage
});
