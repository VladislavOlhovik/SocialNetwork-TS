import { ActionTypes, DialogsPageType } from "./state"

const dialogsReducer=(state:DialogsPageType,action:ActionTypes)=>{
    switch(action.type){
        case 'ADD-MESSAGE':
            const newMassage={id:6, message:state.newMessage}
            state.messagesData.push(newMassage)
            state.newMessage=''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessage=action.newText
            return state
        default:
            return state
    }
}
export const addMessageActionCreator = (newText:string) => ({ type: 'ADD-MESSAGE',newText: newText });
export const updateNewMessageActionCreator = (newText:string) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newText: newText
});
export default dialogsReducer