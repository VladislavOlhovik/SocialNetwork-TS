import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';

type AuthType = {
  id:null|number,
  login:null|string,
  email:null|string,
  isAuth:boolean,
}
type AuthActionType = ReturnType<typeof setAuthUserData>

const initialState:AuthType = {
    id:null,
    login:null,
    email:null,
    isAuth:false,
}


const authReducer = (state=initialState, action:AuthActionType) => {
  switch (action.type) {
    case 'SET_USERS_DATA':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export const setAuthUserData = (id: number|null, login: string|null, email: string|null, isAuth: boolean ) => ({
    type: 'SET_USERS_DATA', 
    payload: { id, login, email, isAuth } 
} as const ) 

export const getAuthUserData = () => (dispatch:Dispatch) => {
  authAPI.getMe().then((data) => {
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};
export const login = (login: string, password: string, rememberMe: boolean) => (dispatch:any) => {
  authAPI.login(login, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = data.messages.length>0?data.messages[0]:'Some error'
      dispatch(stopSubmit('login', {_error:message}))
    }
  });
};
export const logout = () => (dispatch:Dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    } 
  });
};

export default authReducer;
