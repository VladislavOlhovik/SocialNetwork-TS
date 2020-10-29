import { v1 } from "uuid"
import { ActionTypes, PostDataType, ProfilePageType } from "./store"

const initialState:ProfilePageType = {
    newPostText:'Hello!',
    postData: [
        { id: v1(), message: 'Hi, how are you?', likeCounts: 12 },
        { id: v1(), message: "It's my first post", likeCounts: 11 },
    ],
    profile:null,
}
const profileReducer=(state=initialState,action:ActionTypes)=>{
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
export default profileReducer