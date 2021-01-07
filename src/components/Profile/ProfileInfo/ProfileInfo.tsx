import React, { ChangeEvent, useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import { ProfilePropsType } from '../Profile';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../images/user.png'
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataForm, { ProfileDataFormType } from './ProfileDataForm';



export const ProfileInfo = (props:ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false)
  const onSubmit = (formData:ProfileDataFormType) => {
    props.saveProfile(formData).then(()=>{
      setEditMode(false)
    })
  }
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
          <b>Status: </b><ProfileStatusWithHook isOwner={props.isOwner} status = {props.status} updateUserStatus = {props.updateUserStatus}/>
        <div>
          {editMode
          ?<ProfileDataForm initialValues={props.profile} onSubmit={onSubmit}/>
          :<ProfileData isOwner={props.isOwner} profile={props.profile} goToEditMode={()=>setEditMode(true)}/>}
        </div>
      </div>
    </div>
  )
}

const ProfileData = ({profile, goToEditMode, isOwner}:ProfileDataPropsType) => {
  return(
    <div>
      {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>fullName: </b>{profile.fullName}
      </div>
      <div>
        <b>looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'No'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>}
      <div>
        <b>About Me: </b>{profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>{Object.keys(profile.contacts).map((el, i) => {
          return <Contact key={i} contactTitle={el} contactValue={profile.contacts[el]} />
        })}
      </div>
    </div>
  )
}


export const Contact = ({contactTitle, contactValue}:ContactPropsType) => {
  return <div style={{paddingLeft:'10px'}}>-<b>{contactTitle}:</b>{contactValue}</div>
}

type ProfileDataPropsType = {
  profile:any
  goToEditMode:()=>void
  isOwner:boolean
}
type ContactPropsType = {
  contactTitle:string
  contactValue:string
}