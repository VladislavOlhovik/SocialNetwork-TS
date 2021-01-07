import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import style from '../../common/FormsControls/FormsControls.module.css'


const ProfileForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({
  handleSubmit, 
  error, 
  initialValues
}) => {
    return(
      <form onSubmit={handleSubmit}>
        <div>
          <b>full Name: </b>{createField('full Name', 'fullName', [], Input)}
        </div>
        <div>
          <b>looking for a job: </b>{createField('', 'lookingForAJob', [], Input, {type:'checkbox'})}
        </div>
        <div>
          <b>My professional skills: </b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
          <b>About Me: </b>{createField('About Me',  'aboutMe', [], Textarea)}
        </div>
        <div>
          <b>Contacts: </b>{initialValues.contacts && Object.keys(initialValues.contacts).map((el, i) => {
              return <div key={i}>
                  -<b>{el}: </b> {createField(`${el}`, `contacts.${el}`, [], Input)}
              </div>
          })}
        </div>
        {error&&<div className={error?style.formError:''}>
                {error}
            </div>}
        <button>save</button>
      </form>
    )
  }

  const ProfileDataForm = reduxForm<ProfileDataFormType>({form: 'profileEdit'})(ProfileForm)

  export type ProfileDataFormType = {
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
  };

  export default ProfileDataForm