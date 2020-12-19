import React from "react";
import { UsersType } from "../../Redux/users-reducer";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

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
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />
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
