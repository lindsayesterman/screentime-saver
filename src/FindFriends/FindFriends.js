import React from 'react'
import { Route, Link } from 'react-router-dom'
import './FindFriends.css'
import NavBar from '../NavBar/NavBar.js'

export default class FindFriends extends React.Component{
    render(){
        return (
            <div className="App">
            <NavBar />
            <input type="search" className="search-bar" placeholder="Search.."></input> 
            </div>
            );
        }
    }