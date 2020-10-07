import { ActionTypes, PostDataType, ProfilePageType } from "./store"

const initialState:ProfilePageType = {
    newPostText:'Hello',
    postData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 12 },
        { id: 2, message: "It's my first post", likeCounts: 11 },
    ]
}
const profileReducer=(state=initialState,action:ActionTypes)=>{
    switch(action.type){
        case 'ADD-POST':
            const newPost:PostDataType={
                id:5,
                message:state.newPostText,
                likeCounts:0    
            }
            state.postData.unshift(newPost)
            state.newPostText=''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText=action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: 'ADD-POST' } as const);
export const updateNewPostTextActionCreator = (newText:string) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText
}as const);
export default profileReducer