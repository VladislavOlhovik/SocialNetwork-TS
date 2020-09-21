import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMassage, addPost, RootStateType, updateNewMessageText, updateNewPostText } from './Redux/state';

export const rerenderEntireTree=(state:RootStateType)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       addMassage={addMassage}
                       updateNewMessageText={updateNewMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
);}