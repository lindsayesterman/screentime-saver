import React from 'react'
import { Route, Link } from 'react-router-dom'
import './FindFriends.css'

export default class FindFriends extends React.Component{
    render(){
        return (
            <div className="App">
            <Route path="/friends">
            <h1 class="connect">Connect here!</h1>
            <input type="text" className="search-bar" placeholder="Search.."></input> 
            </Route>
            </div>
            );
        }
    }