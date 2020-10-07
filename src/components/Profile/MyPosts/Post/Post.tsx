import React from 'react';
import s from './Post.module.css';
import { PostDataType } from '../../../../Redux/store';

export const Post: React.FC<PostDataType> = (props) =>{
    return(
      <div className={s.item}>
      <img src="https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg" alt=""/>
      {props.message}
      <div>
        <span>like</span> {props.likeCounts}
      </div>
      </div>
    )
}
// export type PostType={
//   message: string
//   likeCounts:number
//   id?:number
// }

