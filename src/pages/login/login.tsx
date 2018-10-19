import * as React from 'react';
import './login.scss';
import {ILoginComponentState, ILoginComponentProps} from './login.interfaces';
import {TextField, Button} from '../../lib';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

export class Login extends React.Component<ILoginComponentProps, ILoginComponentState> {
	constructor(props: ILoginComponentProps) {
		super(props);
		this.state = {
			email: {
				value: '',
				isFocused: false,
				isValid: true
			},
			password: {
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

	private onButtonClick = (): void => this.props.login({email: this.state.email.value, password: this.state.password.value});
	private isLoginButtonDisabled = (): boolean => !this.state.email.value || !this.state.email.isValid || !this.state.password.isValid || !this.state.password.value;

	render() {
		const isTokenSaved = !!localStorage.getItem(`authToken`);
		return (
			<section className='loginContainer'>
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
				<Button
					disabled={this.isLoginButtonDisabled()}
					medium
					label='Proceed'
					onClick={this.onButtonClick}
				/>
				<Link to='/register' className='registerLink'>
					Create account
				</Link>
				{isTokenSaved && <Redirect to='/dashboard' />}
			</section>
		);
	}
}
