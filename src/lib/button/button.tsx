import * as React from 'react';
import * as classNames from 'classnames';
import './button.scss';
import {IButtonComponentProps} from './button.interfaces';

export class Button extends React.Component<IButtonComponentProps, {}> {
	render() {
		const buttonClassNames = classNames({
			button: true,
			small: this.props.small,
			medium: this.props.medium,
			large: this.props.large,
			enabled: !this.props.disabled,
			disabled: this.props.disabled
		});
		return (
			<button disabled={this.props.disabled} className={buttonClassNames} onClick={this.props.onClick}>
				{this.props.label}
			</button>
		);
	}
}
