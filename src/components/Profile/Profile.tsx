import React from 'react';
import s from './Profile.module.css';
import { MyPost } from './MyPosts/MyPost';
import { ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../Redux/state';
type profilePropsType={
  state:ProfilePageType
  addPost:()=>void
  updateNewPostText:(newText:string)=>void
}

export const Profile = (props:profilePropsType) =>{ 
    return(
        <div>
          <ProfileInfo/>
          <MyPost postdata={props.state} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
      </div>
    )
}