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
    case 'auth/SET_USERS_DATA':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export const setAuthUserData = (id: number|null, login: string|null, email: string|null, isAuth: boolean ) => ({
    type: 'auth/SET_USERS_DATA', 
    payload: { id, login, email, isAuth } 
} as const ) 

export const getAuthUserData = () => async (dispatch:Dispatch) => {
  let data = await authAPI.getMe()
    if (data.resultCode === 0) {
      let {id, login, email} = data.data
      dispatch(setAuthUserData(id, login, email, true));
    }
};
export const login = (login: string, password: string, rememberMe: boolean) => async (dispatch:any) => {
  let data = await authAPI.login(login, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = data.messages.length>0?data.messages[0]:'Some error'
      dispatch(stopSubmit('login', {_error:message}))
    }
};
export const logout = () => async (dispatch:Dispatch) => {
  let data = await authAPI.logout()
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    } 
};

export default authReducer;
