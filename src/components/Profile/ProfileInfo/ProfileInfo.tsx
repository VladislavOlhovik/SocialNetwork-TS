import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import { ProfilePropsType } from '../Profile';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../images/user.png'



export const ProfileInfo = (props:ProfilePropsType) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img className={s.img} src="https://gadgetmedics.com/wp-content/uploads/2020/01/illustration-geiranger.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.wrapper}>
          <span>
            <div>
              <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt="users" className={s.usersPhoto} />
            </div>
          </span>
          <span className={s.content}>
            <span>
              <div>{props.profile.fullName}</div>
              <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'no status'}</div>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}