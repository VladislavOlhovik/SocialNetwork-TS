import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://gadgetmedics.com/wp-content/uploads/2020/01/illustration-geiranger.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  )
}