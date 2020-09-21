let rerenderEntireTree=()=>{}
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

let state: RootStateType = {
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
        newMessage:'Hello',
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra' },
            { id: 3, message: 'Yo' }
        ]
    },
    sidebar: {}
}
export const updateNewMessageText=(newtext:string)=>{
    state.dialogsPage.newMessage=newtext
    rerenderEntireTree()
}
export const addMassage=()=>{
    const newMassage={id:6, message:state.dialogsPage.newMessage}
    state.dialogsPage.messagesData.push(newMassage)
    state.dialogsPage.newMessage=''
    rerenderEntireTree()
}

export const updateNewPostText=(newtext:string)=>{
    state.profilePage.newPostText=newtext
    rerenderEntireTree()
}
export const addPost=()=>{
    const newPost:PostDataType={
        id:5,
        message:state.profilePage.newPostText,
        likeCounts:0    
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}
export const subscribe=(observer:() => void)=>{
    rerenderEntireTree=observer
}

export default state