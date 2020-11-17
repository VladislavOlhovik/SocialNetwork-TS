import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import { follow, getUsers, getUsersCurrentPage, unFollow, UsersType } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

type UsersContainerPropsType = {
    users:UsersType[]
    pageSize: number
    currentPage:number
    totalUsersCount:number
    isFetching:boolean
    followingInProgress:string[]
    getUsers:(currentPage:number, pageSize: number)=>void
    getUsersCurrentPage:(currentPage: number, pageSize: number)=>void
    follow: (userId:string)=>void
    unFollow: (userId:string)=>void
}
class UsersContainer extends React.Component<UsersContainerPropsType>{
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (el:number) => {
        this.props.getUsersCurrentPage(el,this.props.pageSize) 
    }
    render(){  
       return (
         <>
           {this.props.isFetching ? (
             <Preloader />
           ) : (
             <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChanged={this.onPageChanged}
               unFollow={this.props.unFollow}
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
             />
           )}
         </>
       );
    }
}


const mapStateToProps = (state:RootType) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

export default compose<ComponentType>(
  connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers,
    getUsersCurrentPage,
  }),
  WithAuthRedirect
)(UsersContainer);