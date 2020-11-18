import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../Redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type ProfileContainerProps={
  getUserProfile:(userId:string)=>void
  getUserStatus:(userId:string)=>void
  updateUserStatus:(status:string)=>void
  profile:any
  userID:string
  status:string
}
type PropsType = RouteComponentProps<{userId:string}>&ProfileContainerProps

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userID;
    }
    this.props.getUserStatus(userId);
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile}
                 status = {this.props.status}
                 updateUserStatus = {this.props.updateUserStatus} />
      </div>
    );
  }
}
const mapStateToProps = (state:RootType) => {
  return {
    profile:state.profilePage.profile,
    userID: state.auth.id,
    status: state.profilePage.status,
  }
}

export default compose<ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus}),
  withRouter
)(ProfileContainer) 