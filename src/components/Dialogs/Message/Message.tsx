import React from 'react';
import s from './../Dialogs.module.css';
import { MessagesDataType } from '../../../Redux/dialogs-reducer';

const Message = (props:MessagesDataType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message