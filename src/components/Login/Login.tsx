import React from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { require } from '../../utils/validadors'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { login } from '../../Redux/auth-reducer'
import { RootType } from '../../Redux/redux-store'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [require], Input)}
            {createField('Password', 'password', [require], Input, {type:'password'})}
            <div className={error?style.formError:''}>
                {error}
            </div>
            {createField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'remember me' )}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LogiReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
};
type LoginPropsType = {
    login:(login: string, password: string, rememberMe: boolean)=>void
    isAuth:boolean
}

const Login = ({isAuth, login}: LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        login(formData.login, formData.password, formData.rememberMe);
    }
    if(isAuth) return <Redirect to={'/profile'}/>
    return (
      <div>
        <h1>Login</h1>
        <LogiReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

const mapStateToProps = (state: RootType) => {
    return {
      isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{ login })(Login)