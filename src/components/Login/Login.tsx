import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { require } from '../../utils/validadors'
import { Input } from '../common/FormsControls/FormsControls'

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

const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData);
    }
    return (
      <div>
        <h1>Login</h1>
        <LogiReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

export default Login