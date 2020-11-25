import React, { ReactNode } from 'react'
import style from './FormsControls.module.css'


const FormsControls = (Element:string):React.FC<any> => ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error

    return (
      <div className={hasError?style.error:''}>
        <div>
            <Element {...input} {...props}/>
        </div>
        {hasError&&<span>{meta.error}</span>}
      </div>
    );
}

export const Input = FormsControls('input')
export const Textarea = FormsControls('textarea')