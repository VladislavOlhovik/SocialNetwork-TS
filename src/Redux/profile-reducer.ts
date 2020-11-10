import { profileAPI } from './../api/api';
import { v1 } from "uuid"

export type ProfileActionType = 
ReturnType<typeof addPostActionCreator>|
ReturnType<typeof updateNewPostTextActionCreator>|
ReturnType<typeof setUserProfile>
type ProfilePageType = {
    newPostText:string
    postData: Array<PostDataType>
    profile:any
}
export type PostDataType = {
    id?: string
    message: string
    likeCounts: number
}
const initialState:ProfilePageType = {
    newPostText:'Hello!',
    postData: [
        { id: v1(), message: 'Hi, how are you?', likeCounts: 12 },
        { id: v1(), message: "It's my first post", likeCounts: 11 },
    ],
    profile:null,
}
const profileReducer=(state=initialState,action:ProfileActionType)=>{
    switch(action.type){
        case 'ADD-POST':
            const newPost:PostDataType={
                id:v1(),
                message:state.newPostText,
                likeCounts:0    
            }
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: 'ADD-POST' } as const);
export const setUserProfile = (profile:any) => ({ type: 'SET_USER_PROFILE', profile } as const);
export const updateNewPostTextActionCreator = (newText:string) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText
}as const);

export const getUserProfile = (userId: string) => (dispatch: (action: ProfileActionType) => void) => {
    profileAPI.getUser(userId)
        .then(respons => {
            dispatch(setUserProfile(respons.data))
        })
}

export default profileReducer