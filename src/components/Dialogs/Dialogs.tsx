import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../Redux/state';
type dialogsPropsType={
    state:DialogsPageType
}
const Dialogs = (props:dialogsPropsType) => {
 
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map(el=><DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map(el=><Message message={el.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs