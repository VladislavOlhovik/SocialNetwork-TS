import { Profile } from './../components/Profile/Profile';
import { v1 } from "uuid"
import dialogsReducer, { addMessageActionCreator, updateNewMessageActionCreator } from "./dialogs-reducer"
import profileReducer, { addPostActionCreator, setUserProfile, updateNewPostTextActionCreator } from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

export type MessagesDataType = {
    id?: string
    message: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type PostDataType = {
    id?: string
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
    profile:any
}
// export type ProfileDataType = {
//     aboutMe:string
//     contacts:{}
//     lookingForAJob:boolean
//     lookingForAJobDescription:string
//     fullName:string
//     userId:number
//     photos:{
//         small:string
//         large:string
//     }
// }
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}
export type SidebarType={}
export type ActionTypes = ReturnType<typeof addMessageActionCreator> |
ReturnType<typeof updateNewMessageActionCreator>|ReturnType<typeof addPostActionCreator>|
ReturnType<typeof updateNewPostTextActionCreator>|ReturnType<typeof setUserProfile>
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
                { id: v1(), message: 'Hi, how are you?', likeCounts: 12 },
                { id: v1(), message: "It's my first post", likeCounts: 11 },
            ],
            profile:null,

        },
        dialogsPage: {
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