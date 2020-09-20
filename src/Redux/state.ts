import { rerenderEntireTree } from "../render"

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
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}
export type SidebarType={}

let state: RootStateType = {
    profilePage: {
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
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ]
    },
    sidebar: {}
}

export const addPost=(postMessage:string)=>{
    const newPost:PostDataType={
        id:5,
        message:postMessage,
        likeCounts:0    
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export default state