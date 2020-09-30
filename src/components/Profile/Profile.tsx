import React from 'react';
import s from './Profile.module.css';
import { MyPost } from './MyPosts/MyPost';
import { ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ActionTypes, ProfilePageType } from '../../Redux/state';
type profilePropsType={
  state:ProfilePageType
  dispatch:(action:ActionTypes)=>void
}

export const Profile = (props:profilePropsType) =>{ 
    return(
        <div>
          <ProfileInfo/>
          <MyPost postdata={props.state} dispatch={props.dispatch}/>
      </div>
    )
}