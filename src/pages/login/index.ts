import {connect} from 'react-redux';
import {Login} from './login';
import {loginAction} from './redux/login.actions';
import {ILoginUserData, ILoginComponentState, ILoginComponentProps} from './login.interfaces';

const mapStateToProps = (state: ILoginComponentState) => state;

const mapDispatchToProps = (dispatch): ILoginComponentProps => ({
    login: (loginUserData: ILoginUserData) => dispatch(loginAction(loginUserData))
});

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export * from './redux/login.ecpics';