import { createSelector } from "reselect"
import { RootType } from "./redux-store"
import { UsersType } from "./users-reducer"

export const getUsersSelector = (state: RootType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users: UsersType[]) => {
    return users.filter(u=>true)
})
export const getPageSize = (state: RootType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootType) => {
    return state.usersPage.followingInProgress
}