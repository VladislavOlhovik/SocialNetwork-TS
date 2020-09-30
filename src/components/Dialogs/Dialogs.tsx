import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import { StoreType } from '../../Redux/state';
type dialogsPropsType={
    store: StoreType
}
const Dialogs = (props:dialogsPropsType) => {
    const addMessage=()=>{
        props.store.dispatch(addMessageActionCreator(''))
    }
    const onMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.store.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.store.getState().dialogsPage.dialogsData.map(el=><DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.store.getState().dialogsPage.messagesData.map(el=><Message message={el.message}/>)}
                <textarea  onChange={onMessageChange} placeholder='Enter your message' value={props.store.getState().dialogsPage.newMessage}></textarea>
                <button onClick={addMessage}>sent</button>
            </div>
        </div>
    )
}

export default Dialogs