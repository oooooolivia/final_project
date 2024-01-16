import React, { useState } from 'react'
import './Login.css'

export default function Login({ setIsLogin }) {
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')

    //mock database
    const user1 = {
        name: 'steven',
        password: '123'
    }

    const handleSubmit = (e) => {
        e.preventDefault() //防止刷新, look into database if the user name and password match
        console.log(userName,userPass)
        if (user1.name === userName && user1.password === userPass) {
           console.log('login sucess') 
           setIsLogin(true)
           localStorage.setItem('isLogin',true)
        } else{
            console.log('lonin failed')
            setIsLogin(false)
        }
    }
    return (
    <div>
        <form onSubmit= {handleSubmit} >
            <h1> Login </h1>
            <label>User Name</label>
            <input value = {userName} onChange={(e) => setUserName(e.target.value) }/>
            <label>Password</label>
            <input value = {userPass} type = 'password' onChange={(e) => setUserPass(e.target.value) }/>
            <button>Login</button>
        </form>
      
    </div>
    )
}