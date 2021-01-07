import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from '../../Redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { ProfileDataFormType } from './ProfileInfo/ProfileDataForm';

type ProfileContainerProps={
  getUserProfile:(userId:string)=>void
  getUserStatus:(userId:string)=>void
  updateUserStatus:(status:string)=>void
  profile:any
  userID:string
  status:string
  savePhoto:(file:File)=>void
  saveProfile:(formData:ProfileDataFormType)=>Promise<void>
}
type PropsType = RouteComponentProps<{userId:string}>&ProfileContainerProps

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userID;
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.getUserStatus(userId);
    this.props.getUserProfile(userId);
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps: PropsType){
    if(this.props.match.params.userId!==prevProps.match.params.userId){
      this.refreshProfile()
    }
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile}
                 isOwner={!this.props.match.params.userId}
                 savePhoto={this.props.savePhoto}
                 saveProfile={this.props.saveProfile}
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
  connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer) 