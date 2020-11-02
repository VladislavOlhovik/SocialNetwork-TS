import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { DialogsDataType } from '../../../Redux/dialogs-reducer';

const DialogItem = (props:DialogsDataType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem