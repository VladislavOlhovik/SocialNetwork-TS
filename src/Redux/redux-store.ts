import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';


let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer,
})

export type RootType = ReturnType<typeof reducers>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// let store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store


export default store