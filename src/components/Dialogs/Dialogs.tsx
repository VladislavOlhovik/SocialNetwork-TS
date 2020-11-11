import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../Redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';

type dialogsPropsType={
    dialogsPage:DialogsPageType
    addMessage:()=>void
    updateNewMessage:(e:string)=>void
    isAuth: boolean
}
const Dialogs = (props:dialogsPropsType) => {
    const addMessage=()=>{
        props.addMessage()
    }
    const onMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewMessage(e.currentTarget.value)
    }
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(el=><DialogItem key={el.id} name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map(el=><Message key={el.id} message={el.message}/>)}
                <textarea  onChange={onMessageChange} placeholder='Enter your message' value={props.dialogsPage.newMessage}></textarea>
                <button onClick={addMessage}>sent</button>
            </div>
        </div>
    )
}

export default Dialogs