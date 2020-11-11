import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { DialogsActionType } from '../../Redux/dialogs-reducer';
import { RootType } from '../../Redux/redux-store';

const mapStateToProps = (state:RootType)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch:(action:DialogsActionType)=>void)=>{
    return{
        updateNewMessage: (e:string)=>dispatch(updateNewMessageActionCreator(e)),
        addMessage: ()=>dispatch(addMessageActionCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)