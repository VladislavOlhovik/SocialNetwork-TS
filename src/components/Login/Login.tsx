import React from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { require } from '../../utils/validadors'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { login } from '../../Redux/auth-reducer'
import { RootType } from '../../Redux/redux-store'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

type propsType = {
    captchaUrl: null|string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, propsType> & propsType> = ({
    handleSubmit, 
    error, 
    captchaUrl, 
}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [require], Input)}
            {createField('Password', 'password', [require], Input, {type:'password'})}
            {createField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'remember me' )}
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('Captcha', 'captcha', [require], Input)}
            <div className={error?style.formError:''}>
                {error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LogiReduxForm = reduxForm<FormDataType, propsType>({form: 'login'})(LoginForm)

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
  captcha: string
};
type LoginPropsType = {
    login:(login: string, password: string, rememberMe: boolean, captcha: string)=>void
    isAuth:boolean
    captchaUrl: null|string
}

const Login = ({isAuth, login, captchaUrl }: LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }
    if(isAuth) return <Redirect to={'/profile'}/>
    return (
      <div>
        <h1>Login</h1>
        <LogiReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
      </div>
    );
}

const mapStateToProps = (state: RootType) => {
    return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps,{ login })(Login)