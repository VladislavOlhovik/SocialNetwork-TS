
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


export default authReducer;
