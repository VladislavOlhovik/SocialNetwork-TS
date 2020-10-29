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
}
export type ActionType = ReturnType<typeof follow>
|ReturnType<typeof unFollow>
|ReturnType<typeof setUsers>
|ReturnType<typeof setCurrentPage>
|ReturnType<typeof setTotalUsersCount>
|ReturnType<typeof toggleIsFetching>

const initialState:UsersPageType = {
    users:[],
    pageSize:15,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
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
        default:
          return state;
      }
}
export const follow = (userId:string) => ({ type: 'FOLLOW', userId }as const);
export const unFollow = (userId:string) => ({type:'UNFOLLOW', userId}as const);
export const setUsers = (users:UsersType[]) => ({type: 'SET_USERS', users}as const);
export const setCurrentPage = (pageNumber:number) => ({type: 'SET_CURRENT_PAGE', pageNumber}as const);
export const setTotalUsersCount = (totalUsersCount:number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount}as const);
export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}as const);

export default usersReducer