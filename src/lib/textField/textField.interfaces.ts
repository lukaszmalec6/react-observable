import {SyntheticEvent} from 'react';

export interface ITextFieldProps {
	min: number;
	max: number;
	name: string;
	validators: string[];
	onChange?: (e: SyntheticEvent<EventTarget>) => any;
	onBlur?: (arg: any, arg2?: any) => any;
	hideLabel?: boolean;
	label?: string;
	placeholder?: string;
	required?: boolean;
	autofocus?: boolean;
	width?: string;
	height?: string;
	password?: boolean;
}

export interface ITextFieldState {
	isFocused: boolean;
	value: string;
	validationErrors: string[];
}
