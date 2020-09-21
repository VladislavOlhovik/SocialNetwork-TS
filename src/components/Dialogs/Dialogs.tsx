import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../Redux/state';
type dialogsPropsType={
    dialogsPage:DialogsPageType
    addMassage:()=>void
    updateNewMessageText:(newText:string)=>void
}
const Dialogs = (props:dialogsPropsType) => {
    const addMessage=()=>{
        props.addMassage()
    }
    const onMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewMessageText(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(el=><DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map(el=><Message message={el.message}/>)}
                <textarea  onChange={onMessageChange} value={props.dialogsPage.newMessage}></textarea>
                <button onClick={addMessage}>sent</button>
            </div>
        </div>
    )
}

export default Dialogs