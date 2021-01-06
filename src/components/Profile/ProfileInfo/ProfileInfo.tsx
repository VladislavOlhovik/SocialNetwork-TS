import React, { ChangeEvent } from 'react';
import Preloader from '../../common/preloader/Preloader';
import { ProfilePropsType } from '../Profile';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../images/user.png'
import ProfileStatusWithHook from './ProfileStatusWithHook';



export const ProfileInfo = (props:ProfilePropsType) => {
  const sendFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      props.savePhoto(e.target.files[0])
    }
  }
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.wrapper}>
          <span>
            <div>
              <img src={props.profile.photos.large || userPhoto} alt="users" className={s.usersPhoto} />
            </div>
            {props.isOwner && <input type='file' onChange={sendFile}/>}
          </span>
          <span className={s.content}>
            <span>
              <div>{props.profile.fullName}</div>
              <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'no status'}</div>
            </span>
          </span>
        </div>
        <ProfileStatusWithHook isOwner={props.isOwner} status = {props.status} updateUserStatus = {props.updateUserStatus}/>
      </div>
    </div>
  )
}