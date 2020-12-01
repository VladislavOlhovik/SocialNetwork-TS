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
          return {...state, users:action.users} 
        case 'SET_CURRENT_PAGE':
          return {...state, currentPage:action.pageNumber} 
        case 'SET_TOTAL_USERS_COUNT':
          return {...state, totalUsersCount:action.totalUsersCount} 
        case 'TOGGLE_IS_FETCHING':
          return {...state, isFetching:action.isFetching} 
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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
export const followSuccess = (userId:string) => ({ type: 'FOLLOW', userId }as const);
export const unFollowSuccess = (userId:string) => ({type:'UNFOLLOW', userId}as const);
export const setUsers = (users:UsersType[]) => ({type: 'SET_USERS', users}as const);
export const setCurrentPage = (pageNumber:number) => ({type: 'SET_CURRENT_PAGE', pageNumber}as const);
export const setTotalUsersCount = (totalUsersCount:number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount}as const);
export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}as const);
export const toggleFolowingProgress = (isFetching:boolean, userId:string) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', payload:{isFetching,userId}}as const);

export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: (action: ActionType) => void) => {
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
}
export const getUsersCurrentPage = (currentPage: number, pageSize: number) => (dispatch: (action: ActionType) => void) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  });
};
export const follow = (userId: string) => (dispatch: (action: ActionType) => void) => {
  dispatch(toggleFolowingProgress(true, userId));
  followAPI.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFolowingProgress(false, userId));
  });
};
export const unFollow = (userId: string) => (dispatch: (action: ActionType) => void) => {
  dispatch(toggleFolowingProgress(true, userId));
  followAPI.unFollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unFollowSuccess(userId));
    }
    dispatch(toggleFolowingProgress(false, userId));
  });
};

export default usersReducer