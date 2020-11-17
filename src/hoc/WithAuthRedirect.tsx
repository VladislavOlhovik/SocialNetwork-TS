import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { DialogsActionType } from '../Redux/dialogs-reducer'
import { RootType } from '../Redux/redux-store'

const mapStateToProps = (state:RootType)=>{
    return{
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch:(action:DialogsActionType)=>void)=>{
    return{}
}
type WithAuthRedirectPropsType = {
    isAuth:boolean
}
export const WithAuthRedirect = <P extends object>(Component:React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<WithAuthRedirectPropsType> {
        render(){
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props as P}/>
        }
    }
    return connect(mapStateToProps,mapDispatchToProps)(RedirectComponent) 
}