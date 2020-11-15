import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props){
    return(
        <div className="nav-bar">
        <Link to='/'>
            <h1 className="title">Screentime Saver</h1>
        </Link>
        <Link to='/'>
            <h4 className="logout">Log Out</h4>
          </Link>
        <Link to='/profile'>
          <h4 className="profile">Profile</h4>
        </Link>
          <Link to='/friends'>
            <h4 className="connect">Connect with friends</h4>
          </Link>
          </div>
    )
}