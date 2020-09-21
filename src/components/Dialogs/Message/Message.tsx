import React from 'react';
import s from './../Dialogs.module.css';
import { MessagesDataType } from '../../../Redux/state';


const Message = (props:MessagesDataType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message