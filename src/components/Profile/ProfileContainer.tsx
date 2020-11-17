import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import {getUserProfile} from '../../Redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type ProfileContainerProps={
  getUserProfile:(userId:string)=>void
  profile:any
}
type PropsType = RouteComponentProps<{userId:string}>&ProfileContainerProps

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = (state:RootType) => {
  return {
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth,
  }
}

export default compose<ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps,{getUserProfile}),
  withRouter
)(ProfileContainer) 