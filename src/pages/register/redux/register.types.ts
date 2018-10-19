import {IRegisterUserData} from '../register.interfaces';
import {RegisterActions} from './register.actions';

export type Register = {
	readonly type: typeof RegisterActions.Register;
	registerUserData: IRegisterUserData;
};

export type RegisterFail = {
	readonly type: typeof RegisterActions.RegisterFail;
	serverMessage: string;
};

export type RegisterSuccess = {
	readonly type: typeof RegisterActions.RegisterSuccess;
};

export type RegisterActionsType = Register | RegisterFail | RegisterSuccess;