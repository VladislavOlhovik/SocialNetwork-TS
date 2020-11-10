import { authAPI } from './../api/api';

type AuthType = {
  id:null|string,
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
        isAuth:true,
      }
    default:
      return state;
  }
};

export const setAuthUserData = (data:any) => ({ type: 'SET_USERS_DATA', payload:data }as const);

export const getAuthUserData = () => (dispatch:(action:AuthActionType)=>void) => {
  authAPI.getMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
    }
  });
};

export default authReducer;
