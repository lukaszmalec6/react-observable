import * as React from 'react';
import {TextField, Button} from '../../lib';
import {IRegisterComponentState, IRegisterComponentProps} from './register.interfaces';
import './register.scss';
export class Register extends React.Component<IRegisterComponentProps, IRegisterComponentState> {
	constructor(props: IRegisterComponentProps) {
		super(props);
		this.state = {
			displayName: {
				value: '',
				isFocused: false,
				isValid: true
			},
			email: {
				value: '',
				isFocused: false,
				isValid: true
			},
			password: {
				value: '',
				isFocused: false,
				isValid: true
			},
			repeatPassword: {
				value: '',
				isFocused: false,
				isValid: true
			}
		};
	}
	private onInputBlur = (target: string, isValid: boolean): void =>
		this.setState({...this.state, [target]: {...this.state[target], isValid: isValid}})

	private onInputChange = (e: React.SyntheticEvent<EventTarget>): void => {
		const target = e.target as HTMLInputElement;
		const value = target.value.trim();
		this.setState({...this.state, [target.name]: {...this.state[target.name], value: value}});
	}

	private onButtonClick = (): void => this.props.register({
		displayName: this.state.displayName.value,
		email: this.state.email.value,
		password: this.state.password.value
	})

	private isRegisterButtonDisabled = (): boolean => {
		const {email, password, repeatPassword, displayName} = this.state;
		return !email.value || !email.isValid ||
			!password.isValid || !password.value ||
			!repeatPassword.value || !repeatPassword.isValid ||
			!displayName.value || !displayName.isValid;
	}
	render() {
		return (
			<section className='registerContainer'>
				<TextField
					width='20em'
					required
					validators={[`length`, `specialChars`]}
					onChange={this.onInputChange}
					onBlur={this.onInputBlur}
					placeholder='Foo Bar'
					label='Display name'
					name='displayName'
					min={6}
					max={30}
				/>
				<TextField
					width='20em'
					required
					validators={[`length`]}
					onChange={this.onInputChange}
					onBlur={this.onInputBlur}
					placeholder='foo@bar.com'
					label='E-mail'
					name='email'
					min={6}
					max={30}
				/>

				<TextField
					width='20em'
					required
					validators={[`length`]}
					onChange={this.onInputChange}
					onBlur={this.onInputBlur}
					placeholder='******'
					password
					label='Password'
					name='password'
					min={6}
					max={30}
				/>
				<TextField
					width='20em'
					required
					validators={[`length`]}
					onChange={this.onInputChange}
					onBlur={this.onInputBlur}
					placeholder='******'
					password
					label='Repeat password'
					name='repeatPassword'
					min={6}
					max={30}
				/>
				<Button
					disabled={this.isRegisterButtonDisabled()}
					medium
					label='Create account'
					onClick={this.onButtonClick}
				/>
			</section>
		);
	}
}
