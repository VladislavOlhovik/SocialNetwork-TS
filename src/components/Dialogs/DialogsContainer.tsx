import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../Redux/dialogs-reducer';
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
        addMessage: (newMessage: string)=>dispatch(addMessageActionCreator(newMessage)),
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) 