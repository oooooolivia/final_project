import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar({isLogin, setIsLogin}) {
    const handleLogout = () =>{
        if(isLogin){
            setIsLogin(false) //false有什么用呢
            localStorage.setItem('isLogin',false)
        }
    }
    return (
        <div className = 'navbar'>
                <Link to = '/'><p>Home</p></Link>
                <div className ='right_nav'>
                     <Link to='/cart'><span>cart</span></Link>
                <p onClick ={handleLogout} >{isLogin? 'Logout':'Login'} </p>
            </div> 
    </div>
    )
}