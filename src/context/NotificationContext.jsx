import { createContext, useContext, useState } from "react";

const Notification = ({ message, severity }) => {
    const background = {
        success: 'green',
        danger: 'red',
        warning: 'yellow',
        default: 'blue'
    }


const notificationStyle = {
    position: "absolute",
    top: 100,
    padding: 10,
    borderRadius: 5,
    right: 30,
    backgroundColor: background[severity] || background.default,
    color: "white"
}

if (message === '') return

return (
    <div style={notificationStyle}>
        {message}
    </div>
)
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        },2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () =>{
    return useContext(NotificationContext)
}