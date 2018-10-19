import {connect} from 'react-redux';
import {Register} from './register';
import {registerAction} from './redux/register.actions';
import {IRegisterUserData, IRegisterComponentState, IRegisterComponentProps} from './register.interfaces';

const mapStateToProps = (state: IRegisterComponentState) => state;

const mapDispatchToProps = (dispatch): IRegisterComponentProps => ({
	register: (registerUserData: IRegisterUserData) => dispatch(registerAction(registerUserData))
});

export const RegisterPage =  connect(mapStateToProps, mapDispatchToProps)(Register);
export * from './redux/register.epics';