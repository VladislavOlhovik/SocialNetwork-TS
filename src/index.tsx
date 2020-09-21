import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addMassage, addPost, RootStateType, subscribe, updateNewMessageText, updateNewPostText } from './Redux/state';

const rerenderEntireTree=()=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       addMassage={addMassage}
                       updateNewMessageText={updateNewMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
);}

rerenderEntireTree()
subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
