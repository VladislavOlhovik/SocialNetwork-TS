import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { ActionTypes, RootStateType } from '../../Redux/store';

const mapStateToProps = (state:RootStateType)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:(action:ActionTypes)=>void)=>{
    return{
        updateNewMessage: (e:string)=>dispatch(updateNewMessageActionCreator(e)),
        addMessage: ()=>dispatch(addMessageActionCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)