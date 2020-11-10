import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import {getUserProfile} from '../../Redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';

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
    profile:state.profilePage.profile
  }
}

export default connect(mapStateToProps,{getUserProfile})(withRouter(ProfileContainer))