import React from 'react';
import { ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostContainer } from './MyPosts/MyPostContainer';

export type ProfilePropsType = {
  profile:any
}

export const Profile = (props:ProfilePropsType) =>{ 
    return(
        <div>
          <ProfileInfo profile={props.profile}/>
          <MyPostContainer/>
      </div>
    )
}