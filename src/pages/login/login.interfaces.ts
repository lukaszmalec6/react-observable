export interface ILoginComponentProps {
	login: (data: ILoginUserData) => any;
}
export interface ILoginComponentState {
	email: ILoginUserDataInput;
	password: ILoginUserDataInput;
}
export interface ILoginState {
	loaded: boolean;
	loggedIn: boolean;
	error?: boolean;
	serverMessage?: string;
}

interface ILoginUserDataInput {
	value: string;
	isFocused: boolean;
	isValid: boolean;
}

export interface ILoginUserData {
	email: string;
	password: string;
}

export interface ILoggedInUserData {
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	phoneNumber: string;
	picture?: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	location: {
		country: string;
		city: string;
	};
}
