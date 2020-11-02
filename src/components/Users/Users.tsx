import React from "react";
import { UsersType } from "../../Redux/users-reducer";
import styles from "./Users.module.css";
import userPhoto from "../../images/user.png";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";

type UsersPropsType = {
  users: UsersType[];
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  followingInProgress:string[]
  onPageChanged: (el: number) => void;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  toggleFolowingProgress:(isFetching:boolean,userId:string)=>void
};
const Users = (props: UsersPropsType) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((el, i) => {
          return (
            <span
              onClick={() => props.onPageChanged(el)}
              key={i}
              className={
                props.currentPage === el ? styles.selectedPage : styles.selected
              }
            >
              -{el}-
            </span>
          );
        })}
      </div>
      {props.users.map((el) => (
        <div key={el.id} className={styles.wrapper}>
          <span>
            <div>
              <NavLink to={"/profile/" + el.id}>
                <img
                  src={el.photos.small ? el.photos.small : userPhoto}
                  alt="users"
                  className={styles.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {el.followed ? (
                <button disabled = {props.followingInProgress.some(id=>id===el.id)}
                  onClick={() => {
                    props.toggleFolowingProgress(true,el.id)
                    followAPI.unFollow(el.id)
                        .then((data) => {       
                        if(data.resultCode===0){
                            props.unfollow(el.id);
                        }
                        props.toggleFolowingProgress(false,el.id)
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled = {props.followingInProgress.some(id=>id===el.id)}
                  onClick={() => {
                    props.toggleFolowingProgress(true,el.id)
                    followAPI.follow(el.id)
                      .then((data) => {       
                      if(data.resultCode===0){
                        props.follow(el.id)
                      }
                      props.toggleFolowingProgress(false,el.id)
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span className={styles.content}>
            <span>
              <div>{el.name}</div>
              <div>{el.status ? el.status : "not status"}</div>
            </span>
            <span>
              <div>{"el.location.country"}</div>
              <div>{"el.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
