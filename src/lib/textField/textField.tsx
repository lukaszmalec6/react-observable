import * as React from 'react';
import * as classNames from 'classnames';
import './textField.scss';
import {ITextFieldProps, ITextFieldState} from './textField.interfaces';
import {lengthValidator, specialCharsValidator} from '../../utils/validators';
export class TextField extends React.Component<ITextFieldProps, ITextFieldState> {
	private inputElement: HTMLInputElement;

	constructor(props: ITextFieldProps) {
		super(props);
		this.state = {
			isFocused: false,
			value: '',
			validationErrors: []
		};
	}

	public componentDidMount(): void {
		this.props.autofocus && this.inputElement.focus();
	}

	private onBlur = (): void =>
		this.setState({...this.state, validationErrors: this.vlaidate(), isFocused: false},
			() => this.props.onBlur && this.props.onBlur(this.props.name, !this.state.validationErrors.length))

	private onFocus = (): void =>
		this.setState({...this.state, isFocused: true, validationErrors: []},
			() => this.props.onBlur && this.props.onBlur(this.props.name, !this.state.validationErrors.length))

	private vlaidate(): string[] {
		const validationErrors = [];
		if (!!this.state.value) {
			if (this.props.validators.includes(`length`) && !lengthValidator(this.state.value.trim(), this.props.min, this.props.max))
				validationErrors.push(`${this.props.label} must be between ${this.props.min} and ${this.props.max} characters.`);

			if (this.props.validators.includes(`specialChars`) && !specialCharsValidator(this.state.value.trim()))
				validationErrors.push(`${this.props.label} must be alphanumeric.`);
		}
		return validationErrors;
	}

	private handleOnChange = (e: React.SyntheticEvent<EventTarget>): void => {
		const target = e.target as HTMLInputElement;
		this.setState({...this.state, value: target.value});
		this.props.onChange && this.props.onChange(e);
	}

	render() {
		const inputClassNames = classNames({
			textField: true,
			focused: this.state.isFocused,
			invalid: !!this.state.validationErrors.length
		});
		const {hideLabel} = this.props;
		return (
			<div className='textFieldContainer'>
				<div>
					{!hideLabel && <span className='label'>{this.props.label}</span>}
					<input
						style={{
							width: this.props.width,
							height: this.props.height
						}}
						placeholder={this.props.placeholder}
						className={inputClassNames}
						onBlur={this.onBlur}
						onFocus={this.onFocus}
						required={this.props.required}
						min={this.props.min}
						max={this.props.max}
						name={this.props.name}
						onChange={this.handleOnChange}
						type={this.props.password ? `password` : `text`}
						ref={input => (this.inputElement = input as HTMLInputElement)}
					/>
				</div>
				{!!this.props.validators.length ? (
					<div className='validationErrorContainer'>
						{this.state.validationErrors.map((err, key) => (
							<span key={key} className='validationError'>
								{err}
								<br />
							</span>
						))}
					</div>
				) : null}
			</div>
		);
	}
}
