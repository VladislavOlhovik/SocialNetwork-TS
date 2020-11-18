import React from 'react';
import { ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostContainer } from './MyPosts/MyPostContainer';

export type ProfilePropsType = {
  profile:any
  status:string
  updateUserStatus:(status:string)=>void
}

export const Profile = (props:ProfilePropsType) =>{ 
    return(
        <div>
          <ProfileInfo profile={props.profile}
                       status = {props.status}
                       updateUserStatus = {props.updateUserStatus}/>
          <MyPostContainer/>
      </div>
    )
}