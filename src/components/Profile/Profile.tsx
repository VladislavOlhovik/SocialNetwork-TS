import React from 'react';
import { ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostContainer } from './MyPosts/MyPostContainer';

export type ProfilePropsType = {
  profile:any
  status:string
  updateUserStatus:(status:string)=>void
  isOwner:boolean
  savePhoto:(file:File)=>void
}

export const Profile = (props:ProfilePropsType) =>{ 
    return(
        <div>
          <ProfileInfo profile={props.profile}
                       isOwner={props.isOwner}
                       savePhoto={props.savePhoto}
                       status = {props.status}
                       updateUserStatus = {props.updateUserStatus}/>
          <MyPostContainer/>
      </div>
    )
}