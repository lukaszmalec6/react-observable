export interface IRegisterComponentProps {
	register: (data: IRegisterUserData) => any;
}
export interface IRegisterComponentState {
	displayName: IRegisterUserDataInput;
	email: IRegisterUserDataInput;
	password: IRegisterUserDataInput;
	repeatPassword: IRegisterUserDataInput;
}

interface IRegisterUserDataInput {
	value: string;
	isFocused: boolean;
	isValid: boolean;
}

export interface IRegisterUserData {
	displayName: string;
	email: string;
	password: string;
}
