import React from "react";
import styles from './Paginator.module.css'

type PaginatorPropsType = {
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  onPageChanged: (el: number) => void;
};
const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}: PaginatorPropsType) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((el, i) => {
        return (
          <span
            onClick={() => onPageChanged(el)}
            key={i}
            className={
              currentPage === el ? styles.selectedPage : styles.selected
            }
          >
            -{el}-
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
