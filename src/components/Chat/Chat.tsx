import React, { ChangeEvent } from 'react'
import s from './Chat.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import userPhoto from '../../images/user.png'
import { useSelector } from 'react-redux'
import { RootType } from '../../Redux/redux-store'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

type MessagesType = {
    userId: string
    photo: string
    userName: string
    message: string
}

const Chat = () => {
    const messagesBlockRef = useRef<HTMLDivElement>(null)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<MessagesType[]>([])
    const [socket, setSocket] = useState<WebSocket|null>(null)
    const userID = useSelector<RootType, number | null>(state=>state.auth.id)

    useEffect(() => {
        const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/chatHandler.ashx')
        setSocket(socket)
        return () => {
            socket.onclose = function () {
            }
        }
    }, [])
    if (socket) {
        socket.onmessage = function (event) {
          setMessages([...messages, ...JSON.parse(event.data)]);
          messagesBlockRef.current &&
            messagesBlockRef.current.scrollTo(
              0,
              messagesBlockRef.current.scrollHeight
            );
        };
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const sendMessage = () => {
        if (message.trim() !== '') {
            socket!.send(message)
            setMessage('')
        }
    }

    return (
        <div>
            <h3 className={s.header}>Chat</h3>
            <div className={s.messages} ref={messagesBlockRef}>
                {messages.map((m, i) => {
                    return (
                        <div key={i} className={`${s.wrapper} ${userID===+m.userId?s.myMessage:''}`}>
                            <img src={m.photo?m.photo:userPhoto} alt="avatar" />
                            <div className={`${userID===+m.userId?s.mySpeechbubble:s.speechbubble}`}>
                                <div className={s.name}>
                                    <div>{m.userName}</div>
                                </div>
                                <div className={s.message}>{m.message}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={s.inputss}>
                <input value={message} onChange={onChangeHandler} />
                <button onClick={sendMessage}>SEND</button>
            </div>
        </div>
    )
}

export default WithAuthRedirect(Chat)