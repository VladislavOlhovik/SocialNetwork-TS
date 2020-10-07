import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import { ActionTypes, RootStateType } from '../../../Redux/store';
import { MyPost } from './MyPost';


const mapStateToProps = (state:RootStateType)=>{
  return{
    newPostText: state.profilePage.newPostText,
    postdata: state.profilePage.postData
  }
}
const mapDispatchToProps = (dispatch:(action:ActionTypes)=>void)=>{
  return{
    updateNewPostText: (e:string)=>dispatch(updateNewPostTextActionCreator(e)),
    addPost: ()=>dispatch(addPostActionCreator())
  }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
