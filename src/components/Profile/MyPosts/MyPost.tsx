import React from 'react';
import s from './MyPost.module.css';
import { Post } from './Post/Post';
import { ProfilePageType } from '../../../Redux/state';

type myPostPropsType={
  postdata:ProfilePageType
  addPost:(postMessage:string)=>void
}

export const MyPost = (props:myPostPropsType) => {
  const newPostElement=React.createRef<HTMLTextAreaElement>()
  const addPost=()=>{
    if(newPostElement.current){
    const text= newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value=''
    }
  }
   return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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