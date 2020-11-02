import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css';
import { Post } from './Post/Post';
import { PostDataType } from '../../../Redux/profile-reducer';

type myPostPropsType={
  postdata:Array<PostDataType>
  newPostText:string
  updateNewPostText:(e:string)=>void
  addPost:()=>void
}

export const MyPost = (props:myPostPropsType) => {
  const addPost=()=>{
    props.addPost()
  }
  const onPostChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
      props.updateNewPostText(e.currentTarget.value)
}
   return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.postdata.map(el=><Post key={el.id} message={el.message} likeCounts={el.likeCounts} />)}
      </div>
    </div >
  )
}