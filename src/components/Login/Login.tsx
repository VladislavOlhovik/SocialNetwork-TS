import React from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { require } from '../../utils/validadors'
import { Input } from '../common/FormsControls/FormsControls'
import { login } from '../../Redux/auth-reducer'
import { RootType } from '../../Redux/redux-store'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       validate={[require]}
                       component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} 
                       name={'password'} 
                       validate={[require]}
                       component={Input}/>
            </div>
            <div className={props.error?style.formError:''}>
                {props.error}
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>remember me
            </div>
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

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }
    if(props.isAuth) return <Redirect to={'/profile'}/>
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