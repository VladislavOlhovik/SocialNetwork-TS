import { ActionTypes, PostDataType, ProfilePageType } from "./state"

const profileReducer=(state:ProfilePageType,action:ActionTypes)=>{
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
export const addPostActionCreator = (newText:string) => ({ type: 'ADD-POST',newText: newText });
export const updateNewPostTextActionCreator = (newText:string) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText
});
export default profileReducer