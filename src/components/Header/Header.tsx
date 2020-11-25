import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { HeaderPropsType } from "./HeaderContainer";

export const Header = (props:HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt='img' />
      <div className={s.loginBlock}>
        {props.isAuth
        ?<div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
        :<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
