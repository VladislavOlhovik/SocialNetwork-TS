import React, { FunctionComponent } from 'react'
import { Field } from 'redux-form';
import style from './FormsControls.module.css'
import { ValidatorsType } from '../../../utils/validadors'



const FormsControls = (Element:string):React.FC<any> => ({input, meta:{touched,error}, ...props}) => {
    
    const hasError = touched && error

    return (
      <div className={hasError?style.error:''}>
        <div>
            <Element {...input} {...props}/>
        </div>
        {hasError&&<span>{error}</span>}
      </div>
    );
}

export const Input = FormsControls('input')
export const Textarea = FormsControls('textarea')

export const createField = (placeholder: string|null, name: string, 
  validate: ValidatorsType[], component:FunctionComponent<any>, 
  props:any={}, text:string='' ) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validate}
      component={component}
      {...props}
    />
    {text}
  </div>
);