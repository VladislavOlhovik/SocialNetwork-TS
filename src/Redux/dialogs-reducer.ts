import { v1 } from "uuid"
import { ActionTypes, DialogsPageType } from "./store"

const initialState:DialogsPageType = {
    dialogsData: [
        { id: v1(), name: 'Dimych' },
        { id: v1(), name: 'Andrey' },
        { id: v1(), name: 'Sveta' },
        { id: v1(), name: 'Sasha' },
        { id: v1(), name: 'Viktor' },
        { id: v1(), name: 'Valera' },
    ],
    newMessage:'',
    messagesData: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'How is your it-kamasutra' },
        { id: v1(), message: 'Yo' }
    ]
}
const dialogsReducer=(state=initialState,action:ActionTypes)=>{
    switch(action.type){
        case 'ADD-MESSAGE':
            const newMassage={id:v1(), message:state.newMessage}
            return {
                ...state,
                messagesData: [...state.messagesData, newMassage],
                newMessage: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessage: action.newText }
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