import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import {setUserProfile} from '../../Redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

type ProfileContainerProps={
  setUserProfile:(prolile:any)=>void
  profile:any
}
type PropsType = RouteComponentProps<{userId:string}>&ProfileContainerProps

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId){
      userId='2'
    } 
    profileAPI.getUser(userId)
    .then(respons=>{
            this.props.setUserProfile(respons.data)
        }) 
  } 
  render(){
    return( 
        <div>
          <Profile profile={this.props.profile}/>
      </div>
    )
  }
}
const mapStateToProps = (state:RootType) => {
  return {
    profile:state.profilePage.profile
  }
}

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer))