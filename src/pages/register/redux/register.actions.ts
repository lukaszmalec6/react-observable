import {IRegisterUserData} from '../register.interfaces';
import {Register, RegisterSuccess, RegisterFail} from './register.types';

export enum RegisterActions {
	Register = '[register] go',
	RegisterSuccess = '[register] success',
	RegisterFail = '[register] fail'
}

export const registerAction = (registerUserData: IRegisterUserData): Register => ({
	type: RegisterActions.Register,
	registerUserData
});

export const registerSuccessAction = (): RegisterSuccess => ({
	type: RegisterActions.RegisterSuccess,
});

export const registerFailAction = (serverMessage: string): RegisterFail => ({
	type: RegisterActions.RegisterFail,
	serverMessage: serverMessage
});
