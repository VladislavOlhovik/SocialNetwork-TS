import Axios from 'axios';
import React from 'react';
import { UsersType } from '../../Redux/users-reducer';
import styles from './Users.module.css'
import userPhoto from '../../images/user.png'
type UsersPropsType = {
    users:UsersType[]
    follow:(userId:string)=>void
    unfollow: (userId:string)=>void
    setUsers: (users:UsersType[])=>void 
}
class Users extends React.Component<UsersPropsType>{
    
    componentDidMount(){
        Axios.get('https://social-network.samuraijs.com/api/1.0/users?page=100').then(respons=>{
        this.props.setUsers(respons.data.items)
        })        
    }
    render(){    
       return(
        <div>
            {
                this.props.users.map(el=><div key={el.id} className={styles.wrapper}>
                    <span>
                        <div>
                            <img src={el.photos.small?el.photos.small:userPhoto} alt="users" className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {el.followed?<button onClick={()=>this.props.unfollow(el.id)}>Unfollow</button>
                            :<button onClick={()=>this.props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                    <span className={styles.content}>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status?el.status:'not status'}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
}
export default Users