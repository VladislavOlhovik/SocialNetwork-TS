import React from 'react';
import s from './MyPost.module.css';
import { Post } from './Post/Post';
import { ProfilePageType } from '../../../Redux/state';

type myPostPropsType={
  postdata:ProfilePageType
  addPost:(postMessage:string)=>void
  updateNewPostText:(newText:string)=>void
}

export const MyPost = (props:myPostPropsType) => {
  const newPostElement=React.createRef<HTMLTextAreaElement>()
  const addPost=()=>{
    if(newPostElement.current){
    props.addPost(newPostElement.current.value)
    }
  }
  const onPostChange=()=>{
    if(newPostElement.current){
      props.updateNewPostText(newPostElement.current.value)
  }
}
   return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.postdata.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.postdata.postData.map(el=><Post message={el.message} likeCounts={el.likeCounts} />)}
      </div>
    </div >
  )
}