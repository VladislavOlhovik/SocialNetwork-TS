import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { DialogsActionType } from '../../Redux/dialogs-reducer';
import { RootType } from '../../Redux/redux-store';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { ComponentType } from 'react';

const mapStateToProps = (state:RootType)=>{
    return{
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch:(action:DialogsActionType)=>void)=>{
    return{
        updateNewMessage: (e:string)=>dispatch(updateNewMessageActionCreator(e)),
        addMessage: ()=>dispatch(addMessageActionCreator())
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) 