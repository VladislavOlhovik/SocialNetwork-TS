import { updateObjectInArray } from './../utils/object-helpers';
import { Dispatch } from 'redux';
import { usersAPI, followAPI } from './../api/api';
export type UsersType = {
    id: string 
    photos:{small:string} 
    followed: boolean 
    name: string 
    status: string 
    location: {city: string, country:string}
}
export type UsersPageType={
    users:Array<UsersType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:string[]
}
export type ActionType = ReturnType<typeof followSuccess>
|ReturnType<typeof unFollowSuccess>
|ReturnType<typeof setUsers>
|ReturnType<typeof setCurrentPage>
|ReturnType<typeof setTotalUsersCount>
|ReturnType<typeof toggleIsFetching>
|ReturnType<typeof toggleFolowingProgress>

const initialState:UsersPageType = {
    users:[],
    pageSize:15,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    followingInProgress:[],
  }

const usersReducer=(state=initialState,action:ActionType)=>{
    switch (action.type) {
        case 'users/FOLLOW':
          return {
            ...state,
            users: updateObjectInArray( state.users, 'id', action.userId, {followed:true} )
          }
        case 'users/UNFOLLOW':
          return {
            ...state,
            users: updateObjectInArray( state.users, 'id', action.userId, {followed:false} )
          }
        case 'users/SET_USERS':
          return {...state, users:action.users} 
        case 'users/SET_CURRENT_PAGE':
          return {...state, currentPage:action.pageNumber} 
        case 'users/SET_TOTAL_USERS_COUNT':
          return {...state, totalUsersCount:action.totalUsersCount} 
        case 'users/TOGGLE_IS_FETCHING':
          return {...state, isFetching:action.isFetching} 
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
          return {
            ...state,
            followingInProgress:action.payload.isFetching
            ?[...state.followingInProgress, action.payload.userId]
            :state.followingInProgress.filter(id=>id!==action.payload.userId)
          }
        default:
          return state;
      }
}
export const followSuccess = (userId:string) => ({ type: 'users/FOLLOW', userId }as const);
export const unFollowSuccess = (userId:string) => ({type:'users/UNFOLLOW', userId}as const);
export const setUsers = (users:UsersType[]) => ({type: 'users/SET_USERS', users}as const);
export const setCurrentPage = (pageNumber:number) => ({type: 'users/SET_CURRENT_PAGE', pageNumber}as const);
export const setTotalUsersCount = (totalUsersCount:number) => ({type: 'users/SET_TOTAL_USERS_COUNT', totalUsersCount}as const);
export const toggleIsFetching = (isFetching:boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching}as const);
export const toggleFolowingProgress = (isFetching:boolean, userId:string) => ({type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', payload:{isFetching,userId}}as const);

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: (action: ActionType) => void) => {
  dispatch(toggleIsFetching(true))
  let data = await usersAPI.getUsers(currentPage, pageSize)
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
}
export const getUsersCurrentPage = (currentPage: number, pageSize: number) => async (dispatch: (action: ActionType) => void) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
};

const following = async (userId: string, dispatch: Dispatch, apiMethod: any, actionCreator: any ) => { 
  dispatch(toggleFolowingProgress(true, userId));
  let data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFolowingProgress(false, userId));
}

export const follow = (userId: string) => async (dispatch: Dispatch) => {
  following(userId, dispatch, followAPI.follow, followSuccess )
};
export const unFollow = (userId: string) => async (dispatch: Dispatch) => {
  following(userId, dispatch, followAPI.unFollow, unFollowSuccess )
};

export default usersReducer