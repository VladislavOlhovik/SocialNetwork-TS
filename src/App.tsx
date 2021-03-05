import React from 'react';
import './App.css';
import { Nav } from './components/Navbar/Nav';
import { Redirect, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { RootType } from './Redux/redux-store'
import Preloader from './components/common/preloader/Preloader';
import WithSuspense from './hoc/WithSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Chat = React.lazy(() => import('./components/Chat/Chat'));

type AppPropsType = {
  initializeApp: () => void
  initialized: boolean
}

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Redirect from='/' to='/profile'/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/chat" render={WithSuspense(Chat)} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootType) => ({
  initialized: state.app.initialized,
})

export default compose(
  connect( mapStateToProps, { initializeApp }),
)(App);
