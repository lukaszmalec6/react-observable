import {ILoginUserData} from '../login.interfaces';
import {LoginActions} from './login.actions';


export type Login = {
	readonly type: typeof LoginActions.Login;
	loginUserData: ILoginUserData;
};

export type LoginSuccess = {
	readonly type: typeof LoginActions.LoginSuccess;
	token: string;
};

export type LoginFail= {
	readonly type: typeof LoginActions.LoginFail;
	serverMessage: string;
};

export type LoginActionsType = Login | LoginFail | LoginSuccess;


