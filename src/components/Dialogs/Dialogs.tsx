import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../Redux/dialogs-reducer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, require } from '../../utils/validadors';


type dialogsPropsType={
    dialogsPage:DialogsPageType
    addMessage:(newMessage: string)=>void
}
const Dialogs = (props:dialogsPropsType) => {
    const addMessage=(values:DialogsFormDataType)=>{
        props.addMessage(values.newMessage)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(el=><DialogItem key={el.id} name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map(el=><Message key={el.id} message={el.message}/>)}
                <DialogsReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

type DialogsFormDataType = {
    newMessage: string
}

const maxLength = maxLengthCreator(10)

const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder='Enter your message'
                       validate={[require, maxLength]}
                       name='newMessage'/>
            </div> 
            <div>
                <button>sent</button>
            </div>
        </form>
    )
}

const  DialogsReduxForm = reduxForm<DialogsFormDataType>({ form: 'dialogAddMassage' })(DialogsForm)

export default Dialogs