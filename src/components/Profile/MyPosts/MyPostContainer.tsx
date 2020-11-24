import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profile-reducer';
import { RootType } from '../../../Redux/redux-store';
import { ProfileActionType } from '../../../Redux/profile-reducer';
import { MyPost } from './MyPost';


const mapStateToProps = (state:RootType)=>{
  return{
    postdata: state.profilePage.postData
  }
}
const mapDispatchToProps = (dispatch:(action:ProfileActionType)=>void)=>{
  return{
    addPost: (newPostText: string)=>dispatch(addPostActionCreator(newPostText)),
  }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
