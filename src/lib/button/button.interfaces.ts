import {SyntheticEvent} from 'react';

export interface IButtonComponentProps {
	label?: string;
	onClick?: (e?: SyntheticEvent<EventTarget>) => any;
	disabled?: boolean;
	small?: boolean;
	medium?: boolean;
	large?: boolean;
}
