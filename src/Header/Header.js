import React from 'react'
import '../Header/Header.css'
import {userInfo} from '../Data'

const Header = () => {
  return (
    <header className="px-4">

        <h2 className="welcomeUsertxt">Welcome  
            <span className='username'> {userInfo.username}</span>
          </h2>
          <p className='userType fw-light'>{userInfo.userType}</p>
    </header>
  )
}

export default Header