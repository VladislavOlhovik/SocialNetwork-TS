import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Navbar/Nav';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { StoreType } from './Redux/state';

type appPropsType={
  store: StoreType
}


const App = (props:appPropsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=><Profile 
                                               state={props.store.getState().profilePage}
                                               dispatch={props.store.dispatch.bind(props.store)}/>} />
          <Route path='/dialogs' render={()=><Dialogs store={props.store}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
