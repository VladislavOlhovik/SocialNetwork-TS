import { v1 } from "uuid"
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id?: string
    message: string
}
export type DialogsActionType = 
ReturnType<typeof addMessageActionCreator>

const initialState:DialogsPageType = {
    dialogsData: [
        { id: v1(), name: 'Dimych' },
        { id: v1(), name: 'Andrey' },
        { id: v1(), name: 'Sveta' },
        { id: v1(), name: 'Sasha' },
        { id: v1(), name: 'Viktor' },
        { id: v1(), name: 'Valera' },
    ],
    messagesData: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'How is your it-kamasutra' },
        { id: v1(), message: 'Yo' }
    ]
}
const dialogsReducer=(state=initialState,action:DialogsActionType)=>{
    switch(action.type){
        case 'dialogs/ADD-MESSAGE':
            const newMassage={id:v1(), message:action.newMessage}
            return {
                ...state,
                messagesData: [...state.messagesData, newMassage],
                newMessage: ''
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessage: string) => ({
     type: 'dialogs/ADD-MESSAGE', newMessage }as const);

export default dialogsReducer