import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
})

export type RootType = ReturnType<typeof reducers>
let store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store


export default store