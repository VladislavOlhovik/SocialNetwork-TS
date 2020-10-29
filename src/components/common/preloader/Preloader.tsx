import React from 'react';
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.ldshourglass}></div>
        </div>
    )
}

export default Preloader