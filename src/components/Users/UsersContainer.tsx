import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, UsersPageType, ActionType, UsersType} from '../../Redux/users-reducer';
import Users from './Users';
type StateType ={
    usersPage:UsersPageType
}

const mapStateToProps = (state:StateType) =>{
    return{
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:(action:ActionType)=>void)=>{
    return{
        follow: (userId:string)=>dispatch(followAC(userId)),
        unfollow: (userId:string)=>dispatch(unFollowAC(userId)),
        setUsers: (users:UsersType[])=>dispatch(setUsersAC(users))
    }
  }

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)