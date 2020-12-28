import React from "react";
import { UsersType } from "../../Redux/users-reducer";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import styles from "./Users.module.css";


type UsersPropsType = {
  users: UsersType[];
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  followingInProgress: string[];
  onPageChanged: (el: number) => void;
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
};
const Users = ({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  followingInProgress,
  onPageChanged,
  follow,
  unFollow,
}: UsersPropsType) => {
  return (
    <div>
      <div className={styles.paginator}>
        <Paginator
          portionSize={20}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalItemsCount={totalUsersCount}
        />
      </div>
      {users.map((el) => (
        <User
          key={el.id}
          follow={follow}
          followingInProgress={followingInProgress}
          unFollow={unFollow}
          user={el}
        />
      ))}
    </div>
  );
};

export default Users;
