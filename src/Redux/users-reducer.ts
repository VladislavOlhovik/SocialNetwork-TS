import { v1 } from "uuid"
export type UsersType = {
    id: string 
    photoUrl:string 
    followed: boolean 
    fullName: string 
    status: string 
    location: {city: string, country:string}
}
export type UsersPageType={
    users:Array<UsersType>
}
export type ActionType = ReturnType<typeof followAC>|ReturnType<typeof unFollowAC>|ReturnType<typeof setUsersAC>

const initialState:UsersPageType = {
    users:[]}

const usersReducer=(state=initialState,action:ActionType)=>{
    switch (action.type) {
        case 'FOLLOW':
          return {
            ...state,
            users: state.users.map(el=>{
              if(el.id===action.userId){
                return {...el,followed:true}
              }
              return el
            })
          }
        case 'UNFOLLOW':
          return {
            ...state,
            users: state.users.map(el=>{
              if(el.id===action.userId){
                return {...el,followed:false}
              }
              return el
            })
          }
        case 'SET_USERS':
          return {...state, users:[...state.users, ...action.users]} 
        default:
          return state;
      }
}
export const followAC = (userId:string) => ({ type: 'FOLLOW', userId }as const);
export const unFollowAC = (userId:string) => ({type:'UNFOLLOW', userId}as const);
export const setUsersAC = (users:UsersType[]) => ({type: 'SET_USERS', users}as const);
export default usersReducer