import React from "react";
import { UsersType } from "../../Redux/users-reducer";
import styles from "./Users.module.css";
import userPhoto from "../../images/user.png";
import { NavLink } from "react-router-dom";

type UserPropsType = {
  user: UsersType;
  followingInProgress: string[];
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
};
const User = ({
  user,
  followingInProgress,
  follow,
  unFollow,
}: UserPropsType) => {
  return (
    <div className={styles.wrapper}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small ? user.photos.small : userPhoto}
              alt="users"
              className={styles.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unFollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span className={styles.content}>
        <span>
          <div>{user.name}</div>
          <div>{user.status ? user.status : "not status"}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
