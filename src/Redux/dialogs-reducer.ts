import { ActionTypes, DialogsPageType } from "./store"

const initialState:DialogsPageType = {
    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ],
    newMessage:'',
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'Yo' }
    ]
}
const dialogsReducer=(state=initialState,action:ActionTypes)=>{
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
export const addMessageActionCreator = () => ({
     type: 'ADD-MESSAGE'}as const);
export const updateNewMessageActionCreator = (newText:string) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newText: newText
}as const);
export default dialogsReducer