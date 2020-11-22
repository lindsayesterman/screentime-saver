import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props){
  return(
    <div className="nav-bar">
      <Link to='/'>
        <h1 className="title">Screentime Saver</h1>
      </Link>
      <Link to='/profile'>
        <h4 className="profile">Account</h4>
      </Link>
      <Link to='/findfriends'>
        <h4 className="connect">Connect</h4>
      </Link>
      <Link to='/friends'>
        <h4 className="friends">Friends</h4>
      </Link>
    </div>
    )
  }