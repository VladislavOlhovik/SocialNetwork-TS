import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Navbar/Nav';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={()=><ProfileContainer/>} />
          <Route path='/dialogs' render={()=><DialogsContainer/>} />
          <Route path='/users' render={()=><UsersContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
  );
}


export default App;
