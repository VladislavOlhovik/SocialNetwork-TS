import dialogsReducer, { addMessageActionCreator, updateNewMessageActionCreator } from "./dialogs-reducer"
import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator } from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

export type MessagesDataType = {
    id?: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostDataType = {
    id?: number
    message: string
    likeCounts: number
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessage:string
}
export type ProfilePageType = {
    newPostText:string
    postData: Array<PostDataType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}
export type SidebarType={}
export type ActionTypes = ReturnType<typeof addMessageActionCreator> |
ReturnType<typeof updateNewMessageActionCreator>|ReturnType<typeof addPostActionCreator>|
ReturnType<typeof updateNewPostTextActionCreator>
export type StoreType={
    _state:RootStateType
    getState:()=>RootStateType
    rerenderEntireTree:()=>void
    subscribe:(observer:()=>void)=>void
    dispatch:(action:ActionTypes)=>void
}

let store:StoreType ={
    _state: {
        profilePage: {
            newPostText:'Hello',
            postData: [
                { id: 1, message: 'Hi, how are you?', likeCounts: 12 },
                { id: 2, message: "It's my first post", likeCounts: 11 },
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {},  
    subscribe(observer) {
        this.rerenderEntireTree=observer
    },
    dispatch(action){
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)

        this.rerenderEntireTree()
    }
}

export default store