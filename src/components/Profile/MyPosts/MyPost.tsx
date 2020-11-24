import React from 'react';
import s from './MyPost.module.css';
import { Post } from './Post/Post';
import { PostDataType } from '../../../Redux/profile-reducer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type myPostPropsType={
  postdata:Array<PostDataType>
  addPost:(newPostText: string)=>void
}

export const MyPost = (props:myPostPropsType) => {
  const addPost=(values: PostformPropsType)=>{
    props.addPost(values.newPostText)
  }

   return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
        <PostReduxForm onSubmit={addPost}/>
      <div className={s.posts}>
        {props.postdata.map(el=><Post key={el.id} message={el.message} likeCounts={el.likeCounts} />)}
      </div>
    </div >
  )
}

type PostformPropsType = {
  newPostText: string
}

const PostForm: React.FC<InjectedFormProps<PostformPropsType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Enter your New Post'} component={'textarea'} name={'newPostText'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const PostReduxForm = reduxForm<PostformPropsType>({form: 'post'})(PostForm)