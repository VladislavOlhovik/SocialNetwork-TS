import React, { useState } from "react";
import styles from './Paginator.module.css'

type PaginatorPropsType = {
  pageSize: number;
  currentPage: number;
  totalItemsCount: number;
  onPageChanged: (el: number) => void;
  portionSize?: number;
};
const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize=10,
}: PaginatorPropsType) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCount/portionSize)
  let startPortionNumber = Math.floor(currentPage/portionSize)
  if(!startPortionNumber){
    startPortionNumber = 1
  } else {
    startPortionNumber += 1
  }
  let [portionNumber, setPortionNumber] = useState(startPortionNumber)
  let leftPortionPageNumber = (portionNumber-1)*portionSize
  let rightPortionPageNumber = portionNumber*portionSize
  return (
    <div>
      {portionNumber > 1 && 
      <button onClick={()=>setPortionNumber((el)=>el-1)}>prev</button>}
      {pages.filter(el=>el>=leftPortionPageNumber&&el<=rightPortionPageNumber).map((el, i) => {
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
      {portionNumber<portionCount && 
      <button onClick={()=>setPortionNumber((el)=>el+1)}>next</button>}
    </div>
  );
};

export default Paginator;
