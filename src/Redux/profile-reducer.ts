import { profileAPI } from './../api/api';
import { v1 } from "uuid"
import { ProfileDataFormType } from '../components/Profile/ProfileInfo/ProfileDataForm';
import { RootType } from './redux-store';
import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';

export type ProfileActionType = 
ReturnType<typeof addPostActionCreator>|
ReturnType<typeof setUserProfile>|
ReturnType<typeof setPhoto>|
ReturnType<typeof setStatus>
type ProfilePageType = {
    postData: Array<PostDataType>
    profile:any
    status:string
}
export type PostDataType = {
    id?: string
    message: string
    likeCounts: number
}
const initialState:ProfilePageType = {
    postData: [
        { id: v1(), message: 'Hi, how are you?', likeCounts: 12 },
        { id: v1(), message: "It's my first post", likeCounts: 11 },
    ],
    profile:null,
    status:'',
}
const profileReducer=(state=initialState,action:ProfileActionType)=>{
    switch(action.type){
        case 'profile/ADD-POST':
            const newPost:PostDataType={
                id:v1(),
                message:action.newPostText,
                likeCounts:0    
            }
            return {
                ...state,
                postData: [newPost, ...state.postData]
            }
        case 'profile/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET_STATUS':
            return {...state, status: action.status}
        case 'profile/SET_PHOTOS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string) => ({ type: 'profile/ADD-POST', newPostText } as const);
export const setUserProfile = (profile:any) => ({ type: 'profile/SET_USER_PROFILE', profile } as const);
export const setStatus = (status:string) => ({ type: 'profile/SET_STATUS', status } as const);
export const setPhoto = (photos:{large:string, small:string}) => ({ type: 'profile/SET_PHOTOS', photos } as const);

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let respons = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(respons.data))
}
export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    let respons = await profileAPI.getStatus(userId)
    dispatch(setStatus(respons.data))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let respons = await profileAPI.updateStatus(status)
    if(respons.data.resultCode===0){
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let respons = await profileAPI.updatePhotos(file)
    if(respons.data.resultCode===0){
        dispatch(setPhoto(respons.data.data.photos))
    }
}
export const saveProfile = (formData: ProfileDataFormType) => async (dispatch: Dispatch<any>, getState:()=>RootType) => {
    const userId = getState().auth.id
    let respons = await profileAPI.updateProfile(formData)
    if(respons.data.resultCode===0){
        userId && dispatch(getUserProfile(String(userId)))
    } else {
        let message =
            respons.data.messages.length > 0 ? respons.data.messages[0] : "Some error";
        dispatch(stopSubmit("profileEdit", { _error: message }));
        return Promise.reject()
    }
}

export default profileReducer