import React from 'react';
import { v1 } from 'uuid';
import { UsersType } from '../../Redux/users-reducer';
import styles from './Users.module.css'
type UsersPropsType = {
    users:UsersType[]
    follow:(userId:string)=>void
    unfollow: (userId:string)=>void
    setUsers: (users:UsersType[])=>void 
}

export const Users = (props:UsersPropsType) => {
    if(props.users.length===0){
        props.setUsers([
            { id: v1(), photoUrl:'https://1.bp.blogspot.com/-YV4wAD10BL4/TjentlHZOeI/AAAAAAAAAO4/a_0mMPfWSp0/s1600/Bart_Simpson.jpg', 
            followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country:'Belarus'}},
            { id: v1(), photoUrl:'https://1.bp.blogspot.com/-YV4wAD10BL4/TjentlHZOeI/AAAAAAAAAO4/a_0mMPfWSp0/s1600/Bart_Simpson.jpg', 
            followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country:'Russia'}},
            { id: v1(), photoUrl:'https://1.bp.blogspot.com/-YV4wAD10BL4/TjentlHZOeI/AAAAAAAAAO4/a_0mMPfWSp0/s1600/Bart_Simpson.jpg', 
            followed: false, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', country:'Ukraina'}}
          ])
    }


    return(
        <div>
            {
                props.users.map(el=><div key={el.id} className={styles.wrapper}>
                    <span>
                        <div>
                            <img src={el.photoUrl} alt="users" className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {el.followed?<button onClick={()=>props.unfollow(el.id)}>Unfollow</button>
                            :<button onClick={()=>props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                    <span className={styles.content}>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}