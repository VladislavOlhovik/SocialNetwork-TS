import React, { ComponentType } from "react";
import { connect } from "react-redux";
import styles from "./Users.module.css";
import { RootType } from "../../Redux/redux-store";
import {
  follow,
  requestUsers,
  getUsersCurrentPage,
  unFollow,
  UsersType,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../Redux/users-selectors";

type UsersContainerPropsType = {
  users: UsersType[];
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: string[];
  requestUsers: (currentPage: number, pageSize: number) => void;
  getUsersCurrentPage: (currentPage: number, pageSize: number) => void;
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
};
class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (el: number) => {
    this.props.getUsersCurrentPage(el, this.props.pageSize);
  };
  render() {
    return (
      <>
        <div className={`${styles.preloader} ${this.props.isFetching&&styles.preloaderOn}`}>
          <Preloader/>
        </div> 
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
      </>
    );
  }
}

// const mapStateToProps = (state:RootType) =>{
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount:state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress,
//     }
// }
const mapStateToProps = (state: RootType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, {
    follow,
    unFollow,
    requestUsers,
    getUsersCurrentPage,
  })
)(UsersContainer);
