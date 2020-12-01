import { getAuthUserData } from './auth-reducer';

type AuthType = {
  initialized: boolean

}
type AuthActionType = ReturnType<typeof initializedSuccess>

const initialState: AuthType = {
  initialized: false,
}


const appReducer = (state=initialState, action:AuthActionType) => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS' } as const ) 

export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(()=>{
    dispatch(initializedSuccess())
  })
};


export default appReducer;
