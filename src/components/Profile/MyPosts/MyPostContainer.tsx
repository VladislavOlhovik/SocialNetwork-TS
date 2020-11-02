import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import { RootType } from '../../../Redux/redux-store';
import { ProfileActionType } from '../../../Redux/profile-reducer';
import { MyPost } from './MyPost';


const mapStateToProps = (state:RootType)=>{
  return{
    newPostText: state.profilePage.newPostText,
    postdata: state.profilePage.postData
  }
}
const mapDispatchToProps = (dispatch:(action:ProfileActionType)=>void)=>{
  return{
    updateNewPostText: (e:string)=>dispatch(updateNewPostTextActionCreator(e)),
    addPost: ()=>dispatch(addPostActionCreator())
  }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
